# BUILD INSTRUCTIONS — Lane & Company Website v2

## Design Philosophy: Visual Storytelling
This is NOT a traditional services website with grids of cards and bullet points. This is a **scroll-driven narrative** that takes the visitor on a cinematic journey. The visitor IS the protagonist — they arrive with business pain, and we guide them through a visual story of transformation.

Inspired by: Porsche Design, Apple product pages, high-end agency sites that use motion and space to create desire.

Reference video principles (2026 web design trends):
- **Motion Narrative**: Scroll-triggered animations that guide users through a story
- **Organic Layout**: Anti-grid, asymmetric, magazine-style compositions — NOT rows of identical cards
- **Glassmorphism 2.0**: Subtle frosted glass layers, soft shadows, depth without coldness
- **Micro-interactions with purpose**: Small animations that provide feedback and guide, not decorate
- **Performance First**: Fast despite being beautiful

## The Story Arc (Homepage Scroll Journey)

The homepage is ONE continuous scroll story with these beats:

### Beat 1: The Hook (Hero)
- Full viewport, cinematic
- Subtle animated gradient background (CSS only, no WebGL)
- Short punchy headline that speaks to the visitor's PAIN, not our credentials
- Example: "Your team is drowning in manual work. Your software should be doing it for them."
- One CTA: "See How" (scrolls to next beat)
- Subtle scroll indicator animation at bottom

### Beat 2: The Problem (Empathy)
- Show the visitor's world WITHOUT good technology
- Use 3 visual "scenes" that scroll in organically (staggered, not grid):
  - Scene: "Reports that take all week" — visual of spreadsheet chaos fading into clarity
  - Scene: "Customers waiting on hold" — visual metaphor of friction
  - Scene: "Decisions made on gut feeling" — visual of uncertainty vs data
- These are NOT service cards. They're empathy moments. Short text, big visual impact.
- Glassmorphism panels floating over dark background
- Text fades/slides in as user scrolls

### Beat 3: The Transformation (What Changes)
- Horizontal scroll section or parallax shift — visual break from vertical scroll
- "What if your systems actually worked FOR you?"
- 3 transformation outcomes (organic layout, NOT a grid):
  - "Reports generate themselves" 
  - "Customers get answers instantly"
  - "Every decision backed by live data"
- Each has a subtle animation showing the "before → after" concept
- This is where desire builds

### Beat 4: How We Do It (Proof)
- Now (and ONLY now) do we mention services — but framed as solutions to the problems above
- 3 Signature capabilities shown as large, immersive panels (one at a time, scroll-reveal):
  1. **Custom Software** — "We build the system your business actually needs"
  2. **AI Integration** — "Intelligence built into your workflow, not bolted on"  
  3. **Strategic Leadership** — "A technology partner who thinks like an owner"
- Each panel: large text, a real-world scenario sentence, subtle glass panel effect
- Secondary services mentioned in a minimal row below: Web Apps, Mobile, WiFi & Events, Cloud, Data

### Beat 5: The Proof Point (Social Proof / Work)
- "We don't just talk. We build."
- 2-3 anonymized project outcomes in an organic asymmetric layout:
  - "Reduced manual processing by 67%"
  - "24/7 automated customer support"  
  - "Real-time operations dashboard for 200+ team members"
- Stats/numbers animate in (count up) as they scroll into view
- No company names needed — the outcomes speak

### Beat 6: The Invitation (CTA)
- Full viewport, breathing room
- "Ready to stop fighting your systems?"
- Two options: "Book a Strategy Call" (primary copper button) + "See All Services" (ghost button)
- Subtle background gradient shift from the hero gradient — bookend feeling
- Contact info visible: phone, email

### Beat 7: Footer
- Minimal. Logo icon, quick links, contact info, legal links, copyright.
- Clean, not cluttered.

## Other Pages

### /services
- Landing with the 3 signature services as immersive sections (similar to Beat 4)
- Below: remaining 5 services in a clean organic layout
- Each service links to its detail page

### /services/[slug] (8 pages)
- Service detail pages with:
  - Hero: service name + one-line hook
  - "The Problem" — what pain this solves (1-2 sentences)
  - "What We Build" — concrete deliverables (3-5 items, organic layout)
  - "Real-World Scenario" — one detailed example in a glass panel
  - "Who This Is For" — 3-4 use cases
  - CTA section: "Let's talk about [service]"
  - Related services (2-3 links)

### /about
- Not a boring bio page
- "Why Lane & Company Exists" — brief, compelling
- Anthony's background (2-3 sentences, not a resume)
- Values as large typographic statements, not bullet points
- Team note: "Our Network" — trusted specialists engaged under LC leadership

### /contact
- Clean, spacious form (Formspree)
- Fields: Name, Email, Service Interest (dropdown), Budget Range (dropdown), Timeline (dropdown), Message
- Sidebar: Phone number (large, clickable), Calendly placeholder, "Mon-Fri 8am-6pm CT"

### /portal
- Login UI with glass panel aesthetic
- On submit: "Client Portal launching soon" message
- Preview mockup of what the portal will look like

### /privacy, /terms
- Standard legal pages, clean typography

### /work, /insights
- Placeholder pages with "coming soon" messaging

## Technical Requirements

### Stack
- Next.js 14+ App Router, TypeScript
- Tailwind CSS 3.4+
- Framer Motion (scroll-triggered animations, NOT page load only)
- Google Fonts via next/font: Playfair Display (headings), Inter (body)
- Static export for GitHub Pages
- `basePath: '/laneco-website'` in production

### Colors (Tailwind custom)
```
black: '#000000'
charcoal: '#111111'  
darkGray: '#1a1a1a'
copper: '#D4745B' (primary CTA, highlights)
gold: '#C9A86C' (accent, badges, kickers)
warmGray: '#A3A3A3' (body text)
white: '#FFFFFF'
```

### Typography
- Headings: Playfair Display (serif), tracking tight
- Body: Inter (sans), leading relaxed
- Kickers/labels: Inter uppercase, letter-spacing 0.14em, text-gold
- Use size contrast dramatically — hero text should be HUGE (clamp responsive)

### Glass Panel Style
```css
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

### Scroll Animations (Framer Motion)
- Use `whileInView` with `viewport={{ once: true, amount: 0.3 }}`
- Stagger children: 0.08-0.12s delays
- Default motion: fade up (y: 40 → 0, opacity: 0 → 1)
- Duration: 0.7s with easeOut
- Respect `prefers-reduced-motion`
- Hero elements: cascade in with increasing delays
- Number counters: animate from 0 to target value

### Layout Rules
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Sections: generous vertical padding (`py-24 lg:py-32`)
- NO identical card grids — vary layouts between sections
- Use asymmetric columns: `grid-cols-[1.2fr_0.8fr]`, `grid-cols-[0.9fr_1.1fr]`
- White space is a feature, not waste

### Images / Assets
- `public/logo-white.png` — navigation (use `<img>` tag, NOT next/image)
- `public/logo-icon.png` — footer
- `public/favicon.png` — favicon
- All image `src` must use `${process.env.NEXT_PUBLIC_BASE_PATH || ''}` prefix
- No stock photos — use CSS gradients, glassmorphism, and typography for visual impact

### Navigation
- Fixed, transparent on hero, blur background on scroll
- Logo left, links center-right, "Let's Talk" copper pill button
- Mobile: hamburger → full-screen overlay
- Links: Services, About, Work, Contact, Portal
- Green dot "Available" indicator

### Services Data (lib/services.ts)
Keep the 8 services from v1 with slugs, but update copy to be scenario-driven:
1. custom-software-development (Signature)
2. ai-consulting-integration (Signature)
3. it-strategy-fractional-cto (Signature)
4. web-applications
5. mobile-applications
6. portable-wifi-event-tech
7. cloud-infrastructure
8. data-analytics

### File Structure
```
app/
  layout.tsx
  page.tsx (homepage — the scroll story)
  globals.css
  sitemap.ts
  robots.ts
  services/
    page.tsx
    [slug]/page.tsx
  about/page.tsx
  contact/page.tsx
  portal/page.tsx
  work/page.tsx
  insights/page.tsx
  privacy/page.tsx
  terms/page.tsx
components/
  layout/
    Navigation.tsx
    Footer.tsx
  story/           ← homepage story sections
    Hero.tsx
    ProblemScenes.tsx
    Transformation.tsx
    Solutions.tsx
    ProofPoints.tsx
    CallToAction.tsx
  ui/
    Button.tsx
    GlassPanel.tsx
    ScrollReveal.tsx
    CountUp.tsx
  portal/
    PortalLogin.tsx
lib/
  services.ts
  navigation.ts
  metadata.ts
```

### SEO
- Unique `<title>` and `<meta description>` per page
- JSON-LD for Organization (homepage) and Service (service pages)
- Sitemap + robots.txt
- OpenGraph metadata

### Performance
- No external JS besides React/Next
- CSS animations where possible (save Framer Motion for scroll triggers)
- Lazy load below-fold content
- Target < 100KB first load JS

## What NOT To Do
- ❌ No grids of identical cards (the v1 problem)
- ❌ No walls of text
- ❌ No "We are a technology company that..." boring intros
- ❌ No stock photos or placeholder images
- ❌ No tagline "Software Worth Putting Your Name On"
- ❌ Don't talk about the company — talk about the customer's transformation
- ❌ Don't list features — show outcomes
- ❌ Don't make every section look the same
- ❌ No next/image component (broken with basePath static export) — use <img> tags

## CRITICAL: After building
1. Run `npm run build` to verify
2. Fix ALL TypeScript/JSX errors
3. `git add -A && git commit -m "v2: story-driven redesign" && git push origin main`
4. Verify the build succeeds before committing
