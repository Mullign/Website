# John Russell — Portfolio

**A fast, SEO-focused personal site that presents experience, projects, and skills in one place.**

This repo is a single-page portfolio built with the Next.js App Router: one deployable surface for recruiters, collaborators, and clients.

**Live:** [mull1gan.com](https://mull1gan.com)

### Preview

[![Portfolio site — hero, profile, and sections](docs/readme-site-preview.gif)](https://mull1gan.com)

---

## Overview

**Problem:** A résumé PDF and scattered links don’t tell your story well online, and they’re hard to keep in sync with what you’re building.

**Who it’s for:** Hiring managers, technical recruiters, and anyone evaluating my background in web and mobile development.

**Why it’s useful:** It’s a living profile—structured sections (hero, about, education, skills, experience, featured work) with shareable URLs, proper metadata for social previews, and analytics so I can see what resonates.

---

## Features

- **Single-page layout** with anchored navigation and a consistent visual system (glass-style cards, gradient accents).
- **Hero with a typewriter-style tagline rotation** and lightweight decorative UI (icons via Lucide).
- **Project showcase** with outbound links to GitHub and live sites, using `next/image` for optimized assets.
- **SEO baked in:** central `metadata` (title templates, Open Graph, Twitter cards, keywords), dynamic `sitemap.xml`, and `robots.txt` with sensible crawl rules.
- **Google Analytics** loaded with `next/script` (`afterInteractive`) to measure traffic without blocking first paint.
- **Local typography** via `next/font/local` (Geist Sans / Geist Mono) for performance and a distinct look.
- **Responsive design** with Tailwind CSS; interactive pieces isolated in client components where needed.

---

## Tech Stack

| Layer | Technologies |
|--------|----------------|
| **Framework** | Next.js 16 (App Router), React 19 |
| **Styling** | Tailwind CSS, PostCSS |
| **UI** | Lucide React |
| **Fonts** | Geist (local WOFF via `next/font`) |
| **Tooling** | ESLint (`eslint-config-next`) |
| **Analytics** | Google Analytics (gtag) |
| **Hosting-ready** | Static-friendly; no database or custom backend required for the public site |

There is **no separate backend API or database** in this project—content lives in components, and deploy targets (e.g. Vercel, Netlify, static hosting) serve the built output.

---

## Architecture / How It Works

```
src/app/
  layout.js      → Root layout: fonts, global CSS, analytics scripts, background shell
  page.js        → Composes page sections (server component tree)
  metadata.js    → Site-wide SEO exports for `layout.js`
  sitemap.js     → Route handler → /sitemap.xml
  robot.js       → Route handler → /robots.txt
src/components/  → Header, Hero, About, Education, Skills, Experience, AppCard, Footer, Background
```

- **`NEXT_PUBLIC_BASE_URL`** drives canonical URLs, Open Graph image paths, and sitemap/robots host values. If unset, a production default is used in code—set this per environment.
- **Server vs client:** The main page is a server component; sections like `Hero` use `"use client"` only where hooks and animation state are required, keeping the client bundle smaller.
- **Images:** Project and profile assets live under `public/`; `next/image` handles sizing and lazy loading where appropriate.

---

## Setup Instructions

**Prerequisites:** [Node.js](https://nodejs.org/) 18.x or newer (LTS recommended) and npm.

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment (optional but recommended for production builds)**
   Create a `.env.local` in the project root:
   ```env
   NEXT_PUBLIC_BASE_URL=https://your-domain.com
   ```
   Use `http://localhost:3000` during local development if you want OG URLs to match your dev server.

4. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

5. **Production build**
   ```bash
   npm run build
   npm start
   ```

6. **Lint**
   ```bash
   npm run lint
   ```

---

## Screenshots / Demo

The preview image above is a full-page capture of the deployed site (updated occasionally). For section-level crops, you can add `docs/screenshots/hero.png`, `docs/screenshots/projects.png`, etc.

---

## Key Learnings / Challenges

- **SEO as code:** Moving titles, descriptions, and social metadata into a single export (`metadata.js`) made iteration safer than duplicating tags across pages.
- **App Router conventions:** Using route files for `sitemap` and `robots` keeps crawler-facing endpoints versioned with the app instead of hand-maintained static files.
- **Client boundaries:** The hero typewriter and similar UI need client state; pushing that to leaf components avoided turning the whole page into a client bundle.
- **Base URL discipline:** Canonical and OG URLs break silently if `NEXT_PUBLIC_BASE_URL` doesn’t match deployment—documenting and validating that in CI or a pre-deploy check would be a small win.

---

## Future Improvements

- **Content layer:** Pull experience and projects from MDX or a headless CMS so updates don’t require code changes.
- **Testing:** Add Playwright or Cypress smoke tests for navigation and critical links before deploy.
- **Performance pass:** Formal Core Web Vitals budget and image audit (especially above-the-fold hero assets).
- **Blog or changelog:** Short write-ups linked from the same domain to show depth beyond the one-pager.

---

## Author

**John Russell** — Software developer focused on **React Native** and **iOS**, with experience shipping web UIs (React, Tailwind) in professional settings. Background in **construction project management** and **systems work** (volunteer SAR tech, small-business IT), now pursuing a **Master’s in Computer Science at Clemson University**. I care about clear UX, maintainable front-end structure, and measurable outcomes.
