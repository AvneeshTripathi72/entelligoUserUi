import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl space-y-8">
      <div className="flex flex-col gap-4">
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-10 md:h-14 w-3/4 max-w-lg" />
        <Skeleton className="h-6 w-full max-w-2xl" />
      </div>


      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-card p-4 rounded-xl border">
        <Skeleton className="h-11 w-full sm:max-w-md rounded-lg" />
        <Skeleton className="h-11 w-full sm:w-28 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col h-[280px] rounded-xl border p-6">
            <div className="flex flex-row items-center gap-4 mb-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
            <div className="space-y-3 mt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
            <div className="mt-auto pt-4">
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
