import { User } from '@/types/user';

const API_URL = 'https://dummyjson.com/users';


export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_URL}?limit=50`);
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    const data = await response.json();
    
    const users: User[] = data.users.map((u: any) => ({
      id: u.id,
      name: `${u.firstName} ${u.lastName}`,
      username: u.username,
      email: u.email,
      phone: u.phone,
      website: u.domain || 'example.com',
      address: {
        street: u.address.address,
        suite: '',
        city: u.address.city,
        zipcode: u.address.postalCode,
        geo: { lat: String(u.address.coordinates?.lat || 0), lng: String(u.address.coordinates?.lng || 0) }
      },
      company: {
        name: u.company.name,
        catchPhrase: u.company.title,
        bs: u.company.department || ''
      },
  
    }));
    
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function getUserById(id: string): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found');
      }
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    const u: any = await response.json();
    
  
    return {
      id: u.id,
      name: `${u.firstName} ${u.lastName}`,
      username: u.username,
      email: u.email,
      phone: u.phone,
      website: u.domain || 'example.com',
      address: {
        street: u.address.address,
        suite: '',
        city: u.address.city,
        zipcode: u.address.postalCode,
        geo: { lat: String(u.address.coordinates?.lat || 0), lng: String(u.address.coordinates?.lng || 0) }
      },
      company: {
        name: u.company.name,
        catchPhrase: u.company.title,
        bs: u.company.department || ''
      }
    };
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
}
