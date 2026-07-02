# CEET Website: Competence Electrical Engineering Tech

A React + Tailwind site for CEET, built from your business card, flyers and
seal. Ready to run locally, and ready to have your own photos and video
dropped in.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

This outputs a static site to `dist/`, upload that folder to any static
host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Customer reviews (local MongoDB, dev only)

The Reviews section (`src/components/Reviews.jsx`) posts to `/api/reviews`
(`api/reviews.js`), a serverless function that talks to MongoDB via the
official Node.js driver. Reviews are public and post instantly; there's no
moderation step.

**Important limitation:** this is wired up to a MongoDB server running on
your own machine (e.g. MongoDB Community Server, browsable with Compass).
That works fine while testing locally, but once the site is deployed to
Vercel, Vercel's servers run in the cloud and **cannot reach `localhost` on
your laptop**, so the review form will fail on the live site until the
database is moved somewhere reachable from the internet (the standard option
is a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster; Compass can
point at that exact same cluster too, no change in workflow). Swapping over
later is just an env var change, no code change needed.

To run it locally:

1. Make sure MongoDB Community Server is installed and running
   (`mongod`, default port 27017). Compass can connect to
   `mongodb://127.0.0.1:27017` to browse the data.
2. Copy `.env.local.example` to `.env.local` (already gitignored); defaults
   to `mongodb://127.0.0.1:27017` / database `ceet`, adjust if yours differs.
3. This API route needs the Vercel dev server, not plain Vite; run
   `vercel dev` instead of `npm run dev` (requires the Vercel CLI, and the
   project linked once with `vercel link`). The `reviews` collection is
   created automatically on first request.

## Where to edit things

- **All text content** (services, taglines, contact info, internship copy,
  stats): `src/data/siteData.js`. Change it there and it updates everywhere.
- **Logo**: your real logo, `src/assets/logo.png` (background made transparent
  from the original `assets/logo.jpg`), used in the navbar and as the favicon
  in `index.html`.
- **Official seal / stamp**: already using your real stamp image
  (`src/assets/stamp.jpg`), shown in the footer.
- **Gallery photos**: `src/assets/gallery/`. All eight tiles use your real
  installation photos; swap the files and update `galleryItems` in
  `siteData.js` to change them.
- **Project video**: your walkthrough video is at
  `src/assets/video/project-walkthrough.mp4` and plays in the Gallery
  section's video player.
- **Contact form**: currently opens a pre-filled email as a fallback
  (`src/components/Contact.jsx`). To collect submissions properly, connect
  it to a service like Formspree or EmailJS; the form is already wired
  with React state, so it's a small swap in the `handleSubmit` function.
- **Map**: the embedded map in the Contact section uses a generic
  "Nkwen, Bamenda" search. For a pinpoint location, replace `mapEmbedSrc` in
  `siteData.js` with an embed URL for your exact address from Google Maps
  (Share → Embed a map).

## Notes

- The email on your two flyers doesn't quite match
  (`electriccompetence95@gmail.com` vs. a typo `electriccopetence95@gmail.com`
  on the internship flyer); the site currently uses the first, non-typo
  version. Double check before going live.
- The floating WhatsApp button uses your phone number formatted for
  WhatsApp; confirm that number is WhatsApp-enabled, or remove that button
  in `src/components/FloatingCallButton.jsx` if not.
