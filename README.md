# Culture Hill

Culture Hill now runs on real Next.js App Router routes while preserving the existing legacy HTML/CSS/JS content and design.

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

## Structure

- `app/`: Next.js route files (`/`, `/about`, `/contact`, `/blog`, `/blog-page`, `/shop`)
- `app/blog/[id]/page.js`: Clean blog permalink route (redirects to `/blog-page?id=:id`)
- `components/LegacyPage.jsx`: Shared renderer for legacy page markup + assets
- `lib/legacy-pages.js`: Legacy page loader/parser and route metadata config
- `public/`: Legacy HTML source pages + static assets
- `public/assets/`: Images and icons
- `public/css/`: Legacy page styles
- `public/js/`: Legacy page scripts

## Routing

The app now uses native App Router pages instead of rewrite-only routing:

- `/`
- `/about`
- `/contact`
- `/blog`
- `/blog/:id`
- `/blog-page?id=:id`
- `/shop`

## Optimization updates

- Added static asset cache headers in `next.config.mjs`
- Fixed legacy script runtime errors and broken page connections
- Added lazy image loading/async decoding during legacy markup rendering
