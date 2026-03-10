# Lane & Company — Website Spec v2

## Vision
The website IS the portfolio. Every interaction proves capability. A visitor should think: "If their site looks like this, imagine what they'd build for me."

## Brand
- **Company:** Lane & Company
- **Positioning:** Principal-led technology firm — direct access to senior leadership, enterprise-quality delivery, no outsourcing
- **Tone:** Confident, direct, warm. Professional adults who deliver exceptional work.

## Design Direction: Industrial Luxe
Not another Stripe clone. Think Porsche Design System meets high-end architecture firm.

### Color Palette
- **Base:** True black (#000000) + deep charcoal (#111111)
- **Primary accent:** Molten copper/bronze (#D4745B)
- **Secondary:** Warm gold (#C9A86C) for subtle highlights
- **Text:** White (#FFFFFF) primary, warm gray (#A3A3A3) secondary
- **Cards/surfaces:** Subtle glass — rgba(255,255,255,0.05) with thin borders

### Typography
- **Headings:** Playfair Display (serif) — bold, distinctive, premium
- **Body:** Inter — clean, readable, modern
- **Mono accents:** JetBrains Mono — for code/technical references
- **Style:** Uppercase tracking on section labels, tight letter-spacing on headlines

### Logo
- Nav: White horizontal logo (LAC_2-5_White.png)
- Favicon: LAC_favicon.png
- Footer: White icon (LAC_White_Icon.png)

## Service Categories

### Signature Services (badged)
1. **Custom Software Development** — Enterprise apps, internal tools, system integrations
2. **AI Consulting & Integration** — AI strategy, LLM integration, intelligent automation
3. **IT Strategy & Fractional CTO** — Technology leadership on demand

### Full Service Offering
4. **Web Applications** — Full-stack web apps, SaaS products, portals
5. **Mobile Applications** — iOS, Android, cross-platform
6. **Portable WiFi & Event Tech** — WiFi trailer, pole-mounted equipment, full event connectivity
7. **Cloud & Infrastructure** — Azure/AWS migrations, DevOps, hosting
8. **Data & Analytics** — Dashboards, BI, data pipelines, reporting

## Tech Stack
- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS + CSS Modules for complex effects
- **Animations:** Framer Motion (scroll reveals, page transitions, micro-interactions)
- **3D (Phase 1B):** Three.js / React Three Fiber for hero shader
- **Smooth scroll:** Lenis
- **Fonts:** Google Fonts (Playfair Display, Inter, JetBrains Mono)
- **Deployment:** Static export → GitHub Pages (Phase 1), Azure App Service (Phase 3)
- **Contact form:** Formspree (free tier, no backend needed)
- **Booking:** Calendly embed
- **Analytics:** Plausible (privacy-friendly)

## Pages & Architecture

```
/                     Home
/services             Services overview
/services/[slug]      Individual services (8 pages)
/work                 Portfolio / case studies
/insights             Blog / thought leadership
/about                Company story + team
/contact              Contact form + Calendly booking
/portal               Client portal (login placeholder)
/privacy              Privacy policy
/terms                Terms of service
```

## Home Page Sections

### 1. Hero
- Full viewport, CSS gradient/animated background (WebGL in Phase 1B)
- Headline: "Software Worth Putting Your Name On"
- Subtitle: "Lane & Company — Custom Software, AI Integration, and Technology Leadership"
- CTAs: "Explore Services" + "Book a Call"
- Subtle scroll indicator
- Nav: Sticky, transparent → solid on scroll. Logo left, links right, "Book a Call" CTA button. Small "Available" green dot indicator.

### 2. Signature Services
- 3 featured cards with copper accent borders
- "Signature" badge on each
- Rich descriptions, animated on scroll reveal

### 3. All Services Grid
- Remaining 5 services in clean grid below
- Lighter treatment than signature services

### 4. Why Lane & Company
- 4 differentiators in a visual layout:
  - "Principal-Led Delivery" — You work directly with the founder
  - "No Outsourcing" — Every line of code is ours
  - "Enterprise Quality" — Fortune 500 standards, startup speed
  - "AI-Native Thinking" — AI isn't an add-on, it's how we work

### 5. How We Work
- 4-step visual process: Discovery → Design → Build → Support
- Horizontal timeline or staggered cards
- Brief descriptions, icons

### 6. Client Portal Teaser
- Polished mockup/preview of dashboard UI
- "Your project. Full visibility."
- "Track progress. Review deliverables. Communicate with your team."
- CTA: "Sign In" → /portal

### 7. Footer
- Logo (white icon), quick links, contact info
- "Built by Lane & Company" — meta proof of capability
- Copyright, Privacy, Terms links

## Individual Service Pages (/services/[slug])
- Hero with service name + one-liner
- What we do (3-4 detailed points)
- Use cases / who this is for
- Related services (cross-links)
- CTA: "Let's talk about [Service Name]" → /contact

## About Page (/about)
- Anthony's story — background, why LaneCo exists
- Team section (even if just Anthony + "Our Network" for partners/specialists)
- Values / approach
- Photo (when available)

## Contact Page (/contact)
- Form: Name, email, service interest (dropdown), budget range, timeline, message
- Calendly embed for direct booking
- Phone number displayed
- "Prefer to talk? Call us directly."
- Formspree handles submissions

## Portal (/portal)
- Beautiful login UI — email/password fields
- On submit: "Client Portal launching soon. We'll notify you when it's ready."
- Design it fully so it looks real and shows capability

## Work (/work)
- Phase 1: "Selected work coming soon" with 3-4 internal project cards (anonymized)
- Phase 2: Full case studies with problem/solution/result

## Insights (/insights)  
- Phase 1: Blog shell with 2-3 placeholder titles
- Phase 2: Real content

## Performance & Accessibility
- Lighthouse 90+ all categories
- FCP < 1.5s
- WCAG 2.1 AA compliance
- prefers-reduced-motion respected
- Mobile-first responsive
- WebGL → CSS gradient fallback on mobile/older devices
- No custom cursor (accessibility risk, skip it)

## SEO
- Open Graph + Twitter Card meta on every page
- JSON-LD schema markup (Organization, WebSite, Service)
- Semantic HTML throughout
- Sitemap.xml auto-generated

## Build Phases

### Phase 1A: MVP (Build Now)
- Home page with all sections (CSS hero, no WebGL)
- 8 service pages
- About page
- Contact page with Formspree + Calendly
- Portal login placeholder
- Privacy + Terms
- Scroll reveal animations (Framer Motion)
- Mobile responsive
- Deploy to GitHub Pages

### Phase 1B: Polish
- WebGL hero effect with fallback
- Page transitions
- Work page with internal projects
- Insights shell
- SEO optimization
- Analytics integration

### Phase 2: Content
- Real case studies
- Blog posts
- Team photos
- Testimonials / client logos

### Phase 3: Portal
- Real authentication (NextAuth.js or Azure AD B2C)
- Client dashboards
- Document sharing
- Project status tracking

## File Structure
```
laneco-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── portal/page.tsx
│   ├── work/page.tsx
│   ├── insights/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── services/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── SignatureServices.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── WhyUs.tsx
│   │   ├── HowWeWork.tsx
│   │   └── PortalTeaser.tsx
│   └── ui/
│       ├── ServiceCard.tsx
│       ├── Button.tsx
│       └── SectionHeader.tsx
├── lib/
│   ├── services.ts           # Service data/content
│   ├── animations.ts         # Framer Motion configs
│   └── metadata.ts           # SEO helpers
├── public/
│   ├── fonts/
│   └── images/
│       ├── logo-white.png
│       ├── logo-icon-white.png
│       └── favicon.png
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```
