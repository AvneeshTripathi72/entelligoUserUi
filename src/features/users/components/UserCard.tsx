import Link from 'next/link';
import { User } from '@/types/user';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Building, Globe } from 'lucide-react';

import { motion } from 'framer-motion';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  // Generate a placeholder avatar using pravatar for realistic faces
  const avatarUrl = `https://i.pravatar.cc/150?u=${user.id}`;
  const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg rounded-xl group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <Avatar className="h-16 w-16 border-2 border-primary/10 transition-transform duration-300 group-hover:scale-110">
          <AvatarImage src={avatarUrl} alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-xl font-bold leading-none tracking-tight">
            {user.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1 font-medium">@{user.username}</p>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pb-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="truncate" title={user.email}>{user.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span className="truncate" title={user.company.name}>{user.company.name}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{user.address.city}</span>
          </div>
          
          <div className="pt-2">
            <Badge variant="secondary" className="font-normal text-xs">
              {user.company.catchPhrase.substring(0, 25)}...
            </Badge>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Link href={`/users/${user.id}`} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
    </motion.div>
  );
}
