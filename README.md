# 🏋️‍♂️ LUXE MOTION GYM — Premium Cinematic Fitness Website  
**Next.js + TailwindCSS + Framer Motion + GSAP + Locomotive Scroll**

A hyper-premium, cinematic, luxury gym website experience featuring buttery smooth 120Hz scrolling, kinetic motion design, and elite visual storytelling. Built to feel expensive, confident, and brand-driven — inspired by Equinox, Louis Vuitton, and luxury editorial web design.

---

## 📌 GitHub Repository Details

**Repository Name** `luxe-motion-gym-premium-nextjs-framer-gsap-locomotive`

**Short Description** Premium luxury gym website with Next.js, TailwindCSS, Framer Motion animations, GSAP ScrollTrigger cinematic storytelling, and Locomotive Scroll buttery smooth luxury scrolling.

**Long Description** A production-ready luxury gym brand website built with Next.js, TailwindCSS, Framer Motion, GSAP ScrollTrigger, and Locomotive Scroll. Delivers cinematic storytelling, premium inertia scrolling, and elite brand aesthetics for high-end fitness brands.

**Keywords for Discoverability** nextjs, tailwindcss, framer-motion, gsap, scrolltrigger, locomotive-scroll, luxury website, cinematic website, premium ui, gym website, fitness website, parallax website, animation website template, web design

---

## 🚀 Features
- 🎥 Cinematic storytelling sections
- 🏎️ Locomotive Scroll buttery inertia scrolling
- 🎬 GSAP ScrollTrigger scene-based animations
- ✨ Framer Motion kinetic UI + luxury micro-interactions
- 🎨 Editorial-grade typography & spacing
- 📱 Fully responsive, polished design system
- 🧼 Clean production-ready architecture

---

## 🛠 Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** TailwindCSS
- **Animation:** Framer Motion + GSAP ScrollTrigger
- **Scrolling Engine:** Locomotive Scroll
- **Design Philosophy:** Luxury, premium, cinematic

---

## ⚙️ Installation

```bash
git clone [https://github.com/YOUR_USERNAME/luxe-motion-gym-premium-nextjs-framer-gsap-locomotive.git](https://github.com/YOUR_USERNAME/luxe-motion-gym-premium-nextjs-framer-gsap-locomotive.git)
cd luxe-motion-gym-premium-nextjs-framer-gsap-locomotive
npm install
npm run dev
```

### Development Setup & Troubleshooting Guide

If you encounter the following error while running the development server:

> The CJS build of Vite's Node API is deprecated  
> failed to load config from vite.config.ts  
> Error: Cannot find module '@vitejs/plugin-react'

It means the React plugin dependency for Vite is missing.

**✅ Step 1 — Install the Required Plugin**

If the project uses standard React plugin:
```bash
npm install -D @vitejs/plugin-react
```

If the project uses SWC (faster, modern setups):
```bash
npm install -D @vitejs/plugin-react-swc
```

**✅ Step 2 — Verify vite.config.ts**

*For Standard React:*
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

*For SWC:*
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
```

**✅ Step 3 — Clean & Reinstall Dependencies (Recommended)**
```bash
rm -rf node_modules
npm install
```

**✅ Step 4 — Run the Dev Server**
```bash
npm run dev
```

**ℹ️ Optional — Update Vite (Future-Proofing)**
```bash
npm install -D vite@latest
```

---

## 📩 Contributions

PRs welcome. Keep code elegant and premium-grade.

## 🏛 License

MIT
