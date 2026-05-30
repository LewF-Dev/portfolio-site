# Mordax Labs — Project Criteria & Build Plan

---

## 1. Project Overview

A professional business site for Mordax Labs that functions as both a service offering and a credibility tool. The site sells custom web development services to small and medium businesses. The work section exists as proof of capability, not as the primary focus.

The site itself is the first and most important demonstration of what Mordax Labs delivers.

---

## 2. Brand

**Name:** Mordax Labs  
**Owner:** Lewis Freeman  
**Positioning:** Independent web development studio offering custom-built sites with a premium build process, transparent pricing, and a companion app for ongoing client content management.

**Brand values:** Premium, intentional, transparent, human, technically excellent

### Colour Palette ✅ Locked

| Role | Colour | Usage |
|---|---|---|
| Background | Deep dark (near black, not pure black) | Base of every page |
| Primary brand | Steel blue (~`#4A7FA5`) | Brand moments, highlights, links |
| Text | Off-white | Body text, headings |
| CTA accent | Muted gold/amber | Primary CTAs only — used sparingly |
| Neutral | Subtle greys | Dividers, secondary text, borders |

**Discipline:** Gold/amber must be used sparingly. Its power comes from scarcity. When everything else is dark, blue, and white, a single gold CTA commands the eye. The moment it appears everywhere it becomes noise.

### Typography ✅ Locked

| Role | Font | Usage |
|---|---|---|
| Display / Headings | Syne | All headings, hero text, section titles |
| Body | Inter | Body copy, UI labels, captions, nav |

Syne brings a distinctive geometric quality at display sizes — memorable without being decorative. Inter is invisible in the best way at body sizes — readers don't notice it, they just read.

### Motion Philosophy
Subtle, purposeful, never decorative. Animations guide the eye and confirm interactions. Nothing loops or moves without reason. Every transition should feel like it belongs, not like it was added.

### Design Philosophy
Premium and minimal. Visual clarity over visual noise. Psychological intentionality — colour, hierarchy, and layout direct attention and evoke the right response at the right moment. Intuitive without being simplistic. The human eye is considered at every decision — draw attention where it matters, reduce friction everywhere else.

---

## 3. Tech Stack ✅ Locked

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js (App Router) | SSR/SSG for performance and SEO, industry standard, scales to client builds |
| Language | TypeScript | Maintainability, another dev can pick it up, aligns with handoff philosophy |
| Styling | Tailwind CSS v4 | Utility-first, consistent design system, no stylesheet bloat |
| Animation | Motion (Framer Motion) | Best-in-class React animation, enables the premium feel without excess |
| Content | MDX (if needed) | For case studies or written content — no CMS overhead |
| Deployment | Vercel | Zero-config with Next.js, instant previews, built-in analytics |
| Package manager | pnpm | Fast, efficient |

---

## 4. Site Structure ✅ Locked

Single page with smooth scroll navigation. No multi-page routing except for any future case study detail pages.

### Sections (in narrative order)

#### 4.1 Navigation
- Fixed, minimal navbar
- Mordax Labs logo mark (icon only at small sizes, full logo at large)
- Nav links: Services, How It Works, Pricing, Work, Contact
- Single CTA button: "Start a Project" (gold/amber)
- Transparent on hero, transitions to solid on scroll
- Mobile: clean hamburger menu

#### 4.2 Hero ✅ Treatment locked
- **Visual treatment:** Typographic anchor + animated logo mark
- Primary goal: communicate what Mordax Labs does and who it's for, immediately
- Headline leads with client value, not credentials
- Subheading adds context — custom built, companion app, the differentiator
- One primary CTA: "Start a Project" (gold/amber)
- One secondary action: "See the work" (white/outlined)
- The animated Mordax Labs seahorse mark is the visual centrepiece
- No profile photo here — this is the brand moment

#### 4.3 Services — "What We Build"
- Describes the offering clearly: custom-built websites, not templates
- Communicates the quality standard
- Brief mention of the companion app as part of the package
- Outcome-focused copy, not a features list
- Visual treatment that feels considered, not like a spec sheet

#### 4.4 How It Works
- The process from first contact to handoff
- Steps: Discovery → Build → Revision Window → Handoff + App
- **Revision window defined clearly:**
  - ✅ Visual changes (free): text, colours, fonts, images, layout adjustments, section removal
  - 🔒 Functional changes (chargeable): new features, integrations, new pages, structural changes
- Introduces the companion app — what clients can manage themselves post-handoff
- Introduces the maintenance retainer as an option
- The "free 2-minute fix" philosophy communicated here — builds trust

#### 4.5 Pricing
- Transparent tiers — exact pricing TBD
- Each tier lists what's included clearly
- Differentiated by complexity and feature set, not arbitrary labels
- Token/build complexity factored into quoted price — no surprise costs
- Maintenance retainer pricing listed separately
- CTA on each tier: "Start a Project"

#### 4.6 The Work
- Case studies, not a gallery
- Each entry: what the client needed, what was built, the outcome
- Initially: Mordax Labs own site as the first case study
- Quality over quantity

#### 4.7 About
- Brief, human, not a biography
- Who is behind Mordax Labs, why this exists, what the standard is
- One photo — professional but not stiff
- Short — one paragraph maximum
- Reinforces "you're working with a real person who cares"

#### 4.8 Contact
- Minimal form: Name, Email, Project brief (textarea), Budget range (optional select)
- Direct email link as alternative
- Social links: GitHub, LinkedIn
- Clear response expectation
- Backend: TBD (Resend / Formspree — to decide in Phase 3)

---

## 5. The Companion App (Future Phase)

Not built in this phase but referenced on the site as a real, coming feature.

- Free mobile app paired with every Mordax Labs site
- Allows clients to manage: text content, colours, images, fonts — anything visual that doesn't require a code change
- Larger changes go through Lewis or another capable dev
- Designed to empower clients without creating a support burden
- The site communicates this as a differentiator without over-promising on timeline

---

## 6. Business Model (for copy reference)

- **Build fee:** Upfront, covers design, development, and all complexity. Token costs absorbed into quote.
- **Revision window:** 2 weeks post-launch. Visual changes only, no charge. Functional changes quoted separately.
- **Maintenance retainer:** Monthly fee, optional. Covers ongoing changes, updates, and support.
- **Ad hoc changes:** Small tasks (~2 minutes) done free as goodwill. Larger changes quoted.
- **Code standard:** Clean enough for any competent developer to pick up. Not simple, but clear.

---

## 7. Performance & Quality Standards

- Lighthouse score target: 95+ across Performance, Accessibility, Best Practices, SEO
- Fully responsive: mobile-first design
- Accessible: semantic HTML, ARIA where needed, keyboard navigable
- SEO: proper meta tags, Open Graph, structured data
- No layout shift on load
- Fonts and images optimised
- Core Web Vitals green across the board

---

## 8. Domain ✅ Decision made

- **Primary:** `mordaxlabs.com`
- **Also purchase:** `mordaxlabs.co.uk` and `mordaxlabs.uk` — redirect to `.com`
- **Registrar:** Cloudflare Registrar (at-cost, no markup, free WHOIS privacy)
- Purchase deferred — Vercel domain config is a trivial change when ready

---

## 9. Build Process

### Phase 1 — Foundation
- [ ] Clear existing codebase
- [ ] Initialise Next.js project with TypeScript and Tailwind v4
- [ ] Set up project structure, folder conventions, and base config
- [ ] Configure Vercel deployment and connect repository
- [ ] Establish design tokens (colours, typography, spacing) in Tailwind config

### Phase 2 — Design System
- [ ] Build base component library: Button, Link, Section wrapper, Typography components
- [ ] Define animation variants with Motion
- [ ] Establish responsive breakpoints and layout grid

### Phase 3 — Section Build (in order)
- [ ] Navigation
- [ ] Hero
- [ ] Services
- [ ] How It Works
- [ ] Pricing
- [ ] The Work
- [ ] About
- [ ] Contact
- [ ] Footer

### Phase 4 — Polish
- [ ] Animation pass — review every transition and motion element
- [ ] Responsive pass — test every section at all breakpoints
- [ ] Accessibility audit
- [ ] Performance audit and optimisation
- [ ] Copy review — ensure all text is outcome-focused and on-brand
- [ ] Cross-browser check

### Phase 5 — Launch
- [ ] Final Lighthouse audit
- [ ] Domain configuration
- [ ] Analytics setup (Vercel Analytics)
- [ ] Meta tags, Open Graph images, favicon set
- [ ] Launch

---

## 10. Out of Scope (This Phase)

- Companion app build
- Blog or written content section
- Client login or dashboard
- E-commerce
- Multi-language support

---

## 11. Open Decisions

- [ ] Exact pricing tiers and amounts
- [ ] Contact form backend — Resend or Formspree
- [ ] Hero headline copy
- [ ] About section copy and photo

---

*Document version 1.1 — all stack, palette, typography, and structural decisions locked*
