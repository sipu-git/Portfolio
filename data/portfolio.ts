// Portfolio Data - Update with your personal information

export const personalInfo = {
  name: "Sipu Rana",
  role: "Software Developer",
  email: "sipurana38@gmail.com",
  phone: "9827505917",
  location: "Bhubaneswar,Odisha",
  bio: "Passionate Software Developer with 1 year of experience building scalable web applications. I love turning complex problems into elegant, user-friendly solutions.",
  summary:
    "I specialize in building end-to-end web applications using modern technologies. From crafting pixel-perfect UIs to designing robust backend architectures, I bring ideas to life with clean, maintainable code.",
  avatar: "/images/avatar.jpg",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/sipu-git",
    linkedin: "https://www.linkedin.com/in/sipu-rana-72b56b242",
    // twitter: "https://twitter.com",
    // instagram: "https://instagram.com",
  },
};

export const typingRoles = [
  "Full Stack Developer",
  "Software Developer",
  "Software Engineer",
  "Problem Solver",
];

export const aboutStats = [
  { label: "Year Experience", value: "1" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "20+" },
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
    school: "Bhannja College Of Computer & Management",
    year: "2020-2023",
    grade: "Percentage: 79%",
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    color: "blue",
    skills: [
      { name: "React.js", level: 95 },
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
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      // { name: "NestJS", level: 78 },
    ],
  },
  {
    category: "Database",
    color: "cyan",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 88 },
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
      // { name: "Nginx", level: 70 },
    ],
  },
  {
    category: "Tools",
    color: "pink",
    skills: [
      { name: "Git", level: 90 },
      { name: "Postman", level: 95 },
      // { name: "Figma", level: 75 },
      { name: "VS Code", level: 98 },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: "Sparkradix Technologies PVT.Ltd",
    position: "Software Developer",
    duration: "Jul 2024 – Present",
    location: "Bhubaneswar,Odisha,India",
    description:
      "Lead development of enterprise-grade web applications serving 500K+ users. Architected microservices infrastructure and mentored junior developers.",
    responsibilities: [
      // "Led a team of 6 engineers to deliver 3 major product releases on schedule",
      "Reduced API response time by 60% through caching and query optimization",
      "Implemented CI/CD pipelines cutting deployment time from hours to minutes",
      // "Designed and built a real-time notification system handling 1M+ events/day",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis"],
    type: "full-time",
  },
  // {
  //   id: 2,
  //   company: "StartupXYZ",
  //   position: "Full Stack Developer",
  //   duration: "Mar 2020 – Dec 2021",
  //   location: "Remote",
  //   description:
  //     "Built and scaled core product features from MVP to 100K users. Worked in fast-paced agile environment with weekly releases.",
  //   responsibilities: [
  //     "Developed the entire frontend from scratch using React and TypeScript",
  //     "Built RESTful APIs and GraphQL endpoints serving mobile and web clients",
  //     "Integrated third-party services: Stripe, Twilio, SendGrid, Google Maps",
  //     "Improved Lighthouse performance score from 45 to 95",
  //   ],
  //   technologies: [
  //     "React",
  //     "TypeScript",
  //     "Express.js",
  //     "MongoDB",
  //     "GraphQL",
  //     "Stripe",
  //   ],
  //   type: "full-time",
  // },
  // {
  //   id: 3,
  //   company: "Freelance",
  //   position: "Full Stack Developer",
  //   duration: "Jun 2019 – Feb 2020",
  //   location: "Remote",
  //   description:
  //     "Delivered custom web solutions for clients across e-commerce, healthcare, and education sectors.",
  //   responsibilities: [
  //     "Built 10+ custom websites and web applications for diverse clients",
  //     "Designed responsive UIs with attention to UX and accessibility",
  //     "Delivered projects on time with 100% client satisfaction rate",
  //   ],
  //   technologies: ["JavaScript", "React", "Node.js", "MySQL", "WordPress"],
  //   type: "freelance",
  // },
];

export const projects = [
  {
    id: 1,
    title: "HRMS Platform",
    description:
      "A comprehensive Human Resource Management System with employee management, payroll, attendance tracking, and performance reviews.",
    longDescription:
      "Full-featured HRMS built for enterprises managing 1000+ employees. Features real-time dashboards, automated payroll processing, leave management, and detailed analytics reports.",
    image: "/images/project1.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
    category: "Full Stack",
    github: "https://github.com/sipu-git",
    // demo: "https://demo.example.com",
    features: [
      "Employee lifecycle management",
      "Automated payroll with tax calculations",
      "Real-time attendance tracking with geofencing",
      "Performance review and goal tracking",
      "Role-based access control",
      "Export reports to PDF/Excel",
    ],
    stats: { stars: 248, forks: 67, issues: 12 },
  },

  {
    id: 2,
    title: "Expenses Tracking System",
    description:
      "Social networking platform for environmental activists and organizations to collaborate, share resources, and coordinate sustainability initiatives.",
    longDescription:
      "A purpose-built social platform connecting 50K+ environmental advocates globally. Features include group collaboration tools, event management, resource sharing, and impact tracking.",
    image: "/images/project2.jpg",
    tags: ["React.js", "TypeScript", "PostgreSQL", "Express.js"],
    category: "Full Stack",
    github: "https://github.com",
    // demo: "https://demo.example.com",
    features: [
      "Real-time messaging and group chats",
      "Event organization and RSVP system",
      "Resource library with search and filters",
      "Impact metrics and sustainability score",
      "Map-based initiative discovery",
    ],
    stats: { stars: 189, forks: 43, issues: 8 },
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with inventory management, payment processing, order tracking, and seller dashboard.",
    longDescription:
      "Production-ready e-commerce platform processing $2M+ in monthly transactions. Built with performance and scalability in mind, supporting thousands of concurrent users.",
    image: "/images/project3.jpg",
    tags: ["React", "Express.js", "MySQL", "Stripe", "Redis"],
    category: "Full Stack",
    github: "https://github.com",
    // demo: "https://demo.example.com",
    features: [
      "Multi-vendor marketplace support",
      "Stripe payment integration with subscriptions",
      "Advanced product search with Elasticsearch",
      "Real-time inventory management",
      "Order tracking with email notifications",
      "Admin analytics dashboard",
    ],
    stats: { stars: 412, forks: 98, issues: 21 },
  },
  {
    id: 4,
    title: "Certificate Authentication System",
    description:
      "Blockchain-based digital certificate issuance and verification platform for educational institutions and professional bodies.",
    longDescription:
      "Tamper-proof certificate system used by 20+ universities. Certificates are stored on-chain with QR code verification, supporting bulk issuance and instant public verification.",
    image: "/images/project4.jpg",
    tags: ["Next.js", "Solidity", "Node.js", "IPFS", "PostgreSQL"],
    category: "Blockchain",
    github: "https://github.com",
    // demo: "https://demo.example.com",
    features: [
      "Blockchain-backed certificate integrity",
      "QR code instant verification",
      "Bulk certificate issuance",
      "IPFS decentralized storage",
      "Public verification portal",
      "Revocation management",
    ],
    stats: { stars: 156, forks: 34, issues: 5 },
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
    features: ["REST APIs", "Authentication", "Monolithics","RBAC","Express.js"],
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
    features: ["Mysql","PostgreSQL","MongoDB","Redis","Schema Design", "Query Optimization", "Migrations", "Backups & Recovery"],
  },
  {
    icon: "Cloud",
    title: "Cloud Deployment",
    description:
      "Deploying and managing applications on AWS with CI/CD pipelines, auto-scaling, and monitoring.",
    features: ["AWS Services", "Docker", "CI/CD Pipelines"],
  },
];

// export const achievements = [
//   { label: "Years of Experience", value: 5, suffix: "+" },
//   { label: "Projects Completed", value: 50, suffix: "+" },
//   { label: "Happy Clients", value: 30, suffix: "+" },
//   { label: "Certifications", value: 8, suffix: "" },
//   { label: "Technologies Mastered", value: 20, suffix: "+" },
// ];

// export const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Mitchell",
//     designation: "CTO, TechVentures Inc.",
//     photo: "/images/testimonial1.jpg",
//     rating: 5,
//     text: "Alex delivered our platform on time and exceeded every expectation. The code quality was exceptional and the performance improvements were immediately noticeable. Highly recommended!",
//   },
//   {
//     id: 2,
//     name: "James Rodriguez",
//     designation: "Founder, GreenApp",
//     photo: "/images/testimonial2.jpg",
//     rating: 5,
//     text: "Working with Alex was a game-changer for our startup. He understood our vision perfectly and translated it into a beautiful, functional product. His technical expertise is top-notch.",
//   },
//   {
//     id: 3,
//     name: "Emily Chen",
//     designation: "Product Manager, DataFlow",
//     photo: "/images/testimonial3.jpg",
//     rating: 5,
//     text: "Alex's ability to solve complex technical challenges while maintaining clean, readable code is impressive. He's proactive, communicates clearly, and always delivers high-quality work.",
//   },
//   {
//     id: 4,
//     name: "Michael Brown",
//     designation: "Lead Developer, CloudSystems",
//     photo: "/images/testimonial4.jpg",
//     rating: 5,
//     text: "I've worked with many developers, but Alex stands out for his attention to detail and commitment to quality. He transformed our legacy system into a modern, scalable application.",
//   },
// ];

// export const blogPosts = [
//   {
//     id: 1,
//     title: "Building Scalable React Applications with Clean Architecture",
//     category: "Frontend",
//     thumbnail: "/images/blog1.jpg",
//     readTime: "8 min read",
//     date: "Dec 15, 2024",
//     excerpt:
//       "A deep dive into structuring large React applications for maintainability, scalability, and developer experience.",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Mastering PostgreSQL Performance: Indexing Strategies",
//     category: "Database",
//     thumbnail: "/images/blog2.jpg",
//     readTime: "12 min read",
//     date: "Nov 28, 2024",
//     excerpt:
//       "Practical guide to understanding and optimizing PostgreSQL queries using proper indexing techniques.",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Docker & Kubernetes: The Complete Developer Guide",
//     category: "DevOps",
//     thumbnail: "/images/blog3.jpg",
//     readTime: "15 min read",
//     date: "Nov 10, 2024",
//     excerpt:
//       "From zero to production: containerizing your applications and orchestrating them at scale with Kubernetes.",
//     link: "#",
//   },
// ];
