# OffCache - Next.js Application

A modern networking platform built with Next.js, TypeScript, and SCSS.

## Features

- **User Authentication & Profiles**: Complete user management system
- **Event Discovery**: Search and filter events by location and category
- **Survey System**: Comprehensive user onboarding with multi-step surveys
- **Admin Panel**: Full admin interface for managing events, users, and content
- **Responsive Design**: Mobile-first design with modern UI/UX
- **Identity Verification**: Selfie and document verification system

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: SCSS (Sass)
- **Routing**: Next.js built-in routing
- **State Management**: React hooks
- **Build Tool**: Next.js built-in bundler

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── About/          # About page components
│   ├── Admin/          # Admin panel components
│   ├── Blog/           # Blog components
│   ├── Career/         # Career page components
│   ├── Contact/        # Contact page components
│   ├── Dashboard/      # User dashboard components
│   ├── Events/         # Events page components
│   ├── Footer/         # Footer component
│   ├── Header/         # Header component
│   ├── Hero/           # Hero section components
│   ├── Home/           # Home page components
│   ├── Layout/         # Layout wrapper
│   ├── Policies/       # Legal policy components
│   ├── Pricing/        # Pricing page components
│   ├── SignIn/         # Sign in components
│   ├── Signup/         # Sign up components
│   ├── Survey/         # Survey components
│   ├── Testimonials/   # Testimonials components
│   └── UserAnalytics/  # User analytics components
├── data/               # Static data and mock data
├── pages/              # Next.js pages
├── styles/             # Global styles
└── utils/              # Utility functions
```

## Key Features

### Events System

- Search and filter events by location and category
- Event registration and management
- Event media upload and management

### User Management

- User profiles with verification
- Selfie and document verification
- User analytics and preferences

### Admin Panel

- Event management
- User management
- Verification requests
- Content management

### Survey System

- Multi-step user onboarding
- Interest-based matching
- Availability and preference collection

## Development

### Adding New Pages

1. Create a new file in `src/pages/`
2. Export a default component
3. The route will be automatically available

### Adding New Components

1. Create a new directory in `src/components/`
2. Add your component file and SCSS file
3. Import and use in your pages

### Styling

- Use SCSS for component-specific styles
- Global styles in `src/styles/globals.scss`
- Follow BEM methodology for class naming

## Deployment

The application can be deployed to Vercel, Netlify, or any other Next.js-compatible hosting platform.

```bash
npm run build
npm run start
```

## License

This project is proprietary software. All rights reserved.
