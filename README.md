# 🚀 Sipu Rana - Portfolio Website

A modern, fully responsive, production-ready personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **11 Sections**: Hero, About, Skills, Experience, Projects, Services, Contact, Footer
- **Framer Motion Animations**: Scroll-triggered, hover, stagger, and entrance animations
- **Glassmorphism UI**: Modern glass-effect cards throughout
- **Dark/Light Mode**: Persistent theme with next-themes
- **Typing Animation**: Dynamic role cycling in hero
- **Custom Cursor**: Animated cursor on desktop
- **Animated Counters**: Number count-up on scroll
- **Project Modal**: Click any project for detailed view
- **Auto-Carousel**: Testimonials with auto-slide
- **Contact Form**: With validation, loading state, and success screen
- **TypeScript**: Fully typed throughout

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Main page assembling all sections
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ThemeProvider.tsx
│   └── sections/        # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ServicesSection.tsx
│       ├── AchievementsSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── BlogSection.tsx
│       ├── ContactSection.tsx
│       └── Footer.tsx
├── data/
│   └── portfolio.ts     # ← Edit your personal info here
├── hooks/
│   ├── useTypingEffect.ts
│   └── useCountUp.ts
└── types/
    └── index.ts
```

## ✏️ Customization

All portfolio content is in `data/portfolio.ts`. Edit:
- `personalInfo` — your name, email, bio, social links
- `skillCategories` — your tech skills and proficiency levels
- `experiences` — your work history
- `projects` — your featured projects
- `services`, `achievements`, `testimonials`, `blogPosts`

## 📦 Deployment

Deploy to Vercel in one click:
1. Push to GitHub
2. Import to [vercel.com](https://vercel.com)
3. Deploy — no configuration needed

## 🎨 Color Palette

| Color | Hex |
|-------|-----|
| Primary Blue | `#2563EB` |
| Secondary Indigo | `#4F46E5` |
| Accent Cyan | `#06B6D4` |
| Dark Background | `#0F172A` |
