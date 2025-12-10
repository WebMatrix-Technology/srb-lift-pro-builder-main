# SRB Lift Pro Builder

A Next.js 16 + React + TypeScript project using shadcn-ui and Tailwind CSS.

## Getting Started

Prerequisites:
- Node.js 18+ and npm installed

Install dependencies:
```sh
npm install
```

Start the development server:
```sh
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

Build for production:
```sh
npm run build
```

Start production server:
```sh
npm start
```

## Environment Variables

### Setup Instructions

1. Copy the `.env.example` file to create your `.env.local` file:
   ```sh
   cp .env.example .env.local
   ```

2. Edit `.env.local` and fill in your actual values:

```env
# Supabase Configuration (Optional)
# Get these from your Supabase project: https://supabase.com/dashboard
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key_here

# Admin Password (Required for /admin page)
NEXT_PUBLIC_ADMIN_PASSWORD=your_strong_password_here
```

### Environment Variables Explained

- **NEXT_PUBLIC_SUPABASE_URL** (Optional): Your Supabase project URL
  - If not set, the contact form will use email fallback
  - Get this from: Supabase Dashboard → Settings → API

- **NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY** (Optional): Your Supabase anon/public key
  - If not set, the contact form will use email fallback
  - Get this from: Supabase Dashboard → Settings → API

- **NEXT_PUBLIC_ADMIN_PASSWORD** (Required): Password for admin dashboard access
  - Default: `admin123` (change this in production!)
  - Used to access `/admin` page

### Notes

- The `.env.local` file is ignored by git (safe for secrets)
- For production, set these variables in your hosting platform (Vercel, etc.)
- Supabase configuration is optional - the app works without it using email fallback

## Tech Stack
- Next.js 16
- TypeScript
- React 18
- shadcn-ui
- Tailwind CSS
- Supabase
