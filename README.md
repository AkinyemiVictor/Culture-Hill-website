# Culture Hill

Next.js-based standard project setup for the Culture Hill website, while keeping the original static HTML/CSS/JS output and styling.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Production build
- `npm run start`: Run production server
- `npm run lint`: Lint project

## Project structure

- `app/`: Minimal Next.js app shell
- `public/`: Existing site pages and static assets
- `public/assets/`: Images and icons
- `public/css/`: Legacy page styles
- `public/js/`: Legacy page scripts

## Routes

Clean routes are mapped to static pages through `next.config.mjs` rewrites:

- `/` -> `public/index.html`
- `/about` -> `public/about.html`
- `/contact` -> `public/contact.html`
- `/blog` -> `public/blog.html`
- `/blog-page` -> `public/blog-page.html`
- `/shop` -> `public/shop.html`
