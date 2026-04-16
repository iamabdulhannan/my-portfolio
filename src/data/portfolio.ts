export const personalInfo = {
  name: "Abdul Hannan",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack & AI Systems",
  email: "iamabdalhannan@gmail.com",
  linkedin: "https://www.linkedin.com/in/iamabdalhannan/",
  github: "https://github.com/iamabdulhannan",
  location: "Remote — Building for UK & US startups",
  bio: "I design, build, and ship complex systems in fast-paced startup environments — from AI-driven enterprise platforms to fintech dashboards and Adobe creative tools.",
  resumeUrl: "/Abdul_Hannan_Resume_professional.pdf",
  roles: [
    "Senior Full-Stack Engineer",
    "AI Systems Builder",
    "SaaS Architect",
    "React & TypeScript Expert",
    "Open Source Contributor",
  ],
};

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
  icon: string;
  link?: string;
  category: "enterprise" | "saas" | "fintech" | "creative";
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
    gradient: "from-blue-500 to-cyan-400",
    icon: "🧵",
    link: "https://app.lifecycleplm.com",
    category: "enterprise",
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
    gradient: "from-orange-500 to-red-400",
    icon: "🎨",
    category: "creative",
  },
  {
    id: "baxter",
    title: "Baxter (Tasker)",
    tagline: "Influencer Marketplace Platform",
    description:
      "A full-featured influencer marketplace with portfolio-building, social media integration, drag-and-drop website builder, and e-commerce capabilities.",
    longDescription:
      "An enterprise-grade influencer management platform with 150+ React components. Features social feed aggregation from Twitter, Instagram, TikTok & YouTube, a drag-and-drop website builder with custom domains, built-in e-commerce with Stripe payments, and comprehensive analytics dashboards.",
    tech: [
      "Next.js",
      "React 18",
      "Redux",
      "GraphQL",
      "Apollo Client",
      "Styled Components",
      "Algolia",
      "Stripe",
      "Intercom",
    ],
    highlights: [
      "150+ React components at enterprise scale",
      "Drag-and-drop website builder with custom domains",
      "Social feed aggregation: Twitter, Instagram, TikTok, YouTube",
      "E-commerce with Stripe payments & affiliate tracking",
      "Algolia-powered search across influencer profiles",
      "Real-time analytics dashboards and payout management",
    ],
    color: "#7C3AED",
    gradient: "from-purple-500 to-pink-400",
    icon: "👤",
    category: "saas",
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
    gradient: "from-emerald-500 to-teal-400",
    icon: "📄",
    category: "enterprise",
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
    gradient: "from-amber-500 to-yellow-400",
    icon: "📈",
    category: "fintech",
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
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-400",
    icon: "👕",
    link: "https://outfts.com",
    category: "saas",
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
      "Developed enterprise platforms: Baxter, Apex DMS, Capiwise, Outfts",
      "Improved performance and reliability through architectural optimizations & CI/CD",
      "Collaborated directly with founders and product teams in high-ownership environments",
    ],
  },
];

export interface Skill {
  name: string;
  icon: string;
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
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "Next.js", icon: "▲", color: "#ffffff" },
      { name: "TypeScript", icon: "TS", color: "#3178C6" },
      { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
      { name: "Chakra UI", icon: "⚡", color: "#319795" },
      { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4" },
      { name: "Three.js", icon: "3D", color: "#ffffff" },
      { name: "React Flow", icon: "🔀", color: "#FF0072" },
      { name: "Framer Motion", icon: "🎬", color: "#FF0055" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢", color: "#339933" },
      { name: "NestJS", icon: "🐱", color: "#E0234E" },
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Django", icon: "🎸", color: "#092E20" },
      { name: "GraphQL", icon: "◈", color: "#E10098" },
      { name: "REST APIs", icon: "🔗", color: "#FF6B35" },
      { name: "Socket.io", icon: "🔌", color: "#010101" },
      { name: "Redis", icon: "🔴", color: "#DC382D" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", icon: "🍃", color: "#47A248" },
      { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
      { name: "AWS", icon: "☁️", color: "#FF9900" },
      { name: "GCP", icon: "🌐", color: "#4285F4" },
      { name: "Docker", icon: "🐳", color: "#2496ED" },
      { name: "CI/CD", icon: "🔄", color: "#2088FF" },
      { name: "Firebase", icon: "🔥", color: "#FFCA28" },
    ],
  },
];

export const stats = [
  { label: "Years Experience", value: "4+", icon: "⏱️" },
  { label: "Projects Delivered", value: "10+", icon: "🚀" },
  { label: "Backend Modules", value: "50+", icon: "⚙️" },
  { label: "React Components", value: "500+", icon: "⚛️" },
];
