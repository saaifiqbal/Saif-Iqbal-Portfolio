<div align="center">

# 🚀 Saif Iqbal — Portfolio

**AI-Forward Full-Stack Engineer**

A modern, animated personal portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion** — showcasing 3+ years of enterprise application development.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-saif--iqbal--portfolio.vercel.app-blue?style=for-the-badge)](https://saif-iqbal-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com/)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| **Interactive Background** | Particle-based animated background that responds to user interaction |
| **Custom Animated Cursor** | Unique cursor effects for an immersive browsing experience |
| **Tilt Cards** | 3D perspective tilt effect on project cards with glare |
| **Magnetic Buttons** | Buttons that magnetically attract toward the cursor on hover |
| **Text Reveal Animations** | Scroll-triggered text reveal effects throughout the site |
| **Dark / Light Theme** | System-aware theme toggle powered by `next-themes` |
| **Framer Motion Animations** | Smooth entrance, scroll, and interaction animations on every section |
| **Working Contact Form** | Server-side email delivery via Resend API |
| **SEO Optimized** | Full Open Graph, Twitter Cards, JSON-LD schema, sitemap, and meta tags |
| **PWA Ready** | Web app manifest for installable experience |
| **Responsive Design** | Fully responsive across mobile, tablet, and desktop viewports |
| **Vercel Analytics** | Production analytics integration for traffic insights |

---

## 🏗️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS 4, CSS Variables |
| **UI Components** | Radix UI Primitives, shadcn/ui, Lucide Icons |
| **Animations** | Framer Motion 12 |
| **Forms** | React Hook Form + Zod validation |
| **Email** | Resend SDK |
| **Fonts** | Inter, Geist Mono (via `next/font`) |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```
Saif-Iqbal-Portfolio/
├── app/
│   ├── api/contact/        # Contact form API route (Resend)
│   │   └── route.ts
│   ├── globals.css          # Global styles & design tokens
│   ├── layout.tsx           # Root layout with SEO metadata & JSON-LD
│   ├── page.tsx             # Home page composing all sections
│   └── sitemap.ts           # Dynamic sitemap generation
├── components/
│   ├── sections/
│   │   ├── hero.tsx         # Hero section with profile & CTAs
│   │   ├── about.tsx        # About me section
│   │   ├── skills.tsx       # Technical skills grid
│   │   ├── experience.tsx   # Work experience timeline
│   │   ├── projects.tsx     # Key projects showcase
│   │   ├── education.tsx    # Education section
│   │   └── contact.tsx      # Contact form with validation
│   ├── ui/                  # shadcn/ui component library
│   ├── animated-cursor.tsx  # Custom animated cursor
│   ├── interactive-background.tsx  # Particle background
│   ├── floating-elements.tsx      # Floating decorative elements
│   ├── magnetic-button.tsx  # Magnetic hover button effect
│   ├── navigation.tsx       # Responsive navigation bar
│   ├── tilt-card.tsx        # 3D tilt card component
│   ├── text-reveal.tsx      # Scroll text reveal animation
│   ├── theme-provider.tsx   # Theme context provider
│   ├── theme-toggle.tsx     # Dark/Light mode toggle
│   └── footer.tsx           # Site footer
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/
│   ├── images/              # Static images (profile, etc.)
│   ├── saif_iqbal_cv.pdf    # Downloadable CV
│   ├── manifest.json        # PWA manifest
│   └── icon.svg             # Favicon
├── styles/                  # Additional style files
├── .env.example             # Environment variable template
├── next.config.mjs          # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/saaifiqbal/Saif-Iqbal-Portfolio.git
cd Saif-Iqbal-Portfolio

# Install dependencies
npm install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Resend API Key for contact form emails
# Get your API key from https://resend.com
RESEND_API_KEY=your_resend_api_key_here
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📬 Contact Form

The portfolio includes a fully functional contact form powered by [Resend](https://resend.com/). When a visitor submits the form:

1. The frontend validates inputs using **React Hook Form** + **Zod**
2. A `POST` request is sent to the `/api/contact` API route
3. The server validates the data and sends a styled HTML email via the **Resend SDK**
4. The sender receives confirmation via toast notifications powered by **Sonner**

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic deployments on push.

**Live URL →** [https://saif-iqbal-portfolio.vercel.app/](https://saif-iqbal-portfolio.vercel.app/)

---

## 📜 Key Sections

- **Hero** — Animated intro with profile image, tech badges, social links, and downloadable CV
- **About** — Personal background and professional summary
- **Skills** — Categorized technical skills (Frontend, Backend, Database, AI/Dev Tools, Styling, Tooling)
- **Experience** — Interactive timeline showcasing roles at Ha-Meem Group and Fort International Ltd
- **Projects** — Enterprise projects including Portal 360, Ha-Meem Career Portal, PTS, and EnterCount ERP
- **Education** — Academic background
- **Contact** — Functional email contact form

---

## 🤝 Connect

- **GitHub:** [github.com/saaifiqbal](https://github.com/saaifiqbal)
- **LinkedIn:** [linkedin.com/in/saif-iqbal-0640a0275](https://linkedin.com/in/saif-iqbal-0640a0275)
- **Email:** [saaifiqbal@gmail.com](mailto:saaifiqbal@gmail.com)
- **Phone:** +880 1992 924645

---

<div align="center">

**Built with ❤️ by Saif Iqbal**

</div>
