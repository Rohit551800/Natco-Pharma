# NATCO Crop Health Sciences — Landing Page

Live site: [natcopharma.netlify.app](https://natcopharma.netlify.app)

Built by **Weblabs**, Hyderabad.

---

## Folder Structure

```
natco-pharma/
├── index.html              # Main landing page
├── README.md               # This file
├── CSS/
│   └── style.css           # All styles, CSS variables, responsive
├── JS/
│   └── script.js           # Tabs, filters, scroll-reveal animations
└── Assets/
    └── images/
        ├── natco-logo.png              # NATCO CHS logo (navbar + footer)
        ├── hero-aerial-farm.jpg        # Hero grid — aerial farmland
        ├── hero-lab-researcher.jpg     # Hero grid — lab researcher
        ├── hero-field-sample.jpg       # Hero grid — field at sunrise
        ├── hero-greenhouse.jpg         # Hero grid — greenhouse worker
        ├── about-scientist-field.jpg   # About section — scientist in field
        ├── product-bosnat.jpg          # Product card — Bosnat
        ├── product-glanz-1.jpg         # Product card — Glanz
        ├── product-natcore.jpg         # Product card — Natcore
        ├── product-glanz-2.jpg         # Product card — Natpearl
        ├── hazard-seedling-pipette.jpg # R&D split section — seedlings
        ├── note-engineering-sketch.jpg # Field Notes card 1
        ├── note-fetsia-stage.jpg       # Field Notes card 2
        ├── note-conclave-audience-1.jpg# Field Notes card 3
        └── note-conclave-audience-2.jpg# Field Notes card 4
```

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navbar** | Sticky top bar with logo + 5 nav links |
| 2 | **Hero** | Dark green, large headline, 4-image grid |
| 3 | **Stats Bar** | 3,000+ Distributors · 18+ States · 30+ Partners · 3+ Facilities |
| 4 | **About the Division** | Image left, text right, blockquote |
| 5 | **Product Catalog** | Formulations/Technicals tabs + category filters, 4 product cards |
| 6 | **Lower Hazard / Higher Yield** | 50/50 split — dark green text left, image right |
| 7 | **Field Notes** | 4-column article/blog cards |
| 8 | **Footer** | Logo, nav links, products, socials, copyright bar |

---

## Tech Stack

- Pure **HTML5 / CSS3 / Vanilla JS** — no frameworks, no build step
- Fonts: **Barlow Condensed** (headings) + **Inter** (body) via Google Fonts
- Scroll animations via **IntersectionObserver** (`.reveal` → `.visible`)
- Product tab/filter toggle ready to wire up to real data

---

## Deploying to Netlify

### Option 1 — Drag & Drop (quickest)
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the entire `natco-pharma/` folder into the deploy zone
3. Done — live at `natcopharma.netlify.app`

### Option 2 — Git (recommended for ongoing updates)
1. Push this folder to a GitHub repo
2. In Netlify → **Add new site → Import from Git**
3. Set **Publish directory** to `/` (or `natco-pharma/` if nested)
4. Deploy — Netlify auto-deploys on every `git push`

### Custom Domain
In Netlify → **Site configuration → Domain management → Add custom domain**
Enter your domain and follow the DNS instructions.

---

## Image Notes

> Logo and product packaging (Bosnat, Glanz, Natcore, Natpearl) must be sourced directly from NATCO CHS — these are trademarked brand assets.

All other images (hero, about, R&D, field notes) can use royalty-free stock photos from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com). Drop images into `Assets/images/` using the exact filenames listed above.

---

## CSS Variables (quick reference)

```css
--green-dark:   #0e2417   /* footer background */
--green-deep:   #1c3322   /* hero background */
--green-mid:    #3f6b34   /* stats bar, tab active */
--green-accent: #2e7d4f   /* "Stay ahead" text, links */
--gold:         #e0a82e   /* numbers, eyebrow, CTA button */
--rust:         #c1502e   /* eyebrow accent, article tags */
--cream:        #f8f5ec   /* navbar, product image bg */
```

---

*© 2026 NATCO CHS Limited. All rights reserved.*
