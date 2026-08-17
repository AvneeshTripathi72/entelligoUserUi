# User Directory

## Overview
A modern, production-ready "User Directory" web application built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. This application allows users to view, search, and sort a directory of employees fetched from a public API, presenting the data in a beautiful, responsive interface.

## Features
- **Server-Side Data Fetching**: Fast initial page loads using Next.js Server Components.
- **Client-Side Interactivity**: Debounced searching and sorting by name.
- **Responsive Design**: Beautiful UI across Mobile, Tablet, and Desktop screens.
- **Graceful Error Handling**: Custom Error Boundaries and 404 pages.
- **Loading States**: Seamless user experience with skeleton loaders.

## Tech Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React Icons

## Folder Structure
```text
src/
├── app/               # Next.js App Router (pages, layout, loading, error, not-found)
├── components/        # Reusable UI components (shadcn ui)
├── features/          # Feature-specific components (e.g. UserCard, UserList)
├── hooks/             # Custom React hooks (e.g. useDebounce)
├── lib/               # Utility configurations for shadcn
├── services/          # API communication layer
├── types/             # TypeScript interfaces for API responses
```

## Screenshots
*(Add placeholders for screenshots here)*
- Dashboard View
- User Details View
- Mobile View

## Installation

```bash
npm install
```

## Run Local Development

```bash
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

## Build

```bash
npm run build
```

## Run Production

```bash
npm start
```

## Environment Variables
*No environment variables are required to run this application.*

## API Used
JSONPlaceholder - `https://jsonplaceholder.typicode.com/users`

## Design Decisions
- **Next.js App Router**: Chosen for its robust server-first data fetching paradigm, streaming capabilities, and built-in SEO features.
- **TypeScript**: Ensures type safety, reduces runtime errors, and serves as self-documenting code.
- **shadcn/ui**: Provides highly customizable, accessible, and beautifully designed unstyled components that integrate perfectly with Tailwind.
- **Tailwind CSS**: Utility-first CSS framework allowing for rapid UI development without context-switching.

## Performance Optimizations
- **Server Components**: The initial user list is fetched and rendered on the server, sending zero JS to the client for the outer shell.
- **Debounced Search**: Prevents excessive re-renders and potential API spam (if moved to server-side search) while typing.
- **Memoization**: Uses `useMemo` for sorting and filtering to prevent unnecessary calculations during re-renders.

## Accessibility
- Semantic HTML tags (`<header>`, `<main>`, `<article>`)
- Accessible ARIA labels and roles provided by Radix UI (via shadcn)
- High contrast and keyboard navigable interactions

## Future Improvements
- Infinite Scroll or Pagination for large datasets
- Server-side Search for handling massive directories
- Authentication for internal employee views
- Dark Theme toggle
