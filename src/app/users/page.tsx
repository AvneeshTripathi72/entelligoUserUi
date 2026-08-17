import { getUsers } from '@/services/api';
import { UserList } from '@/features/users/components/UserList';

export const metadata = {
  title: 'Full Directory | UserHub',
  description: 'Browse all users in the organization.',
};

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      <div className="flex flex-col mb-8 gap-2">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Full Directory
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-2">
          Search, sort, and browse all professionals in our organization.
        </p>
      </div>

      <UserList initialUsers={users} mode="grid" />
    </div>
  );
}
