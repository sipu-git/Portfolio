export const personalInfo = {
  name: "Sipu Rana",
  role: "Software Developer",
  email: "sipurana38@gmail.com",
  phone: "9827505917",
  location: "Bhubaneswar, Odisha",
  bio: "Software developer with 1 year of experience building scalable web applications. I turn complex product problems into clean, maintainable interfaces and APIs.",
  summary:
    "I specialize in end-to-end web applications: pixel-accurate UIs, typed APIs, relational data models, caching, and cloud-backed storage. Recent work includes a CRM with messaging integrations and an expense platform with receipt storage and Gemini-assisted workflows.",
  avatar: "/images/avatar.jpg",
  resumeUrl: "https://drive.google.com/file/d/1lmhf9mYTx3_2NK4LKkUmYyMiEV3a7Gih/view?usp=drivesdk",
  social: {
    github: "https://github.com/sipu-git",
    linkedin: "https://www.linkedin.com/in/sipu-rana-72b56b242",
  },
  siteUrl: "https://portfolio-3uau.vercel.app",
};

export const typingRoles = [
  "Full Stack Developer",
  "Software Developer",
  "Software Engineer",
  "Problem Solver",
];

export const aboutStats = [
  { label: "Year Experience", value: "1" },
  { label: "Shipped Products", value: "CRM + Expenses" },
  { label: "Core Stack", value: "React · TS · PG" },
];

export const education = [
  {
    degree: "Master Of Computer Applications",
    school: "Gandhi Engineering College",
    year: "2023 – 2025",
    grade: "CGPA: 8.3/10.0",
  },
  {
    degree: "Bachelor Of Computer Applications",
    school: "Bhanja College Of Computer & Management",
    year: "2020-2023",
    grade: "Percentage: 79%",
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    color: "blue",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux/Toolkit", level: 75 },
    ],
  },
  {
    category: "Backend",
    color: "indigo",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "Prisma", level: 82 },
    ],
  },
  {
    category: "Database",
    color: "cyan",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    category: "DevOps",
    color: "purple",
    skills: [
      { name: "Docker", level: 60 },
      { name: "AWS", level: 60 },
      { name: "GitHub Actions", level: 75 },
    ],
  },
  {
    category: "Tools",
    color: "pink",
    skills: [
      { name: "Git", level: 90 },
      { name: "Postman", level: 95 },
      { name: "VS Code", level: 98 },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: "Sparkradix Technologies PVT.Ltd",
    position: "Software Developer",
    duration: "Jul 2025 – Present",
    location: "Bhubaneswar, Odisha, India",
    description:
      "Building production web applications with React, Node.js, PostgreSQL, Redis, and AWS. Focused on API performance, caching, and reliable deployments.",
    responsibilities: [
      "Reduced API response time by 60% through caching and query optimization",
      "Implemented CI/CD pipelines cutting deployment time from hours to minutes",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis"],
    type: "full-time",
  },
];

export const projects = [
  {
    id: 1,
    title: "Clearview CRM",
    description:
      "Lead-to-cash CRM with capture, qualification, a deal kanban, invoicing, and Gmail plus WhatsApp integrations. Built with React, TypeScript, Prisma, PostgreSQL, Redis, and AWS RDS.",
    longDescription:
      "Clearview CRM is a multi-tenant workspace for pipeline, conversations, and invoicing. Inbound leads arrive from website forms, email, manual entry, RFPs, and referrals, are de-duplicated on email, and assigned to a rep. Qualified leads convert to contacts. Deals move through Discovery → Proposal → Negotiation → Won/Lost. Won deals draft invoices and update a customer ledger. Gmail and WhatsApp are messaging integrations, not generative AI. Planned AI work is listed separately from what ships today.",
    tags: ["React", "TypeScript", "Prisma", "PostgreSQL", "Redis", "AWS RDS", "WhatsApp", "Gmail"],
    category: "Full Stack",
    github: "https://github.com/sipu-git/crm-platform",
    demo: "https://crm-platform-weld.vercel.app",
    featured: true,
    preview: "crm" as const,
    features: [
      "Lead capture from forms, email, referrals, RFPs, and manual entry",
      "Email de-duplication and auto/manual assignment to a rep",
      "Lead statuses: New → Contacted → Qualified, then convert to a contact",
      "Deal kanban: Discovery, Proposal, Negotiation, Won / Lost",
      "Invoice draft on win, with sent / paid / overdue states",
      "Gmail integration via Google APIs and WhatsApp messaging hooks",
      "Prisma + PostgreSQL on AWS RDS, with Redis for session and cache",
    ],
    plannedAi: [
      "Lead scoring and suggested next actions",
      "Drafted email/WhatsApp replies from deal context",
    ],
  },
  {
    id: 2,
    title: "ExpenseWallet",
    description:
      "Personal cost management app with React, Express, TypeScript, PostgreSQL, Redis, AWS S3 receipts, and Gemini AI for document understanding.",
    longDescription:
      "ExpenseWallet is a TypeScript expense tracker with a React frontend and an Express API. Expenses persist in PostgreSQL, hot paths are cached in Redis, and receipt files go to AWS S3. Gemini is used for receipt and document parsing. Further Gemini features (category suggestions, spend narratives, anomaly alerts) are planned and labeled separately from parsing that is already wired.",
    tags: ["React", "Express", "TypeScript", "PostgreSQL", "Redis", "AWS S3", "Gemini AI"],
    category: "Full Stack",
    github: "https://github.com/sipu-git/expense-tracker",
    demo: "https://expense-tracker-steel-delta-33.vercel.app",
    featured: true,
    preview: "expense" as const,
    features: [
      "Authenticated expense CRUD with typed Express APIs",
      "PostgreSQL persistence via Prisma, Redis for caching",
      "Receipt uploads stored on AWS S3 with presigned access",
      "Dashboard charts for category and time-range spend",
    ],
    implementedAi: ["Gemini-backed receipt and document parsing"],
    plannedAi: [
      "Automatic category suggestions from parsed receipts",
      "Monthly spend narratives and anomaly alerts from Gemini",
    ],
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Multi-surface storefront and admin with inventory, checkout, and order tracking. Frontend, admin, and API live as separate repositories.",
    longDescription:
      "An e-commerce stack split into storefront, admin, and backend services. It covers catalog browsing, cart and order flows, and an operator dashboard. Stripe, Redis, and MySQL appear in the original product notes; public source is the three sipu-git e-commerce repositories.",
    tags: ["React", "Express.js", "MySQL", "Stripe", "Redis"],
    category: "Full Stack",
    github: "https://github.com/sipu-git/e-commerce-frontend",
    featured: false,
    preview: "commerce" as const,
    features: [
      "Storefront, admin, and API as separate apps",
      "Catalog, cart, and order tracking flows",
      "Operator dashboard for inventory and orders",
    ],
  },
  {
    id: 4,
    title: "HRMS Platform",
    description:
      "Human resource workflows covering employee records, attendance, payroll, and reviews.",
    longDescription:
      "An HRMS focused on employee lifecycle operations: records, attendance, payroll calculations, and review cycles. It is listed as a product I have built; a dedicated public demo is not published yet.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
    category: "Full Stack",
    featured: false,
    preview: "generic" as const,
    features: [
      "Employee lifecycle records",
      "Attendance tracking",
      "Payroll and review workflows",
      "Role-based access",
    ],
  },
];

export const services = [
  {
    icon: "Layers",
    title: "Full Stack Development",
    description:
      "End-to-end web application development from database design to pixel-perfect UIs, built for performance and scale.",
    features: ["React / Next.js", "Node.js / Express", "Database Design", "API Architecture"],
  },
  {
    icon: "Monitor",
    title: "Frontend Development",
    description:
      "Crafting responsive, accessible, and performant user interfaces with modern frameworks and best practices.",
    features: ["React & TypeScript", "Tailwind CSS", "Animations", "Performance Optimization"],
  },
  {
    icon: "Server",
    title: "Backend Development",
    description:
      "Building robust, scalable server-side applications with clean architecture and comprehensive test coverage.",
    features: ["REST APIs", "Authentication", "Monolithics", "RBAC", "Express.js"],
  },
  {
    icon: "Code2",
    title: "API Development",
    description:
      "Designing and building well-documented, versioned APIs that power mobile apps, third-party integrations, and SPAs.",
    features: ["RESTful APIs", "WebSockets", "API Documentation"],
  },
  {
    icon: "Database",
    title: "Database Design",
    description:
      "Schema design, query optimization, and database management for both SQL and NoSQL databases at scale.",
    features: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Schema Design", "Query Optimization"],
  },
  {
    icon: "Cloud",
    title: "Cloud Deployment",
    description:
      "Deploying and managing applications on AWS with CI/CD pipelines, auto-scaling, and monitoring.",
    features: ["AWS Services", "Docker", "CI/CD Pipelines"],
  },
];
