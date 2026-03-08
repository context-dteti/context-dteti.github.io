# CONTEXT Lab — Research Group Landing Page

## Overview
A professional, multi-route landing website for the CONTEXT (Context-Aware Computing) Research Laboratory led by Dr. Azka Maulana at Universitas Gadjah Mada. Inspired by the LSDS Imperial College London website structure.

## Architecture
- **Frontend only** — static landing page, no backend API needed
- **React + TypeScript** with Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: framer-motion for scroll-triggered and entrance animations
- **Routing**: wouter with separate routes (not anchor-based scrolling)

## Routes / Pages
- `/` — Home page with hero + about section (`client/src/pages/home.tsx`)
- `/projects` — Project cards grid with clickable modals (`client/src/pages/projects.tsx`)
- `/people` — Team member cards (`client/src/pages/people.tsx`)

## Shared Components
- `client/src/components/navbar.tsx` — Sticky navbar, transparent on hero, solid on scroll/inner pages
- `client/src/components/footer.tsx` — Footer with navigation, contact info

## Data
- `client/src/lib/data.ts` — All project and people data, shared across pages

## Project Modal Features
Each project card opens a dialog with:
- YouTube video embed
- Full project description
- Team members list with avatars

## Projects (8 total)
1. Hyperbase — Distributed database for IoT
2. INSPIRASI Project: Disaster — Sensor-based disaster prediction
3. MiniWeather Station — Low-cost weather monitoring nodes
4. Borobudur Navigation App — Context-aware heritage site navigation
5. SmarLab — Smart laboratory management ecosystem
6. UWB Indoor Localization — Centimeter-accurate indoor positioning
7. CSI Context-Aware — Wi-Fi CSI-based activity recognition
8. People Mobility — Urban crowd dynamics analysis

## Color Theme
- Hero: Dark navy (#0f172a) with blue radial gradients
- Primary accent: Blue (#2563eb / #1e3a8a)
- Backgrounds: White (#ffffff), Slate (#fafbfc), Light borders (#f1f5f9)
- Text: Dark navy (#0f172a) for headings, Slate (#64748b) for body
