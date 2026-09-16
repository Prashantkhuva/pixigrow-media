# PixiGrow Media — Website Planning Document

## 1. Brand System (Light Theme)

### Color Palette
- **Primary (Electric Blue):** `#2A3BF5` — CTAs, accents, hover states
- **Accent (Lime Green):** `#D4F53B` — badges, highlights, emphasis
- **Neutral Dark:** `#1a1a1a` — headings, primary text
- **Neutral Light:** `#f5f5f5` — backgrounds, subtle sections
- **Text Primary:** `#0a0a0a` — body copy
- **Text Secondary:** `#666` — metadata, supporting text
- **Borders:** `#e0e0e0` — dividers, card borders
- **White:** `#ffffff` — card backgrounds, containers

### Typography
- **Display/Headlines:** Clash Display or Satoshi (or inter-tight) — bold, 500+ weight
- **Body:** Inter or System Font Stack — 16px, weight 400
- **Accent Color on Light Background:** Never use lime as text; only as bg blocks or small badges

### Brand Vibe
- Bold, oversized headlines
- Generous whitespace (Aerions-style minimalism)
- High contrast between sections
- Motion: subtle, purposeful (not flashy)
- Tone: Energetic, confident, direct ("Grow Loud" energy)

---

## 2. Sitemap

### Primary Pages
1. **Home** `/`
2. **Services** `/services` (overview) + optional service detail pages
3. **Work / Case Studies** `/work` or `/portfolio`
4. **About** `/about`
5. **Contact** `/contact`

### Secondary Pages
6. **Careers** `/careers` (they're actively hiring per IG)
7. **Blog / Insights** `/blog` (phase 2, SEO play)
8. **Terms & Privacy** `/terms`, `/privacy`

---

## 3. Home Page Structure

### 3.1 Hero Section
**Wire:**
```
┌─────────────────────────────────────┐
│  Your brand's 360° glow-up          │
│  starts here                         │
│  ────────────────────────────        │
│  Strategy. Celebs. PR & IPs.         │
│  We do it all.                       │
│                                      │
│  [Let's talk] ← Blue CTA             │
└─────────────────────────────────────┘
```

**Content:**
- Headline: "Your brand's 360° glow-up starts here" (from their IG bio)
- Subheading: "Strategy. Celebs. PR & IPs. We do it all."
- CTA: "Let's talk" → Contact page
- BG: White or off-white (#f5f5f5), maybe subtle lime accent stripe/circle top-right
- Hero height: Full viewport or tall (600px+)

---

### 3.2 Trust Strip
**Wire:**
```
┌──────────────────────────────────┐
│  Trusted by leading brands       │
│  ──────────────────────────      │
│  [Logo] [Logo] [Logo] [Logo]    │
└──────────────────────────────────┘
```

**Content:**
- Headline: "Trusted by leading brands" or "X brands trust us"
- 5-6 client logos (grayscale, hover → color)
- Alternative: "X brands | Y creators | Z campaigns"
- Background: White or very light (#fafafa)
- Purpose: Social proof, credibility

---

### 3.3 Services Overview (6 Cards)

**Wire:**
```
┌────────────────────────────────┐
│  What we do                    │
│  ────────────────────────────  │
│                                │
│  ┌──────┐ ┌──────┐ ┌──────┐   │
│  │ Icon │ │ Icon │ │ Icon │   │
│  │ Svc1 │ │ Svc2 │ │ Svc3 │   │
│  │ Desc │ │ Desc │ │ Desc │   │
│  └──────┘ └──────┘ └──────┘   │
│                                │
│  ┌──────┐ ┌──────┐ ┌──────┐   │
│  │ Icon │ │ Icon │ │ Icon │   │
│  │ Svc4 │ │ Svc5 │ │ Svc6 │   │
│  │ Desc │ │ Desc │ │ Desc │   │
│  └──────┘ └──────┘ └──────┘   │
└────────────────────────────────┘
```

**Services (Content):**

| Service | Icon | Description |
|---------|------|-------------|
| **Strategy** | 📊 | Data-driven positioning, competitive audit, roadmap planning |
| **Social & Content** | 📱 | Viral creative, posting calendars, community management |
| **Celebrity & Influencer** | ⭐ | Talent tie-ups, brand ambassadors, IP collaborations |
| **PR & Media** | 📣 | Press coverage, storytelling, reputation management |
| **Production** | 🎬 | In-house video, photography, design assets |
| **Performance** | 📈 | Analytics dashboards, real metrics, ROI proof |

**Card Design:**
- White bg + 1px border (#e0e0e0)
- Icon: Lime background (#D4F53B), 48px, centered
- Title: Bold, 18px, dark (#1a1a1a)
- Description: 13–14px, secondary text (#666)
- Hover: Subtle shadow, blue border, maybe slight lift
- Grid: 3 columns desktop, 2 mobile, 1 tablet

**Section BG:** #f5f5f5

---

### 3.4 Featured Work (Case Studies Teaser)

**Wire:**
```
┌────────────────────────────────┐
│  Recent work                   │
│  ────────────────────────────  │
│                                │
│  ┌──────────────┬────────────┐ │
│  │              │ Client     │ │
│  │  [Thumbnail] │ Challenge  │ │
│  │  [Reel]      │ → Result   │ │
│  │              │ "X growth" │ │
│  └──────────────┴────────────┘ │
│                                │
│  [View all work] ← Link        │
└────────────────────────────────┘
```

**Content:**
- 3–4 most impressive case studies
- Each card: thumbnail image + client name + challenge-to-result headline + metric (e.g., "300% reach growth")
- "View all" link to `/work`
- Background: White (#ffffff)

---

### 3.5 Process Section (4 Steps)

**Wire:**
```
┌────────────────────────────────┐
│  How we work                   │
│  ────────────────────────────  │
│                                │
│  ① Discover    ② Strategy      │
│   [desc]       [desc]          │
│                                │
│  ③ Execute     ④ Report        │
│   [desc]       [desc]          │
└────────────────────────────────┘
```

**Steps (Content):**

| Step | Heading | Description |
|------|---------|-------------|
| 1 | Discover | Audit your brand, competitive analysis, goal-setting |
| 2 | Strategy | Roadmap creation, channel strategy, KPI definition |
| 3 | Execute | Content production, posting, campaign launch, optimization |
| 4 | Report | Monthly dashboards, transparent metrics, growth proof |

**Design:**
- Numbered circles (blue, 1–2–3–4)
- Heading + brief description per step
- Background: #f5f5f5
- Grid: 4 columns → 2 on tablet → 1 on mobile

---

### 3.6 Instagram Feed Embed

**Wire:**
```
┌────────────────────────────────┐
│  Latest from Instagram         │
│                                │
│  [Feed widget – 6 posts]       │
│  [Follow button]               │
└────────────────────────────────┘
```

**Implementation:**
- Embed Instagram Basic Display API or use Behold.so
- Show latest 6–9 posts in a 3-column grid
- Link to their IG profile
- BG: White (#ffffff)

---

### 3.7 Testimonials Section (Optional Phase 2)

**Wire:**
```
┌────────────────────────────────┐
│  What clients say              │
│  ────────────────────────────  │
│                                │
│  "Quote"                       │
│  — Client Name, Role           │
│                                │
│  "Quote"                       │
│  — Client Name, Role           │
└────────────────────────────────┘
```

**Note:** Collect these during content-gathering phase. Can be 3–5 testimonials.

---

### 3.8 CTA Band

**Wire:**
```
┌────────────────────────────────┐
│  Ready to grow loud?           │
│  Let's talk strategy.          │
│                                │
│  [Schedule a call] ← Lime CTA  │
└────────────────────────────────┘
```

**Design:**
- Blue background (#2A3BF5)
- White text
- Lime CTA button (inverted)
- Small section, high impact

---

### 3.9 Footer

**Wire:**
```
┌────────────────────────────────┐
│  PixiGrow Media © 2025         │
│  Strategy • Celebs • PR • IPs  │
│                                │
│  [Social links]                │
│  contact@pixigrowmedia.com     │
│                                │
│  [Links] [Links] [Links]       │
└────────────────────────────────┘
```

**Content:**
- Logo/brand name
- Tagline
- Social links (IG, LinkedIn, etc.)
- Email: contact@pixigrowmedia.com
- Footer links: Services, Work, About, Contact, Careers
- Copyright

---

## 4. Services Page (`/services`)

**Structure:**
- Hero: "Full-spectrum brand transformation"
- 6 service cards (larger version of home overview)
- Each service expands to show:
  - What it includes (sub-services, deliverables)
  - Why it matters
  - Common use cases
  - Pricing tier (optional; can link to contact)
- CTA at bottom: "Let's talk about your strategy"

**Alternative (Simpler):**
- Static service cards, each links to a detail page (e.g., `/services/social-content`)
- Detail page: full description, case studies, pricing

**Recommendation:** Start with static cards + detail pages. Simpler to build, clearer for users.

---

## 5. Work / Case Studies Page (`/work`)

**Structure:**

### 5.1 Page Header
- Title: "Recent Work"
- Subtitle: "Real campaigns. Real results."

### 5.2 Filter Bar (Optional Phase 2)
- Category filter: All / Social / PR / Celebrity / Production
- Optional initially; can add later

### 5.3 Case Study Grid

**Wire:**
```
┌───────────────────────┬───────────────────────┐
│ [Thumbnail]           │ [Thumbnail]           │
│ Client Name           │ Client Name           │
│ "Challenge → Result"  │ "Challenge → Result"  │
│ 300% reach growth     │ 50 media mentions     │
└───────────────────────┴───────────────────────┘
```

- 2 columns desktop, 1 mobile
- Each card clickable → detail page
- Thumbnail should be compelling (main visual from campaign)

### 5.4 Detail Page Template (`/work/[slug]`)

**Sections:**
1. **Hero Image** — Main campaign visual or reel thumbnail
2. **Overview Block:**
   - Client name + industry
   - Challenge (problem statement)
   - Approach (what PixiGrow did)
   - Results (key metrics in bold)
3. **Story Section** — 2–3 paragraphs of narrative
4. **Metrics Block** — 3–4 key numbers (% growth, reach, engagement, etc.)
5. **Media Grid** — 4–6 images/video stills from campaign
6. **Quote** — Client testimonial
7. **Next Case Study** — Link to adjacent work

---

## 6. About Page (`/about`)

**Structure:**

### 6.1 Hero
- Headline: "We're PixiGrow Media — Rajkot's 360° brand agency"
- Subheading: Brief origin story

### 6.2 Origin Story Section
- 2–3 short paragraphs: Why the agency was started, who founded it, what problem they solve
- Tone: Authentic, founder-driven

### 6.3 Why PixiGrow?
- 3 reasons / pillars (e.g., "In-house talent", "Real results", "We're Rajkot-based")
- Each with icon + short description

### 6.4 Team Section
- Team photos + names + roles
- Can be simple initially (names + roles), add photos later

### 6.5 Values / Manifesto
- "Don't just scale. Grow Loud." — elaborate on this
- 3–4 bullet points on philosophy

### 6.6 CTA
- "Let's work together" → Contact page

---

## 7. Contact Page (`/contact`)

**Structure:**

### 7.1 Hero
- "Let's talk strategy"
- Brief copy: "Drop us a line, we'll get back to you in 24 hours"

### 7.2 Contact Form
**Fields:**
- Name (text)
- Email (email)
- Company/Brand (text)
- What you need (select: Strategy, Content, PR, Influencer, Production, Other)
- Brief (textarea)
- Submit button (blue)

**Post-submit:** Thank you message + "We'll be in touch soon"

### 7.3 Contact Info Block
- Email: contact@pixigrowmedia.com
- Phone: (optional, if they have one)
- Location: Rajkot, Gujarat
- Social links

### 7.4 Map (Optional)
- Embed Google Map with their location

---

## 8. Careers Page (`/careers`)

**Structure:**

### 8.1 Hero
- "Join the PixiGrow squad"
- "We're hiring talented people who want to build brands that matter"

### 8.2 Open Roles
- Cards for each open position:
  - Title (e.g., "Social Media Manager", "Copywriter", "Video Editor")
  - Experience level
  - Brief description
  - [Learn more / Apply] link

### 8.3 Why Join Us?
- 3–4 benefits (flexible hours, learning culture, equity/ESOP?, fun team)
- Testimonial from current team member

### 8.4 CTA
- "Send your portfolio/resume to careers@pixigrowmedia.com"

---

## 9. Design System Guidelines

### Spacing
- Section padding: 60–80px vertical (desktop), 40–60px (mobile)
- Card padding: 24–32px
- Gap between cards: 20–24px
- Margin between sections: 60–80px

### Typography Scale
- H1 (Hero): 48–56px, bold, tight line-height (1.1)
- H2 (Section title): 36–42px, bold
- H3 (Card title): 18–20px, 600 weight
- Body: 16px, 400 weight
- Small/meta: 13–14px, secondary text color

### Button Styles
**Primary (Blue):**
- Background: #2A3BF5
- Text: white
- Padding: 14px 32px
- Border radius: 6–8px
- Hover: Darken to #1f2ab8, slight shadow

**Secondary (Lime):**
- Background: #D4F53B
- Text: #0a0a0a (dark)
- Padding: 14px 32px
- Border radius: 6–8px
- Hover: Darken to #c5e500

**Ghost (Text):**
- Background: transparent
- Text: #2A3BF5
- Border: 1px solid #e0e0e0
- Hover: Light blue background

### Card Styles
- Border: 1px solid #e0e0e0
- Border radius: 8–12px
- Padding: 24–32px
- Background: white
- Hover: subtle shadow (0 4px 12px rgba(0,0,0,0.08)), maybe border color shift to blue

### Shadows
- Light: 0 2px 6px rgba(0,0,0,0.05)
- Medium: 0 4px 12px rgba(0,0,0,0.08)
- Deep: 0 8px 24px rgba(0,0,0,0.12)

### Animations
- Hover state transitions: 200ms ease-out
- Link underlines: fade in on hover
- CTA buttons: translateY(-2px) on hover + shadow
- Fade-in on page load (optional, subtle)
- Page transitions: fade or slide (keep it light)

---

## 10. Technical Stack Recommendations

### Frontend
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + CSS modules (optional)
- **UI Components:** shadcn/ui (if needed) or Headless UI
- **Animation:** Framer Motion (sparingly), Lenis for smooth scroll
- **Forms:** React Hook Form + Zod (validation)
- **API Routes:** Built-in Next.js API routes

### CMS & Content
- **Option A (Recommended):** Sanity CMS (open, flexible, fast)
  - Pros: Easy content management, PixiGrow can update case studies themselves
  - Cons: Setup takes time
- **Option B (Simpler):** Markdown files in repo (Next.js MDX)
  - Pros: No external service, version control
  - Cons: Requires GitHub access for edits
- **Option C:** Payload CMS (open-source, more control)

### Backend
- **API:** Next.js API routes or Resend for email
- **Contact Form:** Formspree / EmailJS / SendGrid → contact@pixigrowmedia.com
- **Analytics:** Plausible or Fathom (privacy-friendly)

### Hosting
- **Vercel** (seamless Next.js deployment, fast CDN)
- Alternative: Netlify

### SEO
- Next.js built-in `next/head` + dynamic meta tags
- sitemap.xml + robots.txt generated
- Schema.org markup (LocalBusiness, Organization, BreadcrumbList)
- Google Search Console setup

### Instagram Integration
- **Instagram Basic Display API** (official, free tier available)
- Alternative: **Behold.so** (simpler, no API needed, hosted widget)

### Domain & Email
- Domain registrar: Namecheap / GoDaddy / Route 53
- Email provider: Gmail business account or Zoho Mail (forward to Gmail)
- SMTP for form submissions: Resend, SendGrid, or Gmail SMTP

---

## 11. SEO Strategy

### Local SEO
- **Keyword targets:**
  - "Marketing agency in Rajkot" / "advertising agency Rajkot"
  - "Social media agency Gujarat"
  - "Influencer marketing Rajkot"
  - "Brand strategy Rajkot"
  - "Celebrity marketing agency India"

- **Tactics:**
  1. Google Business Profile (GBP) setup
  2. Schema markup: LocalBusiness + Organization
  3. Location pages (optional Phase 2)
  4. Blog posts targeting local + long-tail keywords
  5. Internal linking strategy

### On-Page SEO
- Unique meta titles + descriptions for all pages
- H1 per page (hero headline)
- Semantic HTML structure
- Image alt text (all images)
- Mobile responsive (critical)

### Content SEO
- Blog section (`/blog`) — 1–2 posts/month
  - "How to build a brand strategy in 2025"
  - "Celebrity partnerships: What actually works"
  - "Social media trends for Rajkot brands"
- Case studies with keyword-rich titles and descriptions
- FAQ section (optional, on services or homepage)

### Technical SEO
- Sitemap + robots.txt
- Mobile-first indexing (default with Next.js)
- Page speed (Core Web Vitals)
  - Lazy load images
  - Optimize bundles
  - Minimal JS
- SSL/HTTPS (Vercel handles this)

### Backlinks & Authority (Phase 2)
- Reach out to local business directories
- Guest posts on lifestyle/business blogs
- Press coverage (tie-in with PR services)
- LinkedIn outreach

---

## 12. Build Phases

### Phase 1: Foundation (Weeks 1–2)
- [ ] Content gathering (interviews, case study details, team info)
- [ ] Design system finalized (colors, spacing, typography locked)
- [ ] Figma designs (homepage + key pages)
- [ ] Domain purchased, email setup
- [ ] Google Business Profile created

**Deliverable:** Design files + content brief

---

### Phase 2: Core Build (Weeks 3–4)
- [ ] Next.js project setup + TypeScript
- [ ] Homepage fully built (all sections)
- [ ] Services page
- [ ] About page
- [ ] Contact form (integration with email service)
- [ ] Navigation + footer
- [ ] Mobile responsiveness

**Deliverable:** Homepage + 3 pages live on staging

---

### Phase 3: Content & CMS (Week 5)
- [ ] CMS setup (Sanity or MDX)
- [ ] Work/case study detail page templates
- [ ] 4–6 case studies populated
- [ ] Blog post template created
- [ ] IG feed widget integrated

**Deliverable:** Full site structure complete

---

### Phase 4: Polish & Launch (Week 6)
- [ ] SEO setup (sitemap, robots, schema, meta tags)
- [ ] Google Analytics + Plausible
- [ ] Performance optimization (image compression, bundle size)
- [ ] Testing (cross-browser, mobile, forms)
- [ ] Content review + edits
- [ ] Launch to production (DNS change)
- [ ] Google Search Console submission

**Deliverable:** Live, optimized website

---

### Phase 5: Post-Launch (Ongoing)
- [ ] Monitor performance (analytics, Core Web Vitals)
- [ ] Blog post cadence (1–2/month for SEO)
- [ ] Case study updates (as new work ships)
- [ ] Email nurture sequence (from contact form)

---

## 13. Pitch Strategy

### Angle
*"Your agency creates brands, but you don't have a digital home. Your IG is strong, but 60% of people will Google first. You're leaving leads on the table."*

### Proof Point
*"Here's a static mockup of your homepage — same vibe as Aerions or Kern, but PixiGrow's energy."*

### First Deliverable (Free)
- Single-page PDF: Hero section + Services + CTA
- Show their colors, their tone, their positioning
- Include headline options ("Grow Loud" angle)

### DM/Email Hook
> "Saw your IG work — it's fire. One question: what happens when a brand finds you via Google but can't find a website? 👀 Happy to show you what I'm thinking. [Link to free mockup]"

### Pricing Structure (Your Call)
- **Option A:** Fixed project price (Phase 1–4)
- **Option B:** Monthly retainer (build + ongoing content updates)
- **Option C:** Hybrid (build cost + retainer for blogging/case study updates)

*Retainer is better if they commit to regular content (blogs, new work)*

---

## 14. Final Checklist Before Build

- [ ] Sitemap approved by PixiGrow
- [ ] Content (bios, case studies, testimonials) gathered
- [ ] Brand assets (logo, colors, fonts) confirmed
- [ ] Competitor analysis done (Aerions vibe understood)
- [ ] Hosting provider + domain decided
- [ ] CMS choice locked in
- [ ] Team assigned (frontend, designer, content)
- [ ] Timeline + milestones agreed
- [ ] Success metrics defined (traffic, leads, conversions)

---

## 15. Questions for PixiGrow (Before Starting)

1. **Case Studies:** Do they have documented results (metrics) for past campaigns?
2. **Team Photos:** Will they provide headshots + bios for About page?
3. **Client Logos:** Which brands can they showcase (NDA-safe)?
4. **Tone:** Any brand voice guidelines or tone of voice doc?
5. **Timeline:** When do they want to launch? (affects scope)
6. **Budget:** What's their budget range? (affects CMS choice, design depth)
7. **Ongoing:** Who will manage blog updates, case study uploads post-launch?
8. **Analytics:** Do they have baseline metrics (current IG followers, engagement)?

---

## 16. Success Metrics

### Launch Week
- [ ] 0 errors on Google PageSpeed
- [ ] Mobile responsive on iOS + Android
- [ ] Forms working end-to-end
- [ ] IG feed widget live
- [ ] Google Search Console linked

### First Month
- [ ] 500+ organic sessions
- [ ] 10+ form submissions / inquiries
- [ ] Page speed: >90 Lighthouse score

### Quarter 1
- [ ] 2,000+ organic sessions
- [ ] 50+ qualified leads
- [ ] 2–3 new case studies live
- [ ] 4–6 blog posts (SEO growth)

---

**Owner:** Prashant Khuva / PixiGrow Media  
**Status:** Planning Phase  
**Last Updated:** [Today's Date]