# CONTEXT Lab — Research Group Landing Page

## Overview
A professional, single-page landing website for the CONTEXT (Context-Aware Computing) Research Laboratory led by Dr. Azka Maulana at Universitas Gadjah Mada. Inspired by the LSDS Imperial College London website structure.

## Architecture
- **Frontend only** — static landing page, no backend API needed
- **React + TypeScript** with Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: framer-motion for scroll-triggered animations
- **Routing**: wouter (single route `/`)

## Pages
- `/` — Main landing page (`client/src/pages/home.tsx`)

## Landing Page Sections
1. **Hero** — Full-screen gradient hero with animated CTA buttons and scroll indicator
2. **About (#about)** — Lab description, stats grid (projects, publications, researchers, partners), and research focus tags
3. **Video (#video)** — YouTube embed for lab overview video
4. **People (#people)** — Team member cards with avatar initials (8 members including Dr. Azka Maulana as PI)
5. **Projects (#projects)** — 8 research project cards in a responsive grid
6. **Footer** — Lab info, navigation links, contact address

## Projects
1. Hyperbase — Distributed database for IoT
2. INSPIRASI Project: Disaster — Sensor-based disaster prediction
3. MiniWeather Station — Low-cost weather monitoring nodes
4. Borobudur Navigation App — Context-aware heritage site navigation
5. SmarLab — Smart laboratory management ecosystem
6. UWB Indoor Localization — Centimeter-accurate indoor positioning
7. CSI Context-Aware — Wi-Fi CSI-based activity recognition
8. People Mobility — Urban crowd dynamics analysis

## Color Theme
- Primary brand: Royal Blue (#1e3a8a / blue-700)
- Background: White (#ffffff) and Slate (#f8fafc)
- Text: Charcoal/Slate-600 (#334155)
- Navbar: Transparent on hero, white/frosted on scroll

## Key Files
- `client/src/pages/home.tsx` — All landing page sections
- `client/src/App.tsx` — Root router
- `client/index.html` — SEO meta tags
