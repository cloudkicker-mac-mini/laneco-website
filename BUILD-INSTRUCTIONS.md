# BUILD INSTRUCTIONS — READ THIS FIRST

## #1 Rule: This Site Sells. Period.
This is NOT a portfolio for impressing other developers. This site exists to make potential clients ACT — call us, book a meeting, hire us. Every design decision must serve that goal.

## Key Principles
1. **Simple over clever.** If a visitor has to think about what we do, we've failed.
2. **Show, don't describe.** Real-world examples, not abstract service descriptions. "We built a casino's jackpot display system" not "Enterprise software solutions."
3. **Drive action ASAP.** Every section should have a clear next step. Call, book, contact.
4. **Don't overwhelm.** Balance info and white space. Less text, more impact.
5. **The customer can't imagine how we fit their needs — we have to show them.** Use concrete scenarios they relate to.

## Design: Industrial Luxe
- True black (#000000) + charcoal (#111111) base
- Molten copper/bronze (#D4745B) accent for CTAs
- Warm gold (#C9A86C) for subtle highlights  
- White text on dark, warm gray (#A3A3A3) secondary
- Headings: Playfair Display (serif, bold, premium)
- Body: Inter (clean, readable)
- Glass-morphism cards: rgba(255,255,255,0.05) with thin borders
- NO custom cursor, NO heavy animations that slow things down
- Subtle scroll reveals with Framer Motion (fade + slide, staggered)

## Hero
- DO NOT use "Software Worth Putting Your Name On" — that was rejected
- The headline should sell what we DO for clients, not describe us
- Strong, simple headline that makes someone think "I need these guys"
- Subtext: brief, one line
- Two CTAs: "See What We Build" (scroll to services) + "Let's Talk" (→ /contact)
- Animated gradient background (CSS only, no WebGL for now)

## Services — SHOW DON'T TELL
Each service needs a REAL example scenario, not abstract descriptions.

### Signature (featured, copper border):
1. **Custom Software Development**
   - Example: "Your team wastes 3 hours a day on manual data entry. We build the tool that does it in seconds."
2. **AI Consulting & Integration**  
   - Example: "Your customer service team answers the same 50 questions daily. We build an AI that handles it 24/7."
3. **IT Strategy & Fractional CTO**
   - Example: "You need technology leadership but not a $250K salary. We step in as your CTO, part-time."

### Additional:
4. **Web Applications** — "From internal dashboards to customer-facing portals"
5. **Mobile Applications** — "Your business in your customer's pocket"
6. **Portable WiFi & Event Tech** — "Festival? Conference? Wedding? We bring the connectivity."
7. **Cloud & Infrastructure** — "Stop overpaying for servers that aren't set up right"
8. **Data & Analytics** — "Turn your data into decisions, not spreadsheets"

## Pages to Build (Phase 1A)
1. **/** — Home (hero, services, why us, how we work, CTA)
2. **/services** — All services overview
3. **/services/[slug]** — Individual service pages (8 total)
4. **/about** — Company story, Anthony's background
5. **/contact** — Form (Formspree) + phone + Calendly placeholder
6. **/portal** — Login UI (non-functional, shows "Coming Soon" on submit)
7. **/privacy** — Standard privacy policy
8. **/terms** — Standard terms of service

## Tech Stack
- Next.js 14+ with App Router, TypeScript
- Tailwind CSS
- Framer Motion for animations
- Google Fonts (Playfair Display + Inter)
- Static export for GitHub Pages deployment
- Formspree for contact form

## Logo Assets (already in /public/)
- `/public/logo-white.png` — main nav logo (white, for dark background)
- `/public/logo-icon.png` — standalone icon mark
- `/public/favicon.png` — favicon

## Nav Structure
- Logo (left)
- Links: Services | About | Contact
- CTA button: "Let's Talk" (copper/bronze accent)
- Sticky, transparent on hero → solid on scroll
- Mobile: hamburger → full-screen overlay

## After Building
1. `git add -A && git commit -m "build: Lane & Company website Phase 1A"`
2. `git push origin main`
