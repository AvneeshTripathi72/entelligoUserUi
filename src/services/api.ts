import { User } from '@/types/user';

const API_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetches all users from the JSONPlaceholder API.
 * Uses Next.js data fetching with caching.
 */
export async function getUsers(): Promise<User[]> {
  try {
    // Next.js caches fetch requests by default, but we'll add revalidate
    // in case we want to support incremental static regeneration in the future.
    const res = await fetch(`${API_URL}/users`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
    }

    const data: User[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

/**
 * Fetches a single user by ID.
 */
export async function getUserById(id: string): Promise<User> {
  try {
    const res = await fetch(`${API_URL}/users/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('User not found');
      }
      throw new Error(`Failed to fetch user: ${res.status} ${res.statusText}`);
    }

    const data: User = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
}
