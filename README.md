# Hemsby Caravan Rental Website

A Vite + React + Tailwind website ready to deploy to Vercel.

## Local setup

1. Install Node.js from https://nodejs.org
2. Open a terminal in this folder
3. Run:

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Create a GitHub account if you do not already have one.
2. Create a new GitHub repository.
3. Upload all files from this folder into the repository.
4. Go to Vercel and choose **Add New > Project**.
5. Import the GitHub repository.
6. Vercel should auto-detect Vite.
7. Use these settings if asked:

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install

## Notes

The enquiry form is currently visual only. To make it actually send messages, connect it to:
- Netlify Forms
- Formspree
- EmailJS
- a Vercel serverless function
- or replace the button with an Airbnb booking link.
