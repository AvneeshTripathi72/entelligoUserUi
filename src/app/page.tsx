import { getUsers } from '@/services/api';
import { UserList } from '@/features/users/components/UserList';
import { Users } from 'lucide-react';

export const metadata = {
  title: 'Directory | Users',
  description: 'A modern directory to search and view user profiles.',
};

export default async function HomePage() {
  const users = await getUsers();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      <div className="flex flex-col mb-8 gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mb-2">
          <Users className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">Directory</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Meet our team
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-2">
          Search, sort, and find the right people across our organization quickly and easily.
        </p>
      </div>

      <UserList initialUsers={users} />
    </div>
  );
}
