import { User } from '@/types/user';
import { mockUsers } from '@/lib/mock-data';

/**
 * Simulates fetching all users from an API, using localized Indian dummy data.
 */
export async function getUsers(): Promise<User[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockUsers;
}

/**
 * Simulates fetching a single user by ID.
 */
export async function getUserById(id: string): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const user = mockUsers.find(u => u.id.toString() === id);
  if (!user) {
    throw new Error('User not found');
  }
  
  return user;
}
