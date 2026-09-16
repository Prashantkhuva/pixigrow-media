# PixiGrow Media Website — OpenCode Build Prompts

**Tech Stack:** Next.js 14+ (App Router) | TypeScript | Tailwind CSS | GSAP | Lenis | Framer Motion  
**Color System:**
- Primary Blue: `#2A3BF5`
- Accent Lime: `#D4F53B`
- Dark: `#1a1a1a`
- Light BG: `#f5f5f5`
- White: `#ffffff`
- Text Secondary: `#666666`
- Border: `#e0e0e0`

---

## PROMPT 1: Project Setup & Structure

```
Create a new Next.js 14+ project with TypeScript and Tailwind CSS for PixiGrow Media website.

Requirements:
1. Initialize Next.js app with App Router
2. Install and configure:
   - TypeScript
   - Tailwind CSS
   - GSAP
   - Lenis (for smooth scrolling)
   - Framer Motion (for animations)
   - clsx (for conditional classes)
3. Create folder structure:
   - app/ (pages)
   - components/ (reusable components)
   - lib/ (utilities, constants)
   - public/ (assets)
   - types/ (TypeScript types)
4. Setup tailwind.config.ts with custom colors:
   - primary: #2A3BF5 (blue)
   - accent: #D4F53B (lime)
   - dark: #1a1a1a
   - light: #f5f5f5
5. Create global styles with Lenis scroll behavior
6. Setup layout.tsx with default meta tags
7. Create empty pages: home, services, work, about, contact
8. Export project files

Keep it minimal, clean setup with no demo content.
```

---

## PROMPT 2: Design System & Reusable Components

```
Build reusable UI components for PixiGrow Media using Tailwind CSS.

Create these components in components/:

1. **Button.tsx**
   - Variants: primary (blue), secondary (lime), ghost (transparent)
   - Sizes: sm, md, lg
   - Hover effects with GSAP on mount
   - Example: <Button variant="primary" size="md">Let's talk</Button>

2. **Card.tsx**
   - White bg, border #e0e0e0, rounded-lg
   - Hover: subtle shadow + blue border
   - Padding: 24px
   - Example: <Card><h3>Service Title</h3></Card>

3. **Section.tsx**
   - Wrapper with padding (80px top/bottom desktop, 40px mobile)
   - Optional bg color prop
   - Example: <Section bg="light"><h2>Title</h2></Section>

4. **Container.tsx**
   - Max-width 1200px, centered
   - Example: <Container><h1>Hero</h1></Container>

5. **Heading.tsx**
   - Variants: h1 (48px), h2 (36px), h3 (18px)
   - Color: #1a1a1a by default
   - Example: <Heading variant="h1">Your brand's 360° glow-up</Heading>

6. **Grid.tsx**
   - Responsive grid: 3 cols desktop, 2 tablet, 1 mobile
   - Gap: 24px
   - Example: <Grid cols={3}><Card/><Card/></Grid>

7. **IconBox.tsx**
   - Lime background (#D4F53B), 48px
   - Center emoji/icon
   - Example: <IconBox>📊</IconBox>

8. **Badge.tsx**
   - Small pill with lime bg, dark text
   - Example: <Badge>Featured</Badge>

All components should use clsx for conditional styling. Export as barrel (components/index.ts).
```

---

## PROMPT 3: Homepage (page.tsx) - Part 1: Hero & Trust Strip

```
Build the Homepage Hero and Trust Strip sections for PixiGrow Media.

Structure (app/page.tsx):

1. **Hero Section**
   - Full viewport height (600px+ on desktop)
   - Background: white (#ffffff)
   - Accent stripe: Lime (#D4F53B) semi-circle top-right corner (subtle, 300px radius, 20% opacity)
   - Content centered:
     - H1: "Your brand's 360° glow-up starts here"
     - P: "Strategy. Celebs. PR & IPs. We do it all."
     - Blue CTA button: "Let's talk" → href="/contact"
   - Animation: H1 fade-in from bottom (0.8s, 0.2s delay), P fade-in (0.8s, 0.4s delay), button scale-in (0.6s, 0.6s delay) using GSAP on mount
   - Font: H1 bold 56px, P 18px secondary text

2. **Trust Strip Section**
   - Background: #f5f5f5
   - Padding: 40px
   - Centered headline: "Trusted by leading brands" (14px, secondary text)
   - Logo grid: 6 placeholder boxes (100px × 50px, bg #ddd, rounded), grayscale filter
   - Spacing: 30px gap, wrapped
   - On hover logo: filter removed (color preview)
   - This section should be ready for client logo replacement later

Use Lenis for smooth scroll. Test on desktop + mobile.
```

---

## PROMPT 4: Homepage - Part 2: Services Cards Grid

```
Build the "What We Do" Services section on homepage.

Requirements:

1. **Section Header**
   - Background: white
   - Heading: "What we do" (h2, bold, 36px)
   - Centered, margin-bottom: 50px

2. **Services Grid**
   - 6 cards layout: 3 cols desktop, 2 tablet, 1 mobile
   - Each card contains:
     a. IconBox (lime bg, 48px) with emoji
     b. H3 title (18px, bold, #1a1a1a)
     c. P description (14px, #666)
   
3. **Card Services (exact copy):**
   - 📊 Strategy | "Data-driven brand positioning and campaign planning"
   - 📱 Social & Content | "Viral-worthy creative and consistent community growth"
   - ⭐ Celebrity & IP | "Influencer tie-ups, talent partnerships, and brand collabs"
   - 📣 PR & Media | "Press coverage, brand storytelling, and crisis management"
   - 🎬 Production | "In-house video, photography, and creative assets"
   - 📈 Performance | "Real metrics, real results, real accountability"

4. **Card Styling**
   - White bg, border 1px #e0e0e0, rounded-lg
   - Padding: 32px 24px
   - Hover: border shifts to blue (#2A3BF5), subtle shadow, translateY(-4px) with Framer Motion

5. **Animation**
   - Cards stagger-fade in (each 150ms apart) when section scrolls into view using GSAP IntersectionObserver

Use Grid component. Gap 24px. Section bg: white.
```

---

## PROMPT 5: Homepage - Part 3: Recent Work Teaser

```
Build the "Recent Work" teaser section on homepage.

Requirements:

1. **Section Header**
   - Background: #f5f5f5
   - Heading: "Recent work" (h2)
   - Subheading (optional): "Real campaigns. Real results." (14px, #666)

2. **Case Study Cards Grid**
   - 2 columns desktop, 1 mobile
   - Each card:
     a. Placeholder image (400px × 300px, bg gradient from blue to lime)
     b. Client name (bold, 16px)
     c. Challenge → Result headline (14px, #666)
     d. Metric in bold: "300% reach growth" / "50 media mentions" (18px, bold blue)
   
3. **Sample Cards** (use placeholder data):
   - Card 1: "Luxury Brand Co" | "Launched new product line" → "300% Instagram reach growth"
   - Card 2: "Local Startup" | "Built brand from zero" → "50 media mentions in 3 months"
   - (More cards can be added later from CMS)

4. **Card Styling**
   - White bg, subtle shadow on hover
   - Cursor: pointer
   - Hover: image slight zoom (1.05 scale via Framer Motion)
   - Clickable → links to /work/[slug] (dummy routes for now)

5. **"View all work" Link**
   - Text link with arrow, blue (#2A3BF5)
   - Hover: underline, arrow shifts right (Framer Motion)
   - Points to /work

Use Grid component. Spacing: 24px gap.
```

---

## PROMPT 6: Homepage - Part 4: Process Section

```
Build the "How We Work" 4-step process section on homepage.

Requirements:

1. **Section Header**
   - Background: white
   - Heading: "How we work" (h2, centered)

2. **Process Steps Grid**
   - 4 columns desktop, 2 tablet, 1 mobile
   - Each step contains:
     a. Numbered circle (blue bg #2A3BF5, white "1/2/3/4", 50px diameter)
     b. H4 heading: "Discover" / "Strategy" / "Execute" / "Report"
     c. P description (14px, #666)

3. **Step Content**:
   - 1. Discover | "Audit your brand, analyze competitors, understand your goals"
   - 2. Strategy | "Craft a tailored roadmap with clear KPIs and timelines"
   - 3. Execute | "Build, launch, optimize—we handle the heavy lifting"
   - 4. Report | "Monthly dashboards, transparent metrics, growth proof"

4. **Animation**
   - Circle numbers count up from 0 to 1/2/3/4 on scroll into view (GSAP Counter)
   - Stagger-fade in (steps appear sequentially, 150ms apart)

5. **Spacing**
   - Section padding: 80px top/bottom
   - Grid gap: 30px
   - Step text: center-aligned

Keep it clean and minimal.
```

---

## PROMPT 7: Homepage - Part 5: Instagram Feed & CTA Band

```
Build Instagram Feed embed and final CTA section on homepage.

Requirements:

1. **Instagram Feed Section**
   - Background: white
   - Heading: "Latest from Instagram" (centered, 18px)
   - Embed placeholder grid: 3 × 3 = 9 posts (each 200px × 200px square)
   - Use placeholder images (alternate blue/lime/white gradient backgrounds)
   - Each post clickable → opens Instagram profile in new tab
   - Add "Follow us on Instagram" link below grid
   - Link points to: instagram.com/pixigrowmedia

   Note: In production, integrate Instagram Basic Display API. For now, use static placeholder grid.

2. **Final CTA Band**
   - Background: #2A3BF5 (blue)
   - H2: "Ready to grow loud?" (white, centered)
   - P: "Let's talk strategy." (white, 16px)
   - Button: "Schedule a call" (lime bg #D4F53B, dark text)
   - Button links to: /contact
   - Padding: 60px top/bottom
   - Animation: Text fade-in from top, button scales in from bottom on scroll (GSAP)

3. **Spacing**
   - Instagram section padding: 60px
   - CTA section padding: 60px
   - Both sections: full width, center content

Make it punchy and action-driven.
```

---

## PROMPT 8: Homepage - Part 6: Footer

```
Build the Footer component for PixiGrow Media website.

Requirements:

1. **Footer Layout**
   - Background: #1a1a1a (dark)
   - Text color: white
   - Padding: 40px top/bottom

2. **Content**
   - Brand area (top):
     - Logo/text: "PixiGrow Media" (bold, 18px)
     - Tagline: "Strategy • Celebs • PR • IPs" (14px, #999)
   
   - Links grid (3 columns):
     a. **Services** | Strategy, Social, Celebrity, PR, Production
     b. **Company** | About, Contact, Careers
     c. **Legal** | Privacy Policy, Terms of Service
   
   - Bottom bar:
     - Email: contact@pixigrowmedia.com (blue link)
     - Social links: IG, LinkedIn (icons, white, hover blue)
     - Copyright: "PixiGrow Media © 2025. All rights reserved." (12px, #666)

3. **Styling**
   - All links: #999 by default, hover blue (#2A3BF5)
   - Hover: underline after 200ms
   - Icons: 20px, hover scale up + change color to lime

4. **Mobile Responsive**
   - Stack vertically on mobile (1 column)
   - Reduce padding to 24px on mobile
   - Social icons row-based, centered

Use clsx for conditional styling. Export as reusable Footer component.
```

---

## PROMPT 9: Services Page (`/services`)

```
Build the Services detail page (/services).

Structure:

1. **Hero Section**
   - Background: #f5f5f5
   - H1: "What we offer" (56px, centered, bold)
   - Subheading: "Full-spectrum brand transformation" (18px, #666)
   - Padding: 80px vertical

2. **Services Grid**
   - Reuse service cards from homepage (Section cards component)
   - 3 columns desktop, 2 tablet, 1 mobile
   - Each card LARGER than homepage:
     a. IconBox (60px, larger emoji)
     b. Title (20px, bold)
     c. Description (14px)
     d. Expanded details (optional, initially hidden):
        - "What's included" bullet list (optional, show on hover/accordion)
     e. CTA link: "Learn more" → /services/[service-slug]
   
3. **Reusable Data**
   Use exact same 6 services from homepage. Each card clickable to detail page.

4. **Bottom CTA**
   - Blue background (#2A3BF5)
   - Text: "Ready to talk strategy?" (white, centered)
   - Button: "Get in touch" → /contact
   - Padding: 60px

Keep layout clean. Use same animation patterns as homepage (stagger-fade on scroll).
```

---

## PROMPT 10: Services Detail Page Template (`/services/[slug]`)

```
Build a dynamic service detail page template for PixiGrow Media.

Structure (app/services/[slug]/page.tsx):

1. **Hero**
   - Background: white
   - Breadcrumb: "Services > Strategy" (12px, #999)
   - H1: Service name (56px, bold)
   - Service icon (100px, lime bg)

2. **What's Included Section**
   - H2: "What's included"
   - 4 key deliverables as list items (bullet + description):
     Example for "Strategy":
     - Competitive brand audit
     - Target audience research
     - Campaign roadmap and KPIs
     - Monthly performance reports

3. **Why It Matters**
   - H2: "Why it matters"
   - 3-4 paragraphs explaining value + ROI

4. **Case Study Preview**
   - H2: "See it in action"
   - 1-2 case study cards (same style as homepage work teaser)
   - Each linked to /work/[slug]

5. **Pricing/Next Step**
   - H2: "Let's discuss your needs"
   - Copy: "Every brand is unique. Let's talk about what's right for you."
   - Button: "Schedule consultation" (blue) → /contact

Use dynamic routing. Create routes for:
- /services/strategy
- /services/social-content
- /services/celebrity-influencer
- /services/pr-media
- /services/production
- /services/performance

Use URL params to populate content from data object. Add animations on scroll (GSAP).
```

---

## PROMPT 11: Work / Case Studies Page (`/work`)

```
Build the Work / Case Studies page for PixiGrow Media.

Structure (app/work/page.tsx):

1. **Page Header**
   - Background: white
   - H1: "Recent work" (48px, centered, bold)
   - Subheading: "Real campaigns. Real results." (18px, #666)
   - Padding: 80px vertical

2. **Filter Bar** (Optional, for Phase 2)
   - Skip filter for now. Add later if needed.

3. **Case Study Grid**
   - 2 columns desktop, 1 mobile
   - Each card:
     a. Thumbnail image (600px × 400px, bg gradient)
     b. Client name (16px, bold, #1a1a1a)
     c. Challenge → Result headline (14px, #666)
     d. Key metric (18px, bold, blue) e.g., "300% reach growth"
     e. On hover: thumbnail zoom (1.05 scale), shadow appears
     f. Clickable → /work/[slug]

4. **Sample Data** (Placeholder for now):
   - Case Study 1: "Luxury Brand Launch"
     - Thumbnail: Blue-to-lime gradient
     - Client: "Brand Co"
     - Metric: "300% Instagram reach growth"
   
   - Case Study 2: "Startup Brand Build"
     - Thumbnail: Lime-to-blue gradient
     - Client: "StartUp Inc"
     - Metric: "50 media mentions"
   
   (Add more as content becomes available)

5. **Bottom CTA**
   - Heading: "Ready for your next big campaign?"
   - Button: "Let's get started" (blue) → /contact
   - Background: #f5f5f5

Use Grid component. Padding: 80px top/bottom. Animate cards on scroll (stagger-fade).
```

---

## PROMPT 12: Case Study Detail Page Template (`/work/[slug]`)

```
Build a dynamic case study detail page template for PixiGrow Media.

Structure (app/work/[slug]/page.tsx):

1. **Hero Image**
   - Full width, 500px height
   - Placeholder: gradient (blue-to-lime)
   - In production: actual campaign visual/video

2. **Overview Block**
   - Section bg: white
   - Breadcrumb: "Work > Case Studies" (12px, #999)
   - H1: Case study title (48px, bold)
   - Three columns:
     a. **Client** heading + name
     b. **Challenge** heading + 1-2 sentences
     c. **Approach** heading + 1-2 sentences
   
3. **Results Block**
   - Section bg: #f5f5f5
   - H2: "Results"
   - 4 KPI cards (equal width):
     Example:
     - "300%" | "Reach Growth"
     - "50" | "Media Mentions"
     - "2.5M" | "Total Impressions"
     - "45%" | "Engagement Rate"
   - KPI number: 36px, bold, blue
   - Label: 14px, #666

4. **Story Section**
   - Prose text: 2-3 paragraphs
   - Font: 16px body, #1a1a1a
   - Color: white bg with thin border

5. **Media Gallery**
   - H2: "Campaign gallery"
   - 2 columns, images/videos
   - Placeholder gradient boxes for now

6. **Client Testimonial** (Optional)
   - Quote in italic, 18px
   - Attribution: "— Client Name, Title"
   - Bg: blue (#2A3BF5), text white

7. **Next Case Study Link**
   - "View next project" with arrow
   - Links to adjacent case study (circular navigation)

Use dynamic routing via [slug]. Create sample case study routes:
- /work/luxury-brand-launch
- /work/startup-brand-build
- (Add more as content is available)

Font styling: Heading bold, body regular, serif-friendly quotes.
```

---

## PROMPT 13: About Page (`/about`)

```
Build the About page for PixiGrow Media.

Structure (app/about/page.tsx):

1. **Hero**
   - Background: white
   - H1: "We're PixiGrow Media" (48px, centered, bold)
   - Subheading: "Rajkot's 360° brand agency" (18px, #666)

2. **Origin Story**
   - Section bg: #f5f5f5
   - H2: "Our story"
   - Prose: 2-3 paragraphs about founding, mission, vision
   - (Content TBD with client)

3. **Why PixiGrow? (3 Pillars)**
   - Section bg: white
   - H2: "Why work with us"
   - 3 cards with icons:
     a. 🏆 In-House Talent | Description
     b. 📊 Real Results | Description
     c. 🚀 Rajkot-Born | Description
   - Each card: white bg, blue border on hover

4. **Team Section**
   - Section bg: #f5f5f5
   - H2: "Meet the team"
   - Team grid: 3 columns desktop, 2 tablet, 1 mobile
   - Each member:
     a. Placeholder circle (200px, gradient)
     b. Name (bold, 18px)
     c. Role (14px, #666)
   - (Photos + bios TBD with client)

5. **Values / Manifesto**
   - Section bg: white
   - H2: "Our philosophy"
   - Feature quote in large, bold font:
     "Don't just scale. Grow Loud."
   - 4 supporting values as bullet list (14px)
     (Content TBD)

6. **Bottom CTA**
   - Heading: "Let's create something amazing together"
   - Button: "Get in touch" (blue) → /contact

Use Section wrapper. Keep design clean and minimal.
```

---

## PROMPT 14: Contact Page (`/contact`)

```
Build the Contact page with a working form for PixiGrow Media.

Structure (app/contact/page.tsx):

1. **Hero**
   - Background: white
   - H1: "Let's talk strategy" (48px, centered, bold)
   - Subheading: "Drop us a line, we'll get back to you in 24 hours" (16px, #666)

2. **Two-Column Layout**
   - Left: Contact form (60% width desktop)
   - Right: Contact info (40% width desktop)
   - Stack vertically on mobile

3. **Contact Form**
   - Form fields:
     a. Name (text input, required)
     b. Email (email input, required)
     c. Company/Brand (text input)
     d. What you need (select dropdown):
        Options: Strategy, Content, PR, Influencer, Production, Other
     e. Brief (textarea, required)
     f. Submit button (blue, 16px, padding 14px 32px)
   
   - Styling:
     - Input bg: white, border 1px #e0e0e0
     - Focus: border blue (#2A3BF5), shadow
     - Labels: 14px, bold, #1a1a1a
     - Spacing between fields: 20px
     - Form bg: white, padding 40px, border 1px #e0e0e0, rounded-lg

   - Submission:
     - On submit: collect form data
     - Email to: contact@pixigrowmedia.com (use Resend or EmailJS API)
     - Success message: "Thanks! We'll be in touch soon." (green checkmark, fade-in animation)
     - Error handling: Show error message if submission fails

4. **Contact Info Block** (Right side)
   - H3: "Get in touch"
   - Email: contact@pixigrowmedia.com (blue link)
   - Phone: (optional, if provided)
   - Location: "Rajkot, Gujarat, India"
   - Social icons: IG, LinkedIn (clickable)
   - Each item: 16px, bold heading + data

5. **Optional Map**
   - Embed Google Map (if location provided)
   - Height: 300px
   - Marker on PixiGrow office location

Use Framer Motion for form validation feedback. Lenis smooth scroll. Test form submission end-to-end.
```

---

## PROMPT 15: Navigation & Layout

```
Build a reusable Navigation component and update root layout for PixiGrow Media.

1. **Navigation Component** (components/Navigation.tsx)
   - Background: white
   - Sticky top (position: sticky, z-index: 40)
   - Logo/text: "PixiGrow" (bold, 18px, dark) → href="/"
   - Links:
     - Services (href="/services")
     - Work (href="/work")
     - About (href="/about")
     - Contact (href="/contact")
   - CTA Button: "Let's talk" (blue, small) → href="/contact"
   
   - Styling:
     - Nav items: 14px, #1a1a1a, weight 500
     - Hover: underline or color shift to blue (200ms transition)
     - Padding: 16px 40px (desktop), 16px 20px (mobile)
   
   - Mobile Menu:
     - Hamburger icon on mobile (<768px)
     - Slide-out menu (Framer Motion), overlay backdrop
     - Same links, stacked vertically
   
   - Animation:
     - Logo fade-in on mount (GSAP)
     - Links stagger-fade in

2. **Update root layout.tsx**
   - Import Navigation component
   - Add Navigation at top
   - Setup Lenis global scrolling
   - Meta tags:
     - Title: "PixiGrow Media - 360° Brand Agency Rajkot"
     - Description: "Strategy, Celebs, PR & IPs. We do it all."
     - Viewport: mobile-optimized
   - Google Analytics placeholder (can be added later)

3. **Breadcrumb Component** (components/Breadcrumb.tsx) [OPTIONAL]
   - Display on detail pages
   - Example: "Services > Strategy > Details"
   - Links back to parent pages

Ensure navigation is accessible (keyboard navigation, ARIA labels). Test mobile menu on small screens.
```

---

## PROMPT 16: Animations & Interactions (GSAP + Lenis Setup)

```
Setup global animations and smooth scrolling for PixiGrow Media website.

1. **Lenis Smooth Scrolling**
   - Install: npm install lenis
   - Initialize in root layout (use client)
   - Smooth scroll effect on all pages
   - Test on desktop + mobile

2. **GSAP Animations**
   - Setup gsap library in lib/gsap-config.ts
   - Create reusable animation utilities:
     a. fadeInUp(element) - fade + slide up
     b. staggerFadeIn(elements, delay=150) - stagger children
     c. countUp(element, targetNum, duration) - animate numbers (KPIs)
     d. slideInFromSide(element, direction='left') - slide animations
   
3. **Intersection Observer Setup** (lib/useInView.ts)
   - Custom hook to trigger animations on scroll
   - Applies to: sections, cards, headings
   - Trigger when element enters viewport

4. **Button Interactions**
   - Hover: translateY(-2px) + shadow grow (200ms)
   - Active: scale(0.98) (click feedback)
   - Disabled: opacity 0.5

5. **Card Interactions**
   - On hover: border color shifts to blue, shadow grows
   - Hover card: slight lift (translateY -4px)
   - Transition: all 300ms ease-out

6. **Link Interactions**
   - On hover: underline grows in (from left to right, 200ms)
   - Text links shift color to blue

7. **Scroll Animations Applied To:**
   - Hero sections: fade + scale in
   - Service cards: stagger-fade (150ms apart)
   - Case study thumbnails: zoom on hover + fade on scroll
   - KPI numbers: count-up animation when scrolled into view
   - Testimonials: fade-in with slight rotation

Test all animations on:
- Desktop (Chrome, Safari, Firefox)
- Mobile (iOS Safari, Android Chrome)
- Performance: ensure 60 FPS with Lighthouse

Export all utilities for reuse across pages.
```

---

## PROMPT 17: Data Structure & Types

```
Create TypeScript types and data structures for PixiGrow Media website.

Create types/index.ts with:

1. **Service Type**
   ```
   type Service = {
     id: string
     title: string
     description: string
     icon: string
     details?: string[]
   }
   ```

2. **CaseStudy Type**
   ```
   type CaseStudy = {
     id: string
     title: string
     client: string
     challenge: string
     approach: string
     results: {
       metric: string
       value: string | number
     }[]
     thumbnail: string
     gallery: string[]
     testimonial?: {
       quote: string
       author: string
       role: string
     }
   }
   ```

3. **TeamMember Type**
   ```
   type TeamMember = {
     id: string
     name: string
     role: string
     image: string
     bio?: string
   }
   ```

4. **ContactFormData Type**
   ```
   type ContactFormData = {
     name: string
     email: string
     company?: string
     service: 'strategy' | 'content' | 'pr' | 'influencer' | 'production' | 'other'
     brief: string
   }
   ```

Create data/services.ts with all 6 services data.
Create data/caseStudies.ts with 2-3 sample case studies (use placeholders for now).
Create data/team.ts with sample team members (placeholders).

Export all types and data for use in components/pages. This enables easy CMS integration later.
```

---

## PROMPT 18: SEO Setup (Metadata, Schema, Sitemap)

```
Setup SEO for PixiGrow Media website.

1. **Dynamic Metadata** (lib/metadata.ts)
   - Create helper function for meta tags
   - Setup default meta tags in root layout
   - Custom titles + descriptions per page:
     - Home: "PixiGrow Media - 360° Brand Agency Rajkot | Strategy, Celebs, PR & IPs"
     - Services: "Our Services - Strategy, Content, PR, Production | PixiGrow Media"
     - Work: "Recent Work & Case Studies | PixiGrow Media"
     - About: "About PixiGrow Media - Rajkot Brand Agency"
     - Contact: "Contact PixiGrow Media - Get in Touch"

2. **Open Graph (OG) Tags**
   - og:title, og:description, og:image (use logo)
   - og:type: website
   - og:url per page

3. **Twitter Card Tags**
   - twitter:card: summary_large_image
   - twitter:title, description, image

4. **Schema.org Markup** (lib/schema.ts)
   - LocalBusiness schema (home page):
     {
       "@type": "LocalBusiness",
       "name": "PixiGrow Media",
       "location": { "city": "Rajkot", "state": "Gujarat" },
       "telephone": "contact@pixigrowmedia.com",
       "url": "pixigrowmedia.com"
     }
   
   - Organization schema:
     {
       "@type": "Organization",
       "name": "PixiGrow Media",
       "logo": "...",
       "sameAs": ["instagram.com/pixigrowmedia"]
     }

5. **Sitemap.xml** (public/sitemap.xml)
   - Generate dynamically or static:
     - / (home)
     - /services
     - /services/[each service]
     - /work
     - /work/[each case study]
     - /about
     - /contact
     - /careers (if applicable)

6. **robots.txt** (public/robots.txt)
   ```
   User-agent: *
   Allow: /
   Sitemap: https://pixigrowmedia.com/sitemap.xml
   ```

7. **Canonical URLs**
   - Add canonical meta tag to all pages
   - Format: https://pixigrowmedia.com[pathname]

Test with Google Search Console + Lighthouse SEO audit.
```

---

## PROMPT 19: Image Optimization & Performance

```
Optimize images and performance for PixiGrow Media website.

1. **Image Optimization**
   - Use Next.js Image component for all images
   - Add responsive sizes:
     ```
     <Image 
       src={...}
       alt="..."
       width={1200}
       height={800}
       sizes="(max-width: 768px) 100vw, 50vw"
       priority={false}
     />
     ```
   - Lazy load: default (true)
   - Placeholder blur: add via blurDataURL

2. **Image Formats**
   - Use WebP format with fallback
   - Resize images for different breakpoints:
     - Desktop: 1200px
     - Tablet: 768px
     - Mobile: 480px

3. **Bundle Optimization**
   - Tree-shake unused GSAP features
   - Dynamic imports for heavy components
   - Code splitting via Next.js automatic splitting

4. **Lighthouse Targets**
   - Performance: > 90
   - Accessibility: > 95
   - Best Practices: > 90
   - SEO: > 95

5. **Core Web Vitals**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

6. **CSS Optimization**
   - Purge unused Tailwind classes (automatic)
   - Minimize font files (use system fonts or Geist font)
   - Lazy load non-critical CSS

Test with PageSpeed Insights. Optimize until all metrics are green.
```

---

## PROMPT 20: Instagram Feed Integration (Phase 1)

```
Integrate Instagram feed display on PixiGrow Media homepage.

For Phase 1 (MVP):
1. Create placeholder Instagram grid (9 squares, 3×3)
2. Each square: gradient background (alternate blue-to-lime colors)
3. Grid at 200px × 200px per item
4. Wrapped in Section component, centered

For Production (Phase 2):
1. Use Instagram Basic Display API:
   - Setup: https://developers.instagram.com/docs/instagram-basic-display-api/
   - Requires: access token, app setup
   - Fetch latest 9 posts via API
   
2. Alternative (simpler):
   - Use Behold.so widget (embeddable, no API needed)
   - Embed code in component

3. Display:
   - Show post image thumbnail
   - Click → opens Instagram post / profile in new tab
   - "Follow us" CTA link below

For now, leave placeholder visible. Add note "Instagram feed integration Phase 2" in comments.
```

---

## PROMPT 21: Form Submission Setup (Email Integration)

```
Setup contact form submission to email for PixiGrow Media.

1. **Email Service Choice:** Resend (recommended for Next.js)
   - Install: npm install resend
   - Setup API key in .env.local
   - RESEND_API_KEY=<key>

2. **API Route** (app/api/contact/route.ts)
   - POST endpoint to handle form submission
   - Validate incoming data (name, email, service, brief required)
   - Send email to: contact@pixigrowmedia.com
   - Email template: professional, includes all form data
   - Send confirmation email to user
   - Return success/error response

3. **Email Template** (lib/emailTemplate.ts)
   - Subject: "[PixiGrow] New Inquiry from {name}"
   - Body:
     ```
     Name: {name}
     Email: {email}
     Company: {company}
     Service Interested In: {service}
     Message:
     {brief}
     ```

4. **Form Component Handling**
   - On submit: validate locally first (zod schema)
   - Show loading state (button text: "Sending...")
   - On success: show "Thanks! We'll be in touch soon" (green, fade-in)
   - On error: show error message (red, "Something went wrong. Please try again.")
   - Reset form after 2 seconds

5. **Environment Variables**
   - Add RESEND_API_KEY to .env.local
   - Add NEXT_PUBLIC_FORM_EMAIL (optional)

6. **Error Handling**
   - Try-catch in API route
   - Log errors for debugging
   - Return clear error messages to frontend

Test form submission end-to-end locally + production.
```

---

## PROMPT 22: Final Checks & Deployment Preparation

```
Final QA and deployment prep for PixiGrow Media website.

1. **Cross-Browser Testing**
   - Chrome (desktop + mobile)
   - Safari (desktop + iOS)
   - Firefox (desktop)
   - Edge (desktop)
   - Test all pages and interactions

2. **Device Testing**
   - Desktop (1920px, 1440px, 1024px)
   - Tablet (768px, iPad)
   - Mobile (480px, 375px, 320px)
   - Test scroll, touch interactions, forms

3. **Functionality Checklist**
   - All links navigate correctly
   - Forms submit and send emails
   - Images load without errors
   - Animations play smoothly (60 FPS)
   - Lenis smooth scroll works
   - Mobile menu opens/closes
   - CTA buttons work
   - External links (IG, LinkedIn) open in new tabs

4. **Accessibility Audit**
   - Keyboard navigation (Tab through all interactive elements)
   - Screen reader testing (VoiceOver on Mac)
   - Color contrast (WCAG AA minimum)
   - Alt text on all images
   - ARIA labels on buttons
   - Lighthouse accessibility score > 95

5. **Performance Audit**
   - Run Lighthouse on each page
   - Core Web Vitals all green
   - Bundle size < 200KB (JS)
   - Lighthouse scores: all > 90

6. **SEO Verification**
   - Meta tags present on all pages
   - Schema markup renders (Google Schema Testing Tool)
   - Sitemap.xml accessible
   - robots.txt in place
   - Google Search Console ready to connect

7. **Pre-Deployment Checklist**
   - [ ] All environment variables set in Vercel
   - [ ] Domain configured (DNS points to Vercel)
   - [ ] Email forwarding setup (contact@pixigrowmedia.com)
   - [ ] Google Analytics snippet added (if needed)
   - [ ] SSL certificate auto-generated (Vercel default)
   - [ ] Backups of all content files taken

8. **Go Live**
   - Deploy to Vercel
   - Test all pages on live domain
   - Monitor for errors (Sentry optional)
   - Send launch email to PixiGrow team

Final sign-off before handing over to client.
```

---

## Summary: Build Order

1. **PROMPT 1** → Project setup
2. **PROMPT 2** → Reusable components
3. **PROMPT 3–8** → Homepage (all sections)
4. **PROMPT 9–12** → Services + Work pages
5. **PROMPT 13–14** → About + Contact pages
6. **PROMPT 15** → Navigation + Layout
7. **PROMPT 16** → Animations setup
8. **PROMPT 17** → Data types
9. **PROMPT 18–19** → SEO + Performance
10. **PROMPT 20–21** → Integrations
11. **PROMPT 22** → Final QA + Deploy

**Estimated Timeline:** 3–4 weeks (full-time development)

Each prompt is standalone and sequential. Follow them step by step in OpenCode.

---

**Good luck with the build! 🚀**