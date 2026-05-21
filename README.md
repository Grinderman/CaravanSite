# Hemsby Caravan Rental Website

This version fixes the Tailwind/PostCSS deployment error on Vercel.

## Vercel settings

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install

## What changed

Tailwind's PostCSS plugin now uses `@tailwindcss/postcss`, so this project includes that package and an updated `postcss.config.js`.
