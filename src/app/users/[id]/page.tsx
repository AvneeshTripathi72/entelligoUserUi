
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUserById } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CopyButton } from '@/components/copy-button';
import {  ArrowLeft, Mail, Phone, Globe, Building, Briefcase, UserIcon, MapPin  } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  try {
    const user = await getUserById(resolvedParams.id);
    return {
      title: `${user.name} | Directory`,
      description: `View profile details for ${user.name} from ${user.company.name}.`,
    };
  } catch {
    return {
      title: 'User Not Found',
    };
  }
}

export default async function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  let user;
  try {
    user = await getUserById(resolvedParams.id);
  } catch {
    notFound();
  }

  const professionalPhotos = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  ];
  const avatarUrl = user.avatar || professionalPhotos[user.id % 10];
  const initials = user.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2);

  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-indigo-500 to-purple-400",
    "from-rose-500 to-orange-400",
    "from-emerald-500 to-teal-400",
    "from-amber-500 to-yellow-400"
  ];
  const gradientClass = gradients[user.id % gradients.length];

  return (
    <div className="w-full bg-muted/20 pb-20">
      <div className={`h-48 md:h-64 w-full bg-gradient-to-r ${gradientClass} relative`}>
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl -mt-20 md:-mt-24 relative z-10">
        <Link href="/">
          <Button variant="secondary" className="mb-4 gap-2 bg-background/80 backdrop-blur hover:bg-background shadow-sm rounded-full">
            <ArrowLeft className="h-4 w-4" />
            Back to Directory
          </Button>
        </Link>

        <Card className="rounded-3xl shadow-xl border-0 overflow-hidden mb-8 bg-background/95 backdrop-blur-sm">
          <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background shadow-2xl rounded-[2rem]">
              <AvatarImage src={avatarUrl} alt={user.name} className="object-cover" />
              <AvatarFallback className="text-4xl bg-primary text-primary-foreground rounded-[2rem]">{initials}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left pt-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight">{user.name}</h1>
                  <p className="text-lg text-muted-foreground font-medium mt-1">@{user.username}</p>
                </div>
                <Badge variant="default" className="px-4 py-1.5 rounded-full text-sm font-medium self-center md:self-start bg-primary/10 text-primary hover:bg-primary/20 border-0">
                  <Briefcase className="w-4 h-4 mr-2 inline" />
                  {user.company.catchPhrase || "Team Member"}
                </Badge>
              </div>
              <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
                Driving innovation at <strong className="text-foreground">{user.company.name}</strong>. Dedicated to building excellence in the {user.company.bs || "tech"} space.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Card className="rounded-3xl shadow-md border-border/50 lg:col-span-1">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 text-primary mb-2">
                <UserIcon className="h-5 w-5" />
                <h3 className="font-bold text-lg">Contact Info</h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start justify-between group">
                  <div className="flex gap-4">
                    <div className="bg-muted p-2.5 rounded-2xl">
                      <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${user.email}`} className="text-sm font-medium hover:text-primary transition-colors truncate block max-w-[150px]" title={user.email}>
                        {user.email}
                      </a>
                    </div>
                  </div>
                  <CopyButton text={user.email} label="Email copied" />
                </div>
                
                <div className="flex items-start justify-between group">
                  <div className="flex gap-4">
                    <div className="bg-muted p-2.5 rounded-2xl">
                      <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                      <a href={`tel:${user.phone}`} className="text-sm font-medium hover:text-primary transition-colors truncate block max-w-[150px]">
                        {user.phone}
                      </a>
                    </div>
                  </div>
                  <CopyButton text={user.phone} label="Phone copied" />
                </div>

                <div className="flex items-start justify-between group">
                  <div className="flex gap-4">
                    <div className="bg-muted p-2.5 rounded-2xl">
                      <Globe className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Website</p>
                      <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors truncate block max-w-[150px]">
                        {user.website}
                      </a>
                    </div>
                  </div>
                  <CopyButton text={user.website} label="Website copied" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          <Card className="rounded-3xl shadow-md border-border/50 lg:col-span-1">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 text-primary mb-2">
                <MapPin className="h-5 w-5" />
                <h3 className="font-bold text-lg">Location</h3>
              </div>
              
              <div className="bg-muted/30 p-5 rounded-2xl border border-border/50 mb-6">
                <p className="text-base font-medium mb-1">{user.address.street}</p>
                {user.address.suite && <p className="text-sm text-muted-foreground mb-1">{user.address.suite}</p>}
                <p className="text-sm font-semibold">{user.address.city}, {user.address.zipcode}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Coordinates</p>
                <div className="flex gap-3">
                  <div className="flex-1 bg-background px-4 py-3 rounded-xl border border-border/50 flex items-center justify-between">
                    <span className="text-xs font-bold text-muted-foreground">LAT</span>
                    <span className="font-mono text-sm">{user.address.geo.lat}</span>
                  </div>
                  <div className="flex-1 bg-background px-4 py-3 rounded-xl border border-border/50 flex items-center justify-between">
                    <span className="text-xs font-bold text-muted-foreground">LNG</span>
                    <span className="font-mono text-sm">{user.address.geo.lng}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Strategy */}
          <Card className="rounded-3xl shadow-md border-border/50 lg:col-span-1 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 text-primary mb-6">
                <Building className="h-5 w-5" />
                <h3 className="font-bold text-lg">Company</h3>
              </div>
              
              <h4 className="text-2xl font-black mb-2">{user.company.name}</h4>
              <p className="text-lg italic text-muted-foreground mb-8 flex-1">
                &quot;{user.company.catchPhrase}&quot;
              </p>

              <div className="mt-auto">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Core Synergy</p>
                <div className="inline-flex items-center gap-2 bg-background border px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-sm font-medium capitalize">{user.company.bs || "Enterprise Solutions"}</span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
