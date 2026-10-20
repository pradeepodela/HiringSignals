# HiringSignals.io Micro SaaS Brief

## Goal
Build a professional-grade Micro SaaS that sells "Hiring Signals" (companies currently hiring for specific roles) as high-intent sales leads. The data is powered by Apify's LinkedIn Jobs Scraper.

## Tech Stack
- **Framework:** Astro (SSR mode)
- **Styling:** Tailwind CSS + Lucide Icons
- **Database:** SQLite with Drizzle ORM
- **Payments:** Cashfree SDK (Handling both INR and International USD payments).
- **Scraping:** Apify API (LinkedIn Jobs Scraper)
- **Auth:** Clerk or simple Session-based
- **Design:** Dark-themed, high-end "GTM Tool" aesthetic (similar to Apollo.io or Clay.com). Use Bento grids and clean sans-serif typography.

## Global Pricing & Targeting
- **Currency:** Dual support (USD/INR). Both route to Cashfree checkout.
- **Tiers:**
  - **Starter Pack:** $9.00 / ₹750 (50 leads)
  - **Pro Monthly:** $49.00/mo / ₹3,999 (1,000 leads)
  - **Enterprise:** $199.00/mo / ₹15,000 (API + Alerts)

## Core Features
1. **High-Converting Landing Page:**
   - Hero: "Turn Hiring Signals into Sales Revenue."
   - Value Prop: "Target companies that are actively spending money on new hires."
2. **Programmatic SEO (pSEO):**
   - Dynamic routes like `/leads/[niche]-in-[city]`.
   - 1,000+ auto-generated pages (50 cities x 20 niches).
3. **Data Dashboard:** Search, preview (blurred), and unlock leads via checkout.
4. **Integration Layer:** `apify.ts`, `cashfree.ts`, and `drizzle` schema.

## Final Deliverable
A complete, production-ready site. User adds keys to `.env` and deploys.
