# CEET Website — Competence Electrical Engineering Tech

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

This outputs a static site to `dist/` — upload that folder to any static
host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Where to edit things

- **All text content** (services, taglines, contact info, internship copy,
  stats): `src/data/siteData.js`. Change it there and it updates everywhere.
- **Logo**: currently a text badge ("CE") in `src/components/Navbar.jsx`.
  If you have a clean, isolated logo file (not embedded in a flyer), drop it
  in `src/assets/` and swap the badge markup for an `<img>` tag.
- **Official seal / stamp**: already using your real stamp image
  (`src/assets/stamp.jpg`), shown in the footer.
- **Gallery photos**: `src/assets/gallery/`. All eight tiles use your real
  installation photos — swap the files and update `galleryItems` in
  `siteData.js` to change them.
- **Project video**: your walkthrough video is at
  `src/assets/video/project-walkthrough.mp4` and plays in the Gallery
  section's video player.
- **Contact form**: currently opens a pre-filled email as a fallback
  (`src/components/Contact.jsx`). To collect submissions properly, connect
  it to a service like Formspree or EmailJS — the form is already wired
  with React state, so it's a small swap in the `handleSubmit` function.
- **Map**: the embedded map in the Contact section uses a generic
  "Nkwen, Bamenda" search. For a pinpoint location, replace `mapEmbedSrc` in
  `siteData.js` with an embed URL for your exact address from Google Maps
  (Share → Embed a map).

## Notes

- The email on your two flyers doesn't quite match
  (`electriccompetence95@gmail.com` vs. a typo `electriccopetence95@gmail.com`
  on the internship flyer) — the site currently uses the first, non-typo
  version. Double check before going live.
- The floating WhatsApp button uses your phone number formatted for
  WhatsApp — confirm that number is WhatsApp-enabled, or remove that button
  in `src/components/FloatingCallButton.jsx` if not.
