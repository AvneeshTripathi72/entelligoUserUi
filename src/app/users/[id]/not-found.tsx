import Link from 'next/link';
import { ArrowLeft, UserX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function UserNotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <UserX className="w-12 h-12 text-muted-foreground" />
        </div>
        
        <h2 className="text-4xl font-extrabold tracking-tight">User Not Found</h2>
        
        <p className="text-muted-foreground text-lg">
          The user you are looking for doesn't exist or has been removed from the directory.
        </p>
        
        <div className="pt-8">
          <Link href="/">
            <Button size="lg" className="rounded-full gap-2 font-semibold">
              <ArrowLeft className="w-4 h-4" />
              Back to Directory
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
