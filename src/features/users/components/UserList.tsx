'use client';

import { useState, useMemo } from 'react';
import { User } from '@/types/user';
import { UserCard } from './UserCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ArrowUpDown, X } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';

interface UserListProps {
  initialUsers: User[];
}

type SortOrder = 'asc' | 'desc';

export function UserList({ initialUsers }: UserListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  
  // Use debounced search term for performance
  const debouncedSearch = useDebounce(searchTerm, 300);

  const filteredAndSortedUsers = useMemo(() => {
    let result = [...initialUsers];

    // Filter by search term
    if (debouncedSearch) {
      const lowercasedSearch = debouncedSearch.toLowerCase();
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(lowercasedSearch) ||
          user.username.toLowerCase().includes(lowercasedSearch) ||
          user.email.toLowerCase().includes(lowercasedSearch)
      );
    }

    // Sort by name
    result.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    return result;
  }, [initialUsers, debouncedSearch, sortOrder]);

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-4 rounded-xl border shadow-sm">
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <Input
            type="text"
            placeholder="Search by name, username, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-10 rounded-lg h-11"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button 
            variant="outline" 
            onClick={toggleSort}
            className="w-full sm:w-auto rounded-lg h-11 flex gap-2"
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort: {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </Button>
        </div>
      </div>

      {filteredAndSortedUsers.length > 0 ? (
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {filteredAndSortedUsers.slice(0, 8).map((user) => (
            <div key={user.id} className="min-w-[300px] sm:min-w-[380px] shrink-0 snap-start">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 px-4 bg-card rounded-xl border border-dashed flex flex-col items-center justify-center">
          <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mb-4 text-primary">
            <Search className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">No users found</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We couldn't find any users matching "{debouncedSearch}". Try adjusting your search criteria.
          </p>
          <Button 
            variant="outline" 
            onClick={clearSearch}
            className="mt-6 rounded-lg"
          >
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}
