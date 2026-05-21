# Hemsby Caravan Rental Website

A Vite + React + Tailwind website ready to deploy to Vercel.

This version includes:
- Fixed Tailwind/PostCSS configuration for Vercel
- Professional image gallery
- Placeholder image files already wired in
- Homepage hero section
- Features section
- Location section
- Enquiry form placeholder

## Replacing the photos

Go to:

```text
public/images
```

You will see these placeholder files:

```text
lounge.svg
kitchen.svg
bedroom.svg
shower.svg
outside.svg
```

The easiest method is to replace them with your own images using the same names, or update the paths in `src/App.jsx`.

Recommended real image names:

```text
lounge.jpg
kitchen.jpg
bedroom.jpg
shower.jpg
outside.jpg
```

If you use JPG files, update the paths in `src/App.jsx` from:

```jsx
/images/lounge.svg
```

to:

```jsx
/images/lounge.jpg
```

## Vercel settings

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install
