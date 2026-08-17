# API Integration

This application integrates with [JSONPlaceholder](https://jsonplaceholder.typicode.com), a free fake API for testing and prototyping.

## Endpoints Used

### 1. GET `/users`
Fetches the complete array of 10 mock users.
- **Usage**: Used in `src/app/page.tsx` to populate the initial directory list.
- **Caching**: Configured with Next.js `revalidate: 3600` (1 hour) to simulate a mostly-static dataset that updates periodically.

### 2. GET `/users/:id`
Fetches a single user by their ID.
- **Usage**: Used in `src/app/users/[id]/page.tsx` to fetch detailed profile information.
- **Error Handling**: If the API returns a 404, we throw a custom error which Next.js intercepts to display the `not-found.tsx` component.

## Type Safety
All API responses are validated against TypeScript interfaces defined in `src/types/user.ts` to ensure frontend safety.
