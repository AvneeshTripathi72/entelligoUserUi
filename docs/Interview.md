# Technical Decisions & Interview Guide

This document outlines the core technical decisions made during the development of this application, providing detailed rationale and serving as a guide for potential technical interviews.

## 1. Why Next.js App Router?

**Decision:** Used Next.js 15 with the new App Router (`app/` directory).

**Rationale:**
- **Server-First Paradigm:** React Server Components (RSC) allow fetching data securely on the server, drastically reducing the JavaScript bundle sent to the client.
- **Simplified Routing:** File-based routing with built-in loading (`loading.tsx`), error boundaries (`error.tsx`), and not found states (`not-found.tsx`) makes managing complex UI states straightforward.
- **Caching & Performance:** Next.js provides aggressive and intelligent caching by default, meaning our static user list is highly performant.

## 2. Why TypeScript?

**Decision:** Strict TypeScript without `any` types.

**Rationale:**
- **Developer Experience (DX):** Provides excellent autocomplete, inline documentation, and refactoring safety.
- **Type Safety:** Catching API mismatch errors at compile-time rather than runtime (e.g., ensuring `user.address.geo.lat` is accessed safely).
- **Scalability:** Essential for large codebases where multiple developers collaborate, acting as self-documenting code.

## 3. Why shadcn/ui and Tailwind CSS?

**Decision:** Used Tailwind CSS combined with shadcn/ui instead of a traditional component library like Material UI or Bootstrap.

**Rationale:**
- **Control over Code:** shadcn/ui isn't installed as an npm package; the source code is copied into the project. This means we have 100% control over the DOM and styling.
- **Tailwind Ecosystem:** Tailwind allows for rapid, utility-first styling without ever leaving the JSX, resulting in highly maintainable and specific styles.
- **Accessibility:** Under the hood, shadcn uses Radix UI primitives, ensuring that complex components (like Dialogs and Selects) are accessible by default, managing focus and ARIA attributes perfectly.

## 4. Why Extract Reusable Components and Hooks?

**Decision:** Created custom hooks (like `useDebounce`) and separated `UserCard` and `UserList` from the main page.

**Rationale:**
- **Separation of Concerns:** The main `page.tsx` handles data fetching (Server Component), while `UserList.tsx` handles state and interactivity (Client Component).
- **Performance:** Using `useDebounce` prevents the search filter from executing on every single keystroke, saving CPU cycles and re-renders. `useMemo` in `UserList` ensures the sorting/filtering logic only runs when the search term or data actually changes.

---

## Possible Interview Questions & Suggested Answers

### Q1: How does React Server Components (RSC) differ from Client Components?
**Answer:** RSCs render exclusively on the server and do not send JavaScript to the browser, making them perfect for data fetching and heavy static content. Client Components (marked with `"use client"`) are rendered on the client (and pre-rendered on the server) and can use React state, context, and event listeners. We keep Client Components as low in the tree as possible to maximize performance.

### Q2: How would you scale this application if the API returned 10,000 users instead of 10?
**Answer:** I would shift from client-side filtering/sorting to server-side. I'd update the URL search params on input change, triggering a server request for paginated or filtered data. I'd also implement infinite scrolling or pagination on the UI using Next.js `useSearchParams` and standard `offset`/`limit` API queries.

### Q3: Explain how `useMemo` helps in your `UserList` component.
**Answer:** `useMemo` caches the result of the filtering and sorting function. If a parent component were to re-render, or if a completely unrelated state changed, React would normally recalculate the filtered array. `useMemo` ensures the calculation only happens when `initialUsers`, `debouncedSearch`, or `sortOrder` changes, saving performance on complex list manipulations.

### Q4: Why use a debounce hook instead of filtering on every keystroke?
**Answer:** If we filter on every keystroke, especially on lower-end devices or with large lists, it causes UI stutter because React is trying to re-render the DOM rapidly. Debouncing waits until the user stops typing for a specific duration (e.g., 300ms) before executing the filter, resulting in a much smoother user experience.

### Q5: How did you handle errors in this application?
**Answer:** I utilized Next.js's native `error.tsx` boundary. If the API fails or a rendering error occurs, Next.js catches it and displays a fallback UI with a retry mechanism, rather than crashing the entire application. I also implemented `not-found.tsx` to handle 404s gracefully when navigating to an invalid user ID.
