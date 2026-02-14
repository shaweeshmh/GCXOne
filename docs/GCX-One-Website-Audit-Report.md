# GCX One Website Audit & Solutions Page Report

**Date:** February 2025  
**Scope:** GCX One (www.gcxone.com), the new Solutions page I built, and next steps

---

## 1. Summary

I audited the GCX One site and built a new **Solutions page** in Next.js/React: four solution areas, pricing comparison, lead form, and testimonials, aligned with the brand (enterprise security, NXGEN Technology AG, 10+ countries). You get a modern stack (Next.js 14, TypeScript, Tailwind, Framer Motion), SEO metadata, responsive layout, and basic accessibility. Below is what I looked at, what’s on the page, and what I recommend.

---

## 2. Brand & Current Site

**Brand:** Advanced enterprise security and surveillance (cameras/sensors, monitored sites, events per 24h, false alarm filtering). “Trusted by companies from 10+ countries.” NXGEN Technology AG, Zurich. Professional B2B tone.

**Current site strengths:** Clear nav (About, Support, Resources, Tower Guard), good entry paths (Breakthroughs, Job Functions, Core Benefits, Solution Kits), support and resources, footer with legal and contact. Free Trial and Market Place are visible.

**Why the new page:** The main site lacked one place that spells out the four pillars with benefits and features. I added that plus pricing (plan cards and comparison table), a validated lead form, and testimonials. The page is fast, responsive, and SEO-ready so you can link from gcxone.com or use a subdomain.

---

## 3. What’s on the Solutions Page

| Part | What it does |
|------|----------------|
| Hero | Headline, subcopy, CTAs, nav with Free Trial |
| Solution cards (4) | Intelligent Surveillance, Monitored Sites, Event Analytics, AI False Alarm Filtering; each with description and feature bullets |
| Pricing | Starter / Professional / Enterprise; feature lists, monthly/annual toggle, comparison table |
| Lead form | First name, last name, email, company (required), message (optional); validation and success state |
| Testimonials | Three quote cards with author, role, initials |
| Footer | Brand, Terms, Privacy, Home |

Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion. Responsive, semantic HTML, metadata for SEO.

---

## 4. SEO

Root layout and Solutions page each have title, description, keywords, and OG tags. When you connect to gcxone.com, set a canonical URL and hreflang if you’re multi-language. Structured data (Organization, WebPage, FAQ if you add one) will improve SERP snippets.

---

## 5. What to Do Next

**Main site:** (1) Add a clear “Solutions” or “Product” nav link to this page or an adapted version. (2) Reuse “10+ countries” and add logos/case snippets where you can. (3) One strong headline above the fold for who it’s for and the main benefit. (4) Clarify pricing (e.g. “Contact for pricing” + comparison). (5) Prominent contact/demo form or link to this page’s form, with leads going to CRM/sales.

**This build:** (1) Wire the form to an API, CRM, or email; add privacy/consent if needed (e.g. GDPR). (2) Add analytics (GA4/GTM) for CTAs, form submits, scroll depth. (3) A/B test headlines and CTA copy. (4) Optional: short FAQ and links to Support; later, a Resources/Use cases section. (5) Keep dependencies light and use Next.js image optimization; lazy-load if you add a lot of content.

**Journey:** Awareness via SEO and content; solution cards and pricing for consideration; lead form (and Free Trial) for conversion; confirmation and follow-up to close the loop.

---

## 6. Deliverables

| Item | Status |
|------|--------|
| GitHub repo (Next.js project) | Done; push `gcxone-solutions` when ready |
| README + setup | In repo root |

---

*Prepared as part of the GCX One feature build and audit. Setup and deployment: see the repo README.*
