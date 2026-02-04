modules = ["nodejs-20", "web"]
[agent]
expertMode = true
integrations = ["javascript_openai_ai_integrations:2.0.0"]

[nix]
channel = "stable-25_05"

[workflows]
runButton = "Project"

[[workflows.workflow]]
name = "Project"
mode = "parallel"
author = "agent"

[[workflows.workflow.tasks]]
task = "workflow.run"
args = "Start application"

[[workflows.workflow]]
name = "Start application"
author = "agent"

[[workflows.workflow.tasks]]
task = "shell.exec"
args = "npm run dev"
waitForPort = 5000

[workflows.workflow.metadata]
outputType = "webview"

[[ports]]
localPort = 5000
externalPort = 80

[deployment]
deploymentTarget = "autoscale"
run = ["npm", "run", "start"]
build = ["npm", "run", "build"]

# FastCatalogue

## Overview
FastCatalogue is a premium full-stack web application that helps users launch professional business websites for trades (plumber, electrician, landscaper, painter) in seconds. The platform features a sophisticated dark-mode UI with purple gradient accents, generating trade-specific, mobile-first, agency-grade websites that look ready to deploy.

## Architecture

```
business_schema
      ↓
trade_identity (data/trades/{slug}.json)
      ↓
blueprint (blueprints/{slug}_{A|B|C}.json)
      ↓
theme (Clean, Bold, Luxury)
      ↓
live website
```

### Trade Identity Profiles
Located in `/data/trades/{slug}.json`, these define:
- Trade-specific tone and messaging
- Pain points and service offerings
- Trust symbols and guarantees
- Testimonials and FAQs
- Color palette and CTA options

### Brand System (NEW)
Located in `/data/brands/{slug}.json`, each trade has a unique visual DNA:
- **Plumber**: Inter font, split-right hero, compact spacing, blue/orange accent, urgent CTAs
- **Electrician**: Space Grotesk font, full-width overlay hero, dark theme, yellow/cyan accent, bold uppercase
- **Landscaper**: Playfair Display font, stacked-centered hero, airy spacing, green/gold accent, elegant rounded buttons
- **Painter**: DM Sans font, asymmetric-left hero, gradient CTAs, purple/orange accent, creative design

The brand engine (`client/src/lib/brand-engine.ts`) loads brand profiles and generates:
- CSS custom properties for colors, typography, spacing
- Layout configurations for heroes, services, testimonials
- Button and card styles based on brand parameters
- Motion variants for animations

### Blueprint System
Three blueprints per trade in `/blueprints/`:
- **Blueprint A (Trust & Authority)**: Certifications, guarantees, professional tone
- **Blueprint B (Fast Lead Capture)**: Emergency focus, urgent CTAs, quick forms
- **Blueprint C (Premium Brand)**: Lifestyle imagery, refined design, consultation focus

### Theme Engine
Three visual themes that render blueprint content:
- **Clean**: Professional, trustworthy, service-oriented
- **Bold**: Urgent, action-focused, emergency-ready
- **Luxury**: Elegant, premium, consultation-driven

## Tech Stack
- **Frontend**: React 18 with TypeScript, Vite, TailwindCSS
- **Backend**: Express 5 with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: TailwindCSS with Radix UI components

## Project Structure
```
├── client/               # React frontend
│   └── src/
│       ├── components/themes/  # Theme renderers
│       ├── pages/             # Page components
│       ├── hooks/             # React hooks
│       └── lib/               # Utility libraries
├── server/               # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── db.ts             # Database connection
├── shared/               # Shared code
│   ├── schema.ts         # Drizzle schemas & types
│   └── routes.ts         # API route definitions
├── data/
│   └── trades/           # Trade identity profiles
├── blueprints/           # Blueprint JSON files
├── vite.config.ts        # Vite configuration
└── drizzle.config.ts     # Drizzle configuration
```

## Development
- **Dev server**: `npm run dev` - Runs Express + Vite on port 5000
- **Type check**: `npm run check`
- **Database push**: `npm run db:push` - Sync schema to database

## Key Features
- Trade selection (Plumber, Electrician, Landscaper, Painter)
- Three distinct blueprint strategies per trade
- Three visual themes (Clean, Bold, Luxury)
- Mobile-first responsive design with real breakpoints
- Blueprint-driven content rendering
- Trade-specific pain-driven copy
- Real stock images per trade (hero, team, gallery)
- Trade identity layer for colors, CTAs, and tone

## Utilities
- **Brand Engine** (`client/src/lib/brand-engine.ts`): Complete brand system providing typography, layouts, colors, motion, and component styles per trade
- **Image Engine** (`client/src/lib/image-engine.ts`): Provides trade-specific stock images for hero, team, and gallery sections
- **Trade Identity** (`client/src/lib/trade-identity.ts`): Injects trade-specific colors as CSS variables and provides CTA/tagline helpers






