# HiringSignals.io — Programmatic SEO Keyword Map (1,000 Pages)

This map defines the 50x20 matrix for the initial launch.

## 1. High-Value Niches (The "What")
These niches have high B2B lead value. Companies hiring here are desperate for talent/services.
1.  **Software Development** (Agencies, Startups)
2.  **Digital Marketing** (SEO, Performance, Content)
3.  **Sales & Business Development** (SaaS, Services)
4.  **Real Estate Agencies**
5.  **Human Resources & Recruitment**
6.  **Accounting & Chartered Accountants**
7.  **Solar & Renewable Energy**
8.  **Healthcare Administration** (Clinics, Pharma)
9.  **Logistics & Supply Chain**
10. **Fintech & Banking**
11. **E-commerce Operations**
12. **Manufacturing & Industrial**
13. **Cloud & DevOps Services**
14. **Legal & Law Firms**
15. **Event Management & Hospitality**
16. **AI & Machine Learning Startups**
17. **Cybersecurity Firms**
18. **Interior Design & Architecture**
19. **Data Analytics & BI**
20. **EdTech & Education**

## 2. Priority Cities (The "Where")
### India (Top 25)
Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolkata, Surat, Pune, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Pimpri-Chinchwad, Patna, Vadodara, Ghaziabad, Ludhiana, Agra, Nashik, Faridabad.

### International (Top 25)
New York, London, San Francisco, Austin, Dubai, Singapore, Toronto, Sydney, Berlin, Paris, Chicago, Los Angeles, Seattle, Boston, Amsterdam, Dublin, Tel Aviv, Bangalore (Duplicate), Tokyo, Hong Kong, Melbourne, Vancouver, Austin, Miami, Dallas.

## 3. URL & Metadata Templates
These templates will be used by the Astro programmatic engine to generate 1,000 pages.

**Route:** `/leads/[niche]-in-[city]`

**Meta Title:**
- "[Niche] Companies Hiring in [City] — Active Sales Leads [Current Month] 2026"
- Example: "Marketing Agencies Hiring in Bangalore — Active Sales Leads October 2026"

**Meta Description:**
- "Find active sales leads for [Niche] in [City]. Get direct access to 100+ companies currently spending on new hires. Download the hiring signal database for [City]."

**H1 Heading:**
- "Active Hiring Signals: [Niche] in [City]"

## 4. Schema.org (JSON-LD)
Each page will include a `Dataset` and `WebPage` schema to signal high relevance to Google.
- **Dataset Name:** "[Niche] Hiring Intent Database - [City]"
- **Creator:** HiringSignals.io
- **Description:** Real-time data of companies in [City] currently recruiting for [Niche] roles.

## 5. Internal Linking Strategy
- **City Hubs:** `/leads/[city]` (e.g., `/leads/bangalore`) listing all 20 niches in that city.
- **Niche Hubs:** `/leads/[niche]` (e.g., `/leads/software-development`) listing all 50 cities for that niche.
