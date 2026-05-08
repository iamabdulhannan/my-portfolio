export const personalInfo = {
  name: "Abdul Hannan",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack & AI Systems",
  email: "iamabdalhannan@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdul-hannan-eng/",
  github: "https://github.com/iamabdulhannan",
  location: "Remote — Building for UK & US startups",
  bio: "I design, build, and ship complex systems in fast-paced startup environments — from AI-driven enterprise platforms to fintech dashboards and Adobe creative tools.",
  resumeUrl: "/Abdul_Hannan_Resume_professional.pdf",
  roles: [
    "Senior Full-Stack Engineer.",
    "AI Systems Builder.",
    "SaaS Architect.",
    "React & TypeScript Expert.",
    "Adobe Extension Engineer.",
  ],
};

export type ProjectCategory =
  | "enterprise"
  | "saas"
  | "fintech"
  | "creative"
  | "ai";

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudySection {
  title: string;
  body: string;
}

export interface CaseStudy {
  problem: string;
  approach: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
  role: string;
  team: string;
  duration: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
  color: string;
  gradient: string;
  banner: string;
  link?: string;
  category: ProjectCategory;
  year: string;
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: "lifecycle-plm",
    title: "Lifecycle PLM",
    tagline: "Enterprise Product Lifecycle Management",
    description:
      "An AI-driven SaaS platform helping fashion brands move from concept to production — trusted by teams managing millions in product lines.",
    longDescription:
      "A comprehensive PLM solution with 50+ backend modules and 44+ frontend feature modules, purpose-built for the fashion & manufacturing industry. Features AI-powered design assistance, real-time collaboration, 3D visualization, and end-to-end workflow orchestration.",
    tech: [
      "React 18",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Three.js",
      "OpenAI",
      "Docker",
      "Vite",
      "Chakra UI",
    ],
    highlights: [
      "AI Studio with OpenAI + Runware + Replicate for generative design",
      "Real-time collaboration via Socket.io across distributed teams",
      "3D product visualization using Three.js & React Three Fiber",
      "Workflow orchestration for approvals, sampling & production",
      "Techpack engine with PDF export and manufacturer sharing",
      "50+ backend modules, 44+ frontend feature modules",
      "Shopify, Gmail, Paddle Payments & Mapbox integrations",
    ],
    color: "#58A6FF",
    gradient: "from-blue-500 via-cyan-400 to-sky-300",
    banner: "/images/projects/lifecycle-plm.jpg",
    link: "https://www.lifecycleplm.com/",
    category: "enterprise",
    year: "2024",
    caseStudy: {
      role: "Senior Full-Stack Engineer · Founding team",
      team: "8 engineers · 2 designers",
      duration: "Jan 2024 — Present",
      problem:
        "Fashion brands lose weeks per product cycle juggling techpacks across email, spreadsheets, and Adobe files — every hand-off introduces version drift, costing real money in mis-manufactured samples.",
      approach:
        "We built a workflow-first PLM where every artifact (techpack, color, BOM, sample, approval) is a versioned object with realtime collaboration baked in, plus an AI Studio that turns prompts and references into production-ready visuals.",
      outcome:
        "Brands managing millions in production now run their full concept → manufacturer hand-off inside a single tool. Designers stop emailing PDFs; manufacturers get exactly what was approved, no ambiguity.",
      metrics: [
        { label: "Backend modules", value: "50+" },
        { label: "Frontend modules", value: "44+" },
        { label: "Adobe apps integrated", value: "9" },
        { label: "Realtime users / room", value: "30+" },
      ],
      sections: [
        {
          title: "AI Studio",
          body: "Composed OpenAI, Runware, and Replicate behind a unified prompt interface. Engineered queue + retry semantics so a single failed model never blocks a generation; designers see partial results streamed in.",
        },
        {
          title: "Realtime collaboration",
          body: "Socket.io rooms with Redis pub/sub keep techpack edits, comments, and approvals in sync across distributed teams. Optimistic updates with conflict reconciliation prevent the 'whose copy is canonical' problem.",
        },
        {
          title: "Workflow engine",
          body: "Built a workflow orchestration layer that drives sampling, approvals, and production stages. State machines are declarative; every transition is auditable; every step can branch on AI signals.",
        },
        {
          title: "Techpack & 3D",
          body: "Three.js + React Three Fiber for 3D product views and PDF rendering pipeline that exports manufacturer-ready specs. Shopify, Gmail, Paddle, and Mapbox integrations close the operational loop.",
        },
      ],
    },
  },
  {
    id: "lifecycle-adobe",
    title: "Lifecycle Adobe Extension",
    tagline: "Bridging Design & Development",
    description:
      "A custom Adobe Illustrator CEP extension that brings product lifecycle management directly into the designer's workflow — no context switching.",
    longDescription:
      "A native Adobe panel connecting directly to the Lifecycle PLM platform, letting designers manage products, collections, and assets without leaving their creative environment. Supports 9+ Adobe apps with a dual-runtime architecture bridging modern React with legacy ExtendScript.",
    tech: [
      "React 18",
      "TypeScript",
      "Material UI",
      "Apollo Client",
      "GraphQL",
      "CEP Framework",
      "ExtendScript",
      "Vite",
      "AWS S3",
    ],
    highlights: [
      "Production-grade CEP panel for Adobe Illustrator v25–30",
      "Multi-app architecture supporting 9+ Adobe applications",
      "Smart bounding-box algorithm for annotation trimming",
      "Dual runtime: React browser context + ExtendScript Adobe runtime",
      "Automated ZXP signing and release via GitHub Actions",
      "Presigned URL uploads to AWS S3/CloudFront",
    ],
    color: "#FF6B35",
    gradient: "from-orange-500 via-red-400 to-rose-400",
    banner: "/images/projects/lifecycle-adobe.svg",
    link: "https://exchange.adobe.com/apps/cc/search?q=lifecycle%20plm",
    category: "creative",
    year: "2024",
    caseStudy: {
      role: "Lead Engineer · Adobe extension",
      team: "Solo IC",
      duration: "Mid 2024 — Present",
      problem:
        "Designers using Lifecycle PLM had to constantly switch between Illustrator and the web app to push artwork into techpacks. Every context switch slowed approvals and created chances to push the wrong file.",
      approach:
        "Built a native Adobe panel using the CEP framework with a dual runtime: a modern React app in the browser context for UI, and ExtendScript handlers for Adobe document IO. They communicate via a typed RPC bridge.",
      outcome:
        "Designers select artwork in Illustrator, review trim with our smart bounding-box algorithm, and push directly into the Lifecycle PLM techpack — never leaving Adobe. Same panel ships to 9+ Adobe apps from one codebase.",
      metrics: [
        { label: "Adobe apps supported", value: "9+" },
        { label: "Illustrator versions", value: "25–30" },
        { label: "Avg push time", value: "< 4s" },
        { label: "Released via", value: "Adobe Exchange" },
      ],
      sections: [
        {
          title: "Dual runtime architecture",
          body: "React + Apollo Client in the browser context for the UI, ExtendScript in Adobe's runtime for document operations. A typed message bridge keeps the two halves honest at the type boundary.",
        },
        {
          title: "Smart bounding-box trim",
          body: "Built an annotation-aware bounding-box algorithm that ignores artboard guides and crop marks, so the pushed artwork matches what the designer actually drew — not the artboard chrome.",
        },
        {
          title: "Multi-app from one codebase",
          body: "Architected a host-adapter pattern so the same React UI works in Illustrator, Photoshop, InDesign, and 6 more — with host-specific ExtendScript modules loaded at runtime.",
        },
        {
          title: "ZXP signing & CI/CD",
          body: "Automated certificate-signed ZXP packaging, versioning, and release to Adobe Exchange via GitHub Actions. Presigned-URL uploads stream assets straight to S3/CloudFront.",
        },
      ],
    },
  },
  {
    id: "apex",
    title: "Apex DMS",
    tagline: "Enterprise Document Management",
    description:
      "A multi-workspace document management system with role-based access, PDF generation, rich text editing, and multi-format import/export.",
    longDescription:
      "An enterprise document management system featuring hierarchical document structure (documents → chapters → sections), multi-tenancy with workspace isolation, and comprehensive import/export capabilities. Built with a decoupled frontend/backend architecture and CI/CD pipelines.",
    tech: [
      "React 18",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "Redux Toolkit",
      "Material UI",
      "Celery",
      "RabbitMQ",
      "TinyMCE",
    ],
    highlights: [
      "Multi-tenant architecture with workspace isolation",
      "Hierarchical document structure with drag-and-drop",
      "PDF generation from templates with Puppeteer",
      "Role-based permissions and user management",
      "Multi-format import/export (CSV, Excel, JSON, YAML)",
      "Background job processing with Celery & RabbitMQ",
    ],
    color: "#10B981",
    gradient: "from-emerald-500 via-teal-400 to-green-300",
    banner: "/images/projects/apex.svg",
    link: "https://dev.mt-emea-dmt.apexdigital.online/",
    category: "enterprise",
    year: "2023",
    caseStudy: {
      role: "Senior Frontend Engineer",
      team: "5 engineers",
      duration: "2023 — 2024",
      problem:
        "A regulated enterprise needed a single source of truth for SOPs, quality manuals, and audit reports — with strict workspace isolation, role-based access, and the ability to import/export across half a dozen formats.",
      approach:
        "Decoupled React + Django architecture with Celery/RabbitMQ for background work. Hierarchical document tree (document → chapter → section) with drag-and-drop reordering and template-driven PDF generation via Puppeteer.",
      outcome:
        "Compliance teams now author, review, and export polished documents from one workspace. Audit cycles shortened, formatting drift eliminated, permissions enforced at every layer.",
      metrics: [
        { label: "Workspaces isolated", value: "Multi-tenant" },
        { label: "Import / export", value: "5 formats" },
        { label: "PDF engine", value: "Puppeteer" },
        { label: "Background queue", value: "Celery" },
      ],
      sections: [
        {
          title: "Multi-tenant isolation",
          body: "Workspace boundaries enforced at the data layer, the API layer, and the UI layer. Every query carries a workspace claim; cross-workspace leakage is impossible by construction, not by convention.",
        },
        {
          title: "Hierarchical content tree",
          body: "Documents nest into chapters and sections with drag-and-drop reordering. Optimistic UI with server reconciliation keeps the tree responsive even on documents with hundreds of sections.",
        },
        {
          title: "Template-driven PDFs",
          body: "Puppeteer-rendered PDFs from React templates so what the editor sees is what the export becomes. Async-rendered through Celery so big documents don't block the request thread.",
        },
        {
          title: "Multi-format I/O",
          body: "CSV, Excel, JSON, and YAML import/export with schema validation. Background workers absorb large files; users get progress updates via SSE.",
        },
      ],
    },
  },
  {
    id: "capiwise",
    title: "Capiwise",
    tagline: "Fintech Market Intelligence",
    description:
      "A modern fintech platform providing real-time market insights, portfolio tracking, and interactive financial dashboards.",
    longDescription:
      "Built reusable dashboard and chart components for real-time market data visualization. Integrated REST APIs for live portfolio tracking with performance-optimized rendering using memoization, lazy loading, and clean component architecture.",
    tech: ["React.js", "TypeScript", "REST APIs", "Chart.js", "Tailwind CSS"],
    highlights: [
      "Real-time market data dashboards with interactive charts",
      "Portfolio tracking with live price updates",
      "Performance-optimized with memoization & lazy loading",
      "Fully responsive across mobile, tablet, and desktop",
    ],
    color: "#F59E0B",
    gradient: "from-amber-500 via-yellow-400 to-orange-300",
    banner: "/images/projects/capiwise.svg",
    link: "https://capiwise.com/",
    category: "fintech",
    year: "2023",
    caseStudy: {
      role: "Frontend Engineer",
      team: "3 engineers · 1 designer",
      duration: "2023",
      problem:
        "Retail investors juggle five tabs to read a single position. We needed one dashboard that pulls portfolio, market, and macro signals into a clean, responsive view that updates live without janking the chart.",
      approach:
        "Reusable chart and table primitives layered over a typed data layer. Aggressive memoization, lazy-loaded routes, and selective subscriptions so a price tick doesn't re-render unrelated cards.",
      outcome:
        "A fast, mobile-first market intelligence dashboard. Charts feel native; portfolio totals breathe in real time without the scroll-jitter you get with naive React updates.",
      metrics: [
        { label: "Dashboard re-render", value: "< 16ms" },
        { label: "Tick-to-paint", value: "Sub-second" },
        { label: "Breakpoints supported", value: "4" },
        { label: "Reusable components", value: "30+" },
      ],
      sections: [
        {
          title: "Realtime data layer",
          body: "Selector-based subscriptions so a tick on a single ticker doesn't cascade across the page. Each card subscribes only to the slice it cares about.",
        },
        {
          title: "Chart primitives",
          body: "Built reusable chart components on top of Chart.js with consistent ranges, accessible legends, and tabular figures so prices don't reflow as digits change.",
        },
        {
          title: "Performance budget",
          body: "Lazy-loaded routes keep initial JS small. Aggressive React.memo, useMemo, and split contexts mean even a busy market view stays at 60fps.",
        },
        {
          title: "Responsive feel",
          body: "Mobile-first layouts that collapse the multi-column desktop view into a vertically scannable card stack — same data, never truncated, no horizontal scroll.",
        },
      ],
    },
  },
  {
    id: "outfts",
    title: "Outfts",
    tagline: "Social Commerce for Fashion",
    description:
      "A social commerce platform connecting global fashion brands and retailers with server-side rendering and Stripe payments.",
    longDescription:
      "Built scalable SaaS features for a social commerce platform working with global fashion brands. Implemented SSR for SEO optimization, integrated Stripe for secure payments, and developed unit-tested, production-ready frontend modules.",
    tech: [
      "Next.js",
      "TypeScript",
      "Apollo GraphQL",
      "Stripe",
      "SSR",
      "Jest",
    ],
    highlights: [
      "SSR-optimized for SEO and fast load times",
      "Stripe integration for secure payment processing",
      "Apollo GraphQL for efficient data fetching",
      "Unit-tested, production-ready frontend modules",
    ],
    color: "#0a0a0a",
    gradient: "from-zinc-100 via-zinc-200 to-zinc-300",
    banner: "/images/projects/outfts.svg",
    link: "https://www.outfts.com",
    category: "saas",
    year: "2023",
    caseStudy: {
      role: "Frontend Engineer",
      team: "4 engineers",
      duration: "2023",
      problem:
        "A social commerce platform needed an SEO-first storefront experience for global fashion brands — fast first paint, bullet-proof Stripe checkout, and unit-tested feature modules that other teams could reuse.",
      approach:
        "Next.js SSR for marketing and product pages, Apollo GraphQL for typed data fetching, Stripe Elements for PCI-safe checkout, and Jest test suites that pin core flows.",
      outcome:
        "A storefront that ranks, loads fast everywhere in the world, and accepts payments without bouncing customers through redirects. Production modules other teams now reuse.",
      metrics: [
        { label: "Render strategy", value: "SSR" },
        { label: "Payments", value: "Stripe" },
        { label: "Data layer", value: "Apollo" },
        { label: "Test coverage", value: "Critical paths" },
      ],
      sections: [
        {
          title: "SSR + SEO",
          body: "Server-rendered product and marketing pages with structured data, OG tags, and sitemaps. Crawlers see the full content; users see fast first paint.",
        },
        {
          title: "Stripe checkout",
          body: "Stripe Elements integrated with strong server-side verification. PCI scope minimized, idempotency keys on every payment intent, full webhook reconciliation.",
        },
        {
          title: "Reusable modules",
          body: "Designed feature modules — cart, address, payment, order summary — as composable, unit-tested units other teams could drop into their own surfaces.",
        },
        {
          title: "GraphQL hygiene",
          body: "Apollo client with typed operations, fragment co-location, and persisted queries. Loading and error states are first-class, not afterthoughts.",
        },
      ],
    },
  },
  {
    id: "bonus9ja",
    title: "Bonus9ja",
    tagline: "Sports & Betting Engagement",
    description:
      "A high-traffic sports engagement platform with live odds, dynamic content, and conversion-focused funnels for the Nigerian market.",
    longDescription:
      "Engineered performance-critical pages and conversion funnels for a high-traffic betting and sports engagement platform. Implemented real-time data feeds, geo-aware content, and SEO-optimized server rendering for sub-second time-to-content.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "SSR", "SEO"],
    highlights: [
      "Conversion-focused landing pages with A/B-testable variants",
      "Real-time odds updates with optimized re-render strategy",
      "Geo-aware content delivery for the Nigerian audience",
      "Sub-second time-to-content via aggressive SSR + caching",
    ],
    color: "#22C55E",
    gradient: "from-green-500 via-emerald-400 to-lime-300",
    banner: "/images/projects/bonus9ja.jpg",
    link: "https://www.bonus9ja.com/",
    category: "saas",
    year: "2024",
    caseStudy: {
      role: "Frontend Engineer",
      team: "4 engineers · growth team",
      duration: "2024",
      problem:
        "A high-traffic engagement platform was bleeding conversions on slow landing pages and inconsistent odds updates. Each second of paint cost real signups in a price-sensitive market.",
      approach:
        "Aggressive SSR + edge caching for marketing surfaces, selective hydration for the live-odds widgets, and structured A/B-testable landing variants. Geo-aware content keyed on edge location.",
      outcome:
        "Sub-second time-to-content on entry pages, smooth live-odds updates, and a landing system the growth team can iterate on without backend changes.",
      metrics: [
        { label: "Time-to-content", value: "< 1s" },
        { label: "Hydration strategy", value: "Selective" },
        { label: "Variants supported", value: "A/B-able" },
        { label: "Caching", value: "Edge + SSR" },
      ],
      sections: [
        {
          title: "Sub-second TTFB",
          body: "Cached SSR at the edge for non-personalized content, with stale-while-revalidate so even a cold region serves something fast while it warms.",
        },
        {
          title: "Live odds widgets",
          body: "Dedicated WebSocket-backed components hydrate independently of the marketing shell. A tick updates only the bar that needs to move.",
        },
        {
          title: "Conversion funnels",
          body: "Structured landing variants the growth team owns — copy, hero image, CTA, and proof points are all data-driven so a new variant ships without a deploy.",
        },
        {
          title: "Geo awareness",
          body: "Edge-detected geography drives copy, currency, and offers. The Nigerian audience sees a Nigerian product, not a translated one.",
        },
      ],
    },
  },
  {
    id: "vsignal",
    title: "vSignal",
    tagline: "Crypto Macro Intelligence",
    description:
      "A market intelligence platform distilling macro trends, sentiment, and live market data into clear, actionable signals for crypto traders.",
    longDescription:
      "Built core surfaces for vSignal — a quant-driven crypto macro tool that turns volatile market noise into directional insight. Designed reusable signal cards, real-time data widgets, and an editorial home with a strong visual identity around the radar/wave motif.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "SSR",
      "SEO",
    ],
    highlights: [
      "Editorial home with radar-wave hero and quant-insight branding",
      "Reusable signal cards for macro, sentiment, and on-chain data",
      "SEO-tuned SSR content surfaces for organic discovery",
      "Responsive layouts across mobile, tablet, and desktop",
      "Backed by Quant Insight macro intelligence",
    ],
    color: "#3B5BFF",
    gradient: "from-blue-600 via-indigo-500 to-violet-400",
    banner: "/images/projects/vsignal.png",
    link: "https://vsignal.ai/",
    category: "fintech",
    year: "2025",
    caseStudy: {
      role: "Frontend Engineer",
      team: "4 engineers · macro analyst",
      duration: "2025",
      problem:
        "Crypto traders drown in noise — orderflow, sentiment, on-chain, macro all live in different tabs. vSignal needed a single, editorial-grade surface that translates that noise into directional, time-stamped signals.",
      approach:
        "Next.js with SSR for the marketing surface, a typed data layer for live signal feeds, and a reusable card system so the analyst team can publish new signal types without engineering.",
      outcome:
        "A focused crypto-macro product with a recognizable visual identity (radar pulse, quant-insight motif) and a content surface ranking for niche macro queries — used daily by retail and pro traders.",
      metrics: [
        { label: "Render strategy", value: "SSR" },
        { label: "Signal types", value: "Macro · Sentiment · On-chain" },
        { label: "Powered by", value: "Quant Insight" },
        { label: "Audience", value: "Retail + Pro" },
      ],
      sections: [
        {
          title: "Editorial home",
          body: "Radar-pulse hero, large editorial type, and a clean signal-card grid below. The brand reads as a quant tool, not another exchange dashboard.",
        },
        {
          title: "Signal cards",
          body: "Reusable card primitives with consistent metric formatting (tabular figures), timestamps, and a single accent per signal class — easy for analysts to extend without engineering.",
        },
        {
          title: "Macro data layer",
          body: "Typed feeds for macro, sentiment, and on-chain inputs. Each card subscribes only to the slice it needs so a new signal doesn't ripple updates across the page.",
        },
        {
          title: "SEO + SSR",
          body: "Server-rendered for crawlability with structured metadata for every signal post. Niche macro queries surface vSignal content directly.",
        },
      ],
    },
  },
  {
    id: "revops",
    title: "RevOps AI",
    tagline: "AI-Powered Revenue Operations",
    description:
      "An AI-driven RevOps assistant that turns scattered sales data into pipeline insight, forecast, and next-best-action workflows.",
    longDescription:
      "Designed and shipped an AI-powered revenue operations product. Built the entire frontend, integrated LLM workflows for pipeline analysis and forecasting, and connected to CRM data sources with streamed responses and tool-use agents.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI",
      "Vercel AI SDK",
      "shadcn/ui",
    ],
    highlights: [
      "LLM-driven pipeline analysis with streamed answers",
      "Tool-use agents for CRM lookups and actions",
      "Forecasting & next-best-action recommendations",
      "Modern shadcn/ui design system, fully accessible",
    ],
    color: "#8B5CF6",
    gradient: "from-violet-500 via-purple-400 to-fuchsia-400",
    banner: "/images/projects/revops.jpg",
    link: "https://revops-ai-five.vercel.app/",
    category: "ai",
    year: "2025",
    caseStudy: {
      role: "Founding Frontend & AI Engineer",
      team: "Founder + me",
      duration: "2025",
      problem:
        "Revenue ops teams spend hours stitching pipeline data across CRM, billing, and support to answer questions a CEO asks in a meeting. We wanted an AI 'CRO' that answers them in 30 seconds — with receipts.",
      approach:
        "Vercel AI SDK with streamed tool-use agents over a clean shadcn/ui surface. LLM plans the steps; the toolchain pulls real data from connected sources; the answer cites every number it shows.",
      outcome:
        "A working AI revenue assistant: ask 'what's at risk this quarter?' and get a sourced answer in seconds — including the deals, the reasons, and the next-best-action queue.",
      metrics: [
        { label: "Forecast accuracy", value: "85%+" },
        { label: "Setup time", value: "< 10 min" },
        { label: "Net revenue retention", value: "140%+" },
        { label: "Recovered revenue", value: "20–30%" },
      ],
      sections: [
        {
          title: "Streamed tool-use agents",
          body: "LLM plans a sequence of CRM lookups, then the runtime executes each tool, streams the partial answer to the UI, and reconciles citations as data arrives.",
        },
        {
          title: "Forecasting model",
          body: "Pipeline + historical close data feed a forecasting layer the LLM can interrogate. Forecasts come with explanations: which deals moved the number, by how much.",
        },
        {
          title: "Next-best-action queue",
          body: "Pattern-matches at-risk deals against the historical playbook, then surfaces the next best action a rep can take today — with the deal context inline.",
        },
        {
          title: "Design system",
          body: "Built on shadcn/ui with full keyboard nav, semantic landmarks, and a tight motion language. Felt like a native product on day one.",
        },
      ],
    },
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Lifecycle PLM",
    location: "UK — Remote",
    period: "Jan 2024 — Present",
    current: true,
    description:
      "Leading development of an AI-driven PLM platform for fashion brands.",
    achievements: [
      "Architected workflow-first systems supporting techpacks, approvals & production stages",
      "Built advanced interfaces using React, TypeScript, Chakra UI, React Flow & Three.js",
      "Integrated collaborative canvas tools (Excalidraw) and real-time updates",
      "Designed scalable GraphQL APIs and backend services using NestJS & MongoDB",
    ],
  },
  {
    role: "Software Engineer",
    company: "Orbiqon",
    location: "US — Remote",
    period: "Apr 2023 — Present",
    current: true,
    description:
      "Building and scaling multiple SaaS platforms across fintech, fashion, and document management.",
    achievements: [
      "Built full-stack solutions using React, Next.js, TypeScript, Node.js & Python",
      "Developed enterprise platforms: Apex DMS, Capiwise, Outfts, Bonus9ja, RevOps AI",
      "Improved performance and reliability through architectural optimizations & CI/CD",
      "Collaborated directly with founders and product teams in high-ownership environments",
    ],
  },
];

export interface Skill {
  name: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#ffffff" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Chakra UI", color: "#319795" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Three.js", color: "#ffffff" },
      { name: "React Flow", color: "#FF0072" },
      { name: "Framer Motion", color: "#FF0055" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "NestJS", color: "#E0234E" },
      { name: "Python", color: "#3776AB" },
      { name: "Django", color: "#092E20" },
      { name: "GraphQL", color: "#E10098" },
      { name: "REST APIs", color: "#FF6B35" },
      { name: "Socket.io", color: "#ffffff" },
      { name: "Redis", color: "#DC382D" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", color: "#47A248" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "AWS", color: "#FF9900" },
      { name: "GCP", color: "#4285F4" },
      { name: "Docker", color: "#2496ED" },
      { name: "CI/CD", color: "#2088FF" },
      { name: "Firebase", color: "#FFCA28" },
    ],
  },
];

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Backend Modules", value: "50+" },
  { label: "React Components", value: "500+" },
];
