# Components Documentation

## shadcn/ui Base Components
We utilize shadcn/ui for our base design system. These components are located in `src/components/ui/` and include:

- `Button`: Primary interaction element.
- `Card`: Container for grouped information (used extensively in `UserCard`).
- `Input`: Text fields for search.
- `Avatar`: Displays user profile images with fallbacks.
- `Badge`: Small visual indicator for status or roles.
- `Skeleton`: Placeholder blocks used during data loading states.
- `Separator`: Visual dividers.

## Feature Components
Located in `src/features/users/components/`:

### `UserList.tsx`
- **Purpose**: Displays a grid of user cards and handles the filtering/sorting logic.
- **Props**: `initialUsers` (User array).
- **State**: `searchTerm` (string), `sortOrder` ('asc' | 'desc').
- **Key Hooks**: `useDebounce` to limit search updates, `useMemo` to cache filtered lists.

### `UserCard.tsx`
- **Purpose**: Displays a high-level summary of a single user.
- **Props**: `user` (User object).
- **Behavior**: Clicking 'View Details' navigates to the dynamic route `/users/[id]`.
