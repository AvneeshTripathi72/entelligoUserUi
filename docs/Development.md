# Local Development Guide

## Prerequisites
- Node.js (v18.17 or later)
- npm

## Setup Instructions
1. Navigate to the project directory:
   ```bash
   cd user-directory
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Code Standards
- **Linting**: Run `npm run lint` to execute ESLint.
- **Type Checking**: Run `npx tsc --noEmit` to ensure there are no TypeScript errors.
- **Formatting**: The project uses Tailwind's recommended class sorting via Prettier (if configured).
