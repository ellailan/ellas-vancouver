# Places I Can't Wait to Take You 📍

A hand-curated, scrapbook-style interactive map of Vancouver — built as a personal gift. Every pin is a real place with a real memory attached, filterable by category, searchable by name, and ready to explore with a "Random Date Idea" button.

Built entirely as a static site: **React + TypeScript + Vite + Tailwind CSS + Leaflet**. No backend, no database, no API keys — it runs completely in the browser and deploys straight to GitHub Pages.

## Project structure

```
src/
  components/
    CategoryFilter.tsx   filter chips by category
    LoadingScreen.tsx    playful loading screen on first load
    LocationPopup.tsx    postcard-style popup shown on pin click
    MapView.tsx          the Leaflet map, markers, fly-to / fit-all logic
    RandomDateButton.tsx "Random Date Idea" button
    SearchBar.tsx        search-by-name input
    Sidebar.tsx           collapsible list of every location, grouped by category
  data/
    categories.ts        category metadata (labels, emoji, colors)
    locations.ts         every location, with notes + pre-geocoded coordinates
  mapIcons.ts             builds the custom teardrop pin icons per category
  types.ts                shared TypeScript types
  App.tsx                 top-level layout & state
  main.tsx                entry point
```

## Editing the places

Everything about the map's content lives in `src/data/locations.ts`. Each entry looks like:

```ts
{
  id: 'maenam',
  name: 'Maenam',
  category: 'Dinner',
  address: '1938 W 4th Ave, Vancouver, BC',
  latitude: 49.2679,
  longitude: -123.1443,
  description: "Thai place Kat and I have been meaning to try out",
}
```

- `category` must be one of the five categories defined in `src/types.ts` / `src/data/categories.ts`.
- Coordinates were geocoded once during development from the street addresses and are stored directly in the file — the finished app never calls a geocoding API, so it needs no API key and works fully offline once built.
- To add a new place, just add another object to the array — it will automatically appear in the sidebar, filters, search, and map.
- To add a new category, add it to `categories.ts` (pick a color + emoji) and to the `Category` union type in `types.ts`.

## Getting started locally

You'll need [Node.js](https://nodejs.org/) 18+ installed.

```bash
npm install       # install dependencies
npm run dev       # start a local dev server (usually http://localhost:5173)
```

## Building for production

```bash
npm run build     # type-checks and builds to /dist
npm run preview   # preview the production build locally
```

## Deploying to GitHub Pages

There are two ways to deploy — pick whichever you prefer.

### Option 1 — GitHub Actions (recommended, fully automatic)

1. Push this project to a GitHub repository.
2. In your repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Open `vite.config.ts` and set `base` to match your repository name:
   ```ts
   base: '/your-repo-name/'
   ```
   (If you're deploying to a `username.github.io` root repo instead, set `base: '/'`.)
4. Commit and push to `main`. The included workflow at `.github/workflows/deploy.yml` will automatically build and publish the site to GitHub Pages on every push.
5. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Option 2 — Manual deploy with `gh-pages`

```bash
npm run deploy
```

This builds the project and pushes the `dist` folder to a `gh-pages` branch using the `gh-pages` package (already included as a dev dependency). Then in **Settings → Pages**, set the source branch to `gh-pages`.

> Don't forget to update the `base` path in `vite.config.ts` to match your repository name either way — otherwise assets (JS/CSS/fonts) won't load correctly once deployed.

## Customizing the look

- Colors, fonts, and a few custom animations live in `tailwind.config.js`.
- Map tiles use CARTO's free "Voyager" basemap (no API key required) for that warm, paper-like tone — see `MapView.tsx` if you'd like to swap tile providers.
- The title, tagline, and loading-screen copy are in `App.tsx` and `LoadingScreen.tsx` — make it yours!

Made with love (and a slightly unreasonable number of Main Street coffee shops). ☕
