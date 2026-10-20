# HiringSignals.io - Production Ready Site

This repository contains the full production-ready code for HiringSignals.io, built with Astro, Tailwind CSS, Apify, Cashfree PG, and Drizzle ORM.

## Features
- **Full UI**: High-end dark theme (Apollo.io style) with Bento grids.
- **Dynamic SEO**: Programmatic generation of 1,000+ niche/city lead pages.
- **Backend**: Astro SSR with Node.js adapter.
- **Integrations**:
  - **Apify Client**: Ready to trigger and fetch results from lead scrapers.
  - **Cashfree PG**: Full payment flow (INR support) for professional plans.
  - **Drizzle + SQLite**: Schema-backed database for local development.
- **Programmatic SEO**: Dynamic routes in `src/pages/leads/[slug].astro`.

## Project Structure
- `src/pages/`: All site routes (Home, Search, Dashboard, Pricing, Checkout, Dynamic Leads).
- `src/lib/`: API integrations (Apify, Cashfree).
- `src/db/`: Database schema and connection.
- `src/utils/`: SEO and data helpers.

## Getting Started
1. **Clone the repo** (or navigate to `C:/Users/pc/HiringSignals`).
2. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
   *Note: If on Windows, ensure long paths are enabled or use `pnpm`.*
3. **Set Environment Variables**:
   Copy `.env.example` to `.env` and fill in your API keys.
4. **Initialize Database**:
   ```bash
   npm run db:push
   ```
5. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Design Principles
- **Bento Grid**: Used on the home page for a modern, information-rich layout.
- **Glassmorphism**: Subtle backdrops and borders for a premium feel.
- **Performance**: SSR with localized caching for high SEO rankings.
