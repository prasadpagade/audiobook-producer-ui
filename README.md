# Audiobook Producer - Modern Web UI

A stunning, modern web interface showcasing the Audiobook Producer AI pipeline. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Audiobook Producer](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Vibrant Modern Design** - Spotify/Apple-inspired aesthetic with smooth animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **Interactive Components** - Audio players, waveform visualizations, and more
- **Production Ready** - Optimized for performance and SEO
- **One-Click Deploy** - Ready to deploy on Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd audiobook-producer-ui

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🚢 Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prasadpagade/audiobook-producer-ui)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Your site will be live at: `https://your-project.vercel.app`

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

### Content

- **Hero Section**: Edit `components/Hero.tsx`
- **Process Flow**: Edit `components/ProcessFlow.tsx`
- **Audio Samples**: Edit `components/AudioShowcase.tsx`
- **Features**: Edit `components/Features.tsx`
- **Tech Stack**: Edit `components/TechStack.tsx`

## 📁 Project Structure

```
audiobook-producer-ui/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── ProcessFlow.tsx   # 3-step process
│   ├── AudioShowcase.tsx # Audio samples
│   ├── Features.tsx      # Feature grid
│   ├── TechStack.tsx     # Tech stack showcase
│   ├── CTA.tsx           # Call to action
│   └── Footer.tsx        # Footer
├── public/               # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **SEO Optimized**: Yes
- **Mobile Friendly**: Yes

## 🎯 Use Cases

Perfect for showcasing:
- AI/ML projects in portfolios
- Product demonstrations
- Technical capabilities
- Enterprise solutions
- Developer tools

## 📝 License

MIT License - feel free to use this for your own projects!

## 👤 Author

**Prasad Pagade**
- GitHub: [@prasadpagade](https://github.com/prasadpagade)
- LinkedIn: [prasadpagade](https://linkedin.com/in/prasadpagade)

## 🙏 Acknowledgments

- Original Audiobook Producer: [GitHub Repo](https://github.com/prasadpagade/audiobook-producer)
- Design inspiration: Spotify, Apple, Linear
- Built with ❤️ using modern web technologies

---

**Ready to showcase your AI project?** Deploy this in minutes and impress your audience! 🚀
