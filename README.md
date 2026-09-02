# RanaCafe

A standalone-components Angular app for RanaCafe, a coffee shop and bakery in Lorton, VA.

## Run it

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Notes on the data

- Cafe details (address, hours, phone, menu highlights, reviews) were sourced from public
  listings (Google, Yelp, Facebook, Restaurantji) as of 2026 and live in
  `src/app/core/services/cafe-data.service.ts` — edit that file to update anything.
- Review quotes are paraphrased in this project's own words, not copied verbatim from any listing.
- Hero/section imagery is intentionally built with CSS/inline SVG (not scraped photos, which are
  copyrighted by their listing sites) — swap in real photography by replacing the `.hero__art`,
  `.story-teaser__art` SVGs in `home.component.html` with `<img>` tags once you have licensed images.
- Fonts (Fraunces + Work Sans) load from Google Fonts at runtime via a `<link>` in `index.html`.
