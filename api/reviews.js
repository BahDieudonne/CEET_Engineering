import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017'
const dbName = process.env.MONGODB_DB || 'ceet'

// Reused across warm invocations so we don't reconnect on every request.
let clientPromise
function getCollection() {
  if (!clientPromise) {
    clientPromise = new MongoClient(uri).connect()
  }
  return clientPromise.then((client) => client.db(dbName).collection('reviews'))
}

function toReview(doc) {
  return {
    id: doc._id.toString(),
    name: doc.name,
    rating: doc.rating,
    message: doc.message,
    created_at: doc.createdAt,
  }
}

export default async function handler(req, res) {
  try {
    const reviews = await getCollection()

    if (req.method === 'GET') {
      const docs = await reviews.find({}).sort({ createdAt: -1 }).limit(100).toArray()
      return res.status(200).json({ reviews: docs.map(toReview) })
    }

    if (req.method === 'POST') {
      const { name, rating, message } = req.body ?? {}

      const cleanName = typeof name === 'string' ? name.trim().slice(0, 80) : ''
      const cleanMessage = typeof message === 'string' ? message.trim().slice(0, 1000) : ''
      const cleanRating = Number(rating)

      if (!cleanName || !cleanMessage || !Number.isInteger(cleanRating) || cleanRating < 1 || cleanRating > 5) {
        return res.status(400).json({ error: 'Provide a name, a message, and a rating from 1 to 5.' })
      }

      const doc = { name: cleanName, rating: cleanRating, message: cleanMessage, createdAt: new Date() }
      const { insertedId } = await reviews.insertOne(doc)
      return res.status(201).json({ review: toReview({ ...doc, _id: insertedId }) })
    }

    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Could not reach the reviews database. Please try again.' })
  }
}
