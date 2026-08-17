import { getUsers } from '@/services/api';
import { UserList } from '@/features/users/components/UserList';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Directory | Users',
  description: 'A modern directory to search and view user profiles.',
};

export default async function HomePage() {
  const users = await getUsers();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-12 mb-16 pt-8">
        <div className="flex flex-col max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 text-muted-foreground w-fit mb-8 border font-semibold text-xs tracking-widest uppercase">
            Built for modern organizations
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-foreground leading-[1.05] mb-6">
            Enterprise-grade<br />
            user directory<br />
            for growing teams.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium">
            Seamlessly search, connect, and collaborate with professionals across your entire organization using our lightning-fast platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="rounded-full px-8 h-14 font-semibold text-base bg-foreground text-background hover:bg-foreground/90 gap-2">
              Browse Directory
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 font-semibold text-base gap-2">
              View Documentation
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </Button>
          </div>


        </div>
      </div>

      <UserList initialUsers={users} />
    </div>
  );
}
