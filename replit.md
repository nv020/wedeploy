# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### Wedeploy Homepage (`artifacts/wedeploy`)
- **Type**: React + Vite frontend (static)
- **Preview path**: `/` (root)
- **Port**: 24421
- **Stack**: React 18, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, Plus Jakarta Sans font
- **Purpose**: Premium Dutch staffing agency homepage for Wedeploy

#### Components
- `Header` — Sticky header with logo (WE in blue, DEPLOY in navy), nav links, CTA button, mobile hamburger menu
- `Hero` — Full-viewport hero with headline "Wij vinden mensen die blijven.", subtext, dual CTAs, abstract SVG network visual
- `TrustIntro` — Short trust statement about quality over volume
- `USPSection` — 5 USP cards in bento-style grid (asymmetric layout)
- `DienstenOverview` — 3 service cards: Detachering, Recruitment, Interim
- `HoeWijWerken` — 4-step numbered process (vertical timeline)
- `SplitSection` — Two-column: Voor kandidaten + Voor opdrachtgevers with bullets and CTAs
- `VacaturePreview` — 3 static vacancy cards (Amsterdam, Utrecht, Rotterdam)
- `SocialProof` — 2 quotes + placeholder client logo shapes
- `FinalCTA` — Navy closing CTA block with "Plan een kennismaking" button
- `Footer` — Company info, nav links, contact details, LinkedIn, privacy link

#### Design System
- **Primary**: Dark navy (`220 50% 18%`)
- **Accent**: Bright blue (`205 85% 53%`) — matches "WE" in logo
- **Background**: Off-white (`220 15% 97%`)
- **Font**: Plus Jakarta Sans (Google Fonts)
- **Animations**: Framer Motion scroll-triggered reveals, staggered card entrances

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/wedeploy run dev` — run Wedeploy frontend locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
