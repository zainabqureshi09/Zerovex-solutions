# Zerovex Solutions - Premium Digital Agency Website

![Zerovex Solutions](https://zerovexsolutions.site/og-image.svg)

A fully professional, luxury, and international-level website for a software and automation services company built with **Next.js 15**, **Tailwind CSS 4**, **Firebase**, and **Framer Motion**.

## 🌟 Features

### Design & Branding
- **Luxury Color Scheme**: Dark Blue (#0A0E1A) + Black + Gold (#EAB308) accents for premium feel
- **Modern Typography**: Inter + Space Grotesk font combination
- **Light/Dark Mode**: Elegant theme toggle with smooth transitions
- **Premium Animations**: Framer Motion powered scroll animations, hover effects, and page transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Glassmorphism UI**: Modern glass effects with backdrop blur

### Pages Included
1. **Home** - Hero section with animated background, services showcase, featured projects, testimonials, process workflow
2. **Services** - Detailed service offerings with features, technologies, and CTAs
3. **Projects/Portfolio** - Filterable project grid with metrics and results
4. **About** - Company story, values, timeline, technologies, and milestones
5. **Team** - Professional team member profiles with social links
6. **Blog/Knowledge Hub** - SEO-friendly blog layout with categories, featured articles, and newsletter subscription
7. **Contact** - Comprehensive contact form with validation, FAQ, and map integration

### Sections
- ✅ Hero Section with animated tagline: "Automating Your Business. Empowering Your Growth."
- ✅ Services Showcase (6 key services with icons and descriptions)
- ✅ Portfolio/Case Studies with metrics and results
- ✅ Team Page with professional profiles
- ✅ Blog/Knowledge Hub with categories and newsletter signup
- ✅ Contact Form with validation and FAQ section
- ✅ Client logos and trust indicators
- ✅ Testimonials with star ratings
- ✅ Process workflow visualization
- ✅ Call-to-action sections throughout

### Technical Features
- **Next.js 15** with App Router for optimal performance
- **Tailwind CSS 4** with custom design tokens
- **Framer Motion** for smooth animations and transitions
- **Firebase Integration** ready for backend services
- **SEO Optimized** with meta tags, Open Graph, and Schema.org markup
- **TypeScript** for type safety
- **International SEO** with proper hreflang and metadata
- **Google Analytics** ready integration
- **AdSense Ready** with placeholder ad placements
- **Fast Loading** optimized assets and code splitting

## 🚀 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Backend Ready | Firebase (Auth, Firestore, Storage) |
| Language | TypeScript |
| Fonts | Inter, Space Grotesk |

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd zerovex
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example env file
cp .env.example .env.local

# Update with your Firebase credentials
# Get these from: https://console.firebase.google.com/
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Project Structure

```
zerovex/
├── public/                      # Static assets
│   ├── favicon.svg             # SVG favicon
│   ├── og-image.svg            # Open Graph image
│   └── robots.txt              # SEO robots file
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog/Knowledge Hub
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Portfolio page
│   │   ├── services/          # Services page
│   │   ├── team/              # Team page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles & design tokens
│   ├── components/            # React components
│   │   ├── animations/        # Animation components
│   │   │   └── FadeIn.tsx
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Footer.tsx         # Footer
│   │   └── StructuredData.tsx # SEO schema
│   ├── context/               # React context
│   │   └── ThemeContext.tsx   # Light/Dark mode
│   └── lib/                   # Utilities
│       └── firebase.ts        # Firebase config
├── .env.example               # Environment variables template
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
└── package.json               # Dependencies
```

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Dark Blue | `#0A0E1A` | Primary background |
| Navy | `#111827` | Secondary background |
| Blue | `#2563EB` | Primary accent |
| Gold | `#EAB308` | Luxury accent |
| Gold Light | `#FACC15` | Highlights |
| White | `#F8FAFC` | Text (dark mode) |

### Typography
- **Headings**: Space Grotesk (bold, tight tracking)
- **Body**: Inter (clean, readable)
- **Scale**: Responsive using clamp()

### Components
- Premium glassmorphism cards
- Gradient text effects (blue, gold, premium)
- Animated buttons with hover states
- Badge system for categories
- Input forms with validation states

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable the services you need:
   - Authentication (for contact form submissions)
   - Firestore (for blog posts, testimonials)
   - Storage (for images, files)
3. Copy your config values to `.env.local`

### SEO Optimization

The site includes:
- ✅ Meta tags for every page
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Schema.org structured data
- ✅ XML sitemap ready
- ✅ Robots.txt configured
- ✅ Canonical URLs

### Google AdSense Integration

Ad placements are ready in the blog page. Simply add your AdSense code to the placeholder sections.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Firebase Hosting

## 📱 Responsive Breakpoints

| Device | Breakpoint |
|--------|-----------|
| Mobile | < 640px |
| Tablet | 640px - 1024px |
| Desktop | > 1024px |

## 🎯 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS purging with Tailwind
- Font optimization with next/font
- Smooth scroll behavior
- Reduced motion support

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |

## 📄 License

This project is proprietary and confidential. © 2026 Zerovex Solutions. All rights reserved.

## 🤝 Support

For questions or support:
- Email: hello@zerovexsolutions.site
- Website: https://zerovexsolutions.site

## 🎉 Credits

- **Design & Development**: Zerovex Solutions Team
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter), [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ by Zerovex Solutions** | [zerovexsolutions.site](https://zerovexsolutions.site)
