<div align="center">

# 🛍️ 6Valley - Modern E-Commerce Platform

### **A High-Performance, Responsive E-Commerce Home Page Built with Angular 21 & Tailwind CSS**

<p align="center">
  <a href="https://ai.studio/apps/1fc8584e-a26e-4629-8fb6-8e302ced0691"><img src="https://img.shields.io/badge/Live%20Demo-View%20in%20Browser-success?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" /></a>
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmujahidul80%2FEcommerce-Website-Home-page-Design"><img src="https://img.shields.io/badge/Deploy%20with-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Deploy to Vercel" /></a>
  <a href="https://github.com/mujahidul80/Ecommerce-Website-Home-page-Design/stargazers"><img src="https://img.shields.io/github/stars/mujahidul80/Ecommerce-Website-Home-page-Design?style=for-the-badge&logo=github&color=007ACC" alt="Stars" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-21.0-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Angular_Material-UI-indigo?style=flat-square&logo=materialdesign&logoColor=white" alt="Angular Material" />
  <img src="https://img.shields.io/badge/Motion-Animations-purple?style=flat-square" alt="Motion" />
  <img src="https://img.shields.io/badge/Platform-Web%20(No%20Android%20Studio%20Needed)-orange?style=flat-square" alt="Web Only" />
</p>

---

[🌐 Live Demo](#-live-demo--preview) •
[🚀 1-Click Vercel Deploy](#-1-click-deploy-to-vercel) •
[✨ Key Features](#-key-features) •
[🧩 Components](#-component-architecture) •
[🛠️ Run Locally](#%EF%B8%8F-local-development) •
[👤 Author](#-author--connect)

</div>

---

## 🌐 Live Demo & Preview

> **💡 Note for Users & Reviewers:**  
> This is a **100% modern Web application** (Single Page App). **You do NOT need Android Studio or any mobile emulator** to view or run this project! It opens directly in any web browser on desktop, tablet, and mobile.

- 🔗 **Instant Live Web Preview**: [**View Live on Web Browser**](https://ai.studio/apps/1fc8584e-a26e-4629-8fb6-8e302ced0691)
- 🚀 **1-Click Free Hosting**: Click the Vercel button below to deploy your own live copy with a permanent `.vercel.app` URL in under 60 seconds!

---

## 🚀 1-Click Deploy to Vercel

Deploy this project directly to **Vercel** with zero configuration:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmujahidul80%2FEcommerce-Website-Home-page-Design)

### Manual Vercel Deployment Steps:
1. Go to [**vercel.com**](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New..."** ➔ **"Project"**.
3. Find and import **`Ecommerce-Website-Home-page-Design`**.
4. Framework Preset will automatically detect **Angular**.
5. Click **"Deploy"** — your live website will be up and running!

---

## ✨ Key Features

- **🎯 Complete E-Commerce Storefront**: Designed after industry-standard marketplace layouts like 6Valley, Amazon, and Daraz.
- **⏱️ Flash Deals Section**: Live promotional countdown timers and discount percentage badges.
- **🛍️ Featured Products Grid**: Interactive product cards with dynamic pricing, ratings, badges, and quick add-to-cart buttons.
- **📂 Multi-Level Category Navigation**: Categorized shopping sections (Women's Fashion, Phones & Gadgets, Electronics, Accessories).
- **🏆 Best Selling & Top Rated Split Grids**: High-converting side-by-side product ranking showcases.
- **🎨 Modern Design System**: Built with Tailwind CSS v4, custom smooth scrollbars, clean card borders, and subtle drop shadows.
- **✨ Smooth Motion Animations**: Micro-interactions powered by the modern `motion` animation library.
- **📱 100% Mobile-First Responsive**: Flawless experience across smartphones, iPads/tablets, laptops, and ultra-wide displays.

---

## 🧩 Component Architecture

The application is structured into modular, reusable Angular standalone components:

```
src/app/
├── components/
│   ├── header.ts             # Currency, language, help, and user auth strip
│   ├── navbar.ts             # Logo, main search bar, wishlist, cart & category nav
│   ├── hero.ts               # Carousel slider with side promotional cards
│   ├── flash-deal.ts         # Limited-time deals with countdown timers
│   ├── featured-products.ts  # Showcase grid with tabbed filtering
│   ├── category-grid.ts      # Visual circular/square category cards
│   ├── promo-banner.ts       # Full-width seasonal campaign banners
│   ├── brand-slider.ts       # Partner brand logos carousel
│   ├── category-section.ts   # Reusable category section (Fashion, Gadgets, etc.)
│   ├── product-card.ts       # Reusable product card with rating & discount
│   └── footer.ts             # Comprehensive multi-column e-commerce footer
├── app.ts                    # Main root component
├── app.html                  # Core layout assembly
└── app.css                   # Component-level styling
```

---

## 🛠️ Local Development

If you are a web developer and want to run or customize this project on your local machine:

### Prerequisites:
- [Node.js](https://nodejs.org/) (v18.x or v20.x+)
- npm or pnpm

### Quick Start:
```bash
# 1. Clone the repository
git clone https://github.com/mujahidul80/Ecommerce-Website-Home-page-Design.git

# 2. Navigate to project folder
cd Ecommerce-Website-Home-page-Design

# 3. Install dependencies
npm install

# 4. Run the development server
npm start
```

Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any source files.

### Production Build:
```bash
npm run build
```
Output files will be generated in `dist/app/browser/`, ready for hosting on Vercel, Netlify, or GitHub Pages.

---

## ⚡ Tech Stack & Libraries

- **Framework**: [Angular 21](https://angular.dev/) (Standalone Components, Signals & Control Flow `@for`, `@if`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Angular Material & CDK](https://material.angular.io/)
- **Animation**: [Motion](https://motion.dev/)
- **Icons**: [Google Material Icons](https://fonts.google.com/icons)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author & Connect

<p align="left">
  <b>Mujahidul Islam</b><br>
  💬 <b>WhatsApp</b>: <a href="https://wa.me/8801571432927"><b>+880 1571-432927</b></a> (Click to chat)<br>
  🔗 <b>GitHub</b>: <a href="https://github.com/mujahidul80">@mujahidul80</a><br>
  🌐 <b>Portfolio & Blog</b>: <a href="https://mujahidulib.blogspot.com">mujahidulib.blogspot.com</a><br>
  💬 <b>Feedback & Issues</b>: <a href="https://github.com/mujahidul80/Ecommerce-Website-Home-page-Design/issues">Report an Issue</a>
</p>

---

<div align="center">
  <sub>Designed with ❤️ by Mujahidul Islam • Free for educational & commercial inspiration</sub>
</div>
