# GCX One Solutions Page

Solutions landing page for [GCX One](https://www.gcxone.com) their enterprise security & surveillance platform. Next.js 14, React, Tailwind, plus Framer Motion for the animations. Dark theme and layout are aligned with the GCX One brand.

## What’s in it

Four solution cards (Intelligent Surveillance, Monitored Sites, Event Analytics, AI False Alarm Filtering), an interactive pricing section with monthly/annual toggle and a comparison table, and a lead capture form with basic validation. There’s a testimonials block, and the whole thing is responsive and set up with metadata/OG tags for SEO. We use semantic HTML and ARIA where it helps; focus states are in place for keyboard nav.

## Tech stack

Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion. Nothing fancy—just what we needed.

## Getting started

You’ll need Node 18.17+ and npm (or yarn/pnpm).

```bash
cd gcxone-solutions
npm install
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000). Solutions page: [http://localhost:3000/solutions](http://localhost:3000/solutions).

Production build: `npm run build` then `npm start`. Lint: `npm run lint`.

## Project structure

Rough layout:

```
gcxone-solutions/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, global metadata
│   │   ├── page.tsx         # Home (link to solutions)
│   │   ├── globals.css      # Global styles, Tailwind
│   │   └── solutions/
│   │       └── page.tsx     # Solutions page + metadata
│   └── components/
│       └── solutions/
│           ├── SolutionsHero.tsx
│           ├── SolutionCards.tsx
│           ├── PricingTable.tsx
│           ├── LeadCaptureForm.tsx
│           ├── Testimonials.tsx
│           └── SolutionsFooter.tsx
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Brand stuff

Dark backgrounds (`#0a0e17`, `#0f172a`), blue/cyan accents (`#0ea5e9`, `#38bdf8`). Copy talks about “Trusted by companies from 10+ countries”, monitored sites, events per 24h, false alarm filtering. Footer links go to GCX One Terms, Privacy, and the main site / Free Trial.

## License

Demo/audit use. GCX One and NXGEN Technology AG hold their respective trademarks.
