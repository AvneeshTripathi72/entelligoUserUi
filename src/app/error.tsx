'use client';

import { useEffect } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="bg-destructive/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight">Something went wrong!</h2>
        
        <p className="text-muted-foreground text-lg">
          We encountered an unexpected error while trying to load this page.
        </p>

        <Alert variant="destructive" className="text-left mt-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error Details</AlertTitle>
          <AlertDescription className="break-all font-mono text-xs mt-1">
            {error.message || "An unknown error occurred"}
          </AlertDescription>
        </Alert>
        
        <div className="pt-6">
          <Button 
            onClick={() => reset()} 
            size="lg"
            className="w-full sm:w-auto rounded-full gap-2 font-semibold"
          >
            <RotateCcw className="w-4 h-4" />
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
