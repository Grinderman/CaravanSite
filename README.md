# Hemsby Caravan Rental Website

A Vite + React + Tailwind website ready to deploy to Vercel.

This version includes:
- Fixed Tailwind/PostCSS configuration for Vercel
- JPG photo placeholders already connected
- Added Dining Area photo slot
- Removed the photo replacement tip from the page

## Replacing the photos

Go to:

```text
public/images
```

Replace these JPG files with your real photos using the same filenames:

```text
lounge.jpg
kitchen.jpg
dining.jpg
bedroom.jpg
shower.jpg
outside.jpg
```

Keep the filenames exactly the same and the website will update automatically after GitHub/Vercel redeploys.

## Vercel settings

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install
