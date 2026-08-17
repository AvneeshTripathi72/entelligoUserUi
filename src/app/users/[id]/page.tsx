import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUserById } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CopyButton } from '@/components/copy-button';
import { 
  ArrowLeft, Mail, Phone, Globe, Building, 
  MapPin, Navigation, Map, Code, Users
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  try {
    const user = await getUserById(resolvedParams.id);
    return {
      title: `${user.name} | Directory`,
      description: `View profile details for ${user.name} from ${user.company.name}.`,
    };
  } catch (error) {
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
  } catch (error) {
    notFound();
  }

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&size=256`;
  const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
      <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/">
          <Button variant="ghost" className="gap-2 -ml-4 hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
        <span>/</span>
        <span className="font-medium text-foreground">{user.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile Summary */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-b from-primary/5 to-background rounded-2xl">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <Avatar className="h-40 w-40 border-4 border-background shadow-md mb-6">
                <AvatarImage src={avatarUrl} alt={user.name} />
                <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold tracking-tight mb-1">{user.name}</h1>
              <p className="text-muted-foreground font-medium mb-4">@{user.username}</p>
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                <Users className="w-3 h-3 mr-2 inline" />
                Employee
              </Badge>
            </CardContent>
          </Card>

          {/* Quick Contact Info */}
          <Card className="rounded-2xl shadow-sm border">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Contact Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm group">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href={`mailto:${user.email}`} className="hover:underline font-medium text-foreground">
                    {user.email}
                  </a>
                </div>
                <CopyButton text={user.email} label="Email copied" />
              </div>
              <div className="flex items-center justify-between text-sm group">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href={`tel:${user.phone}`} className="hover:underline text-muted-foreground">
                    {user.phone}
                  </a>
                </div>
                <CopyButton text={user.phone} label="Phone copied" />
              </div>
              <div className="flex items-center justify-between text-sm group">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Globe className="h-4 w-4" />
                  </div>
                  <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-muted-foreground">
                    {user.website}
                  </a>
                </div>
                <CopyButton text={user.website} label="Website copied" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Detailed Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Company Details */}
          <Card className="rounded-2xl shadow-sm border h-full">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{user.company.name}</h3>
                  <p className="text-muted-foreground text-lg italic">
                    "{user.company.catchPhrase}"
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Business Strategy</p>
                  <p className="text-base flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="capitalize">{user.company.bs}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Details */}
          <Card className="rounded-2xl shadow-sm border">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Address Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-2">
                      <Map className="h-4 w-4" /> Street
                    </p>
                    <p className="text-base font-medium">{user.address.street}, {user.address.suite}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-2">
                      <Building className="h-4 w-4" /> City
                    </p>
                    <p className="text-base font-medium">{user.address.city}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> Zip Code
                    </p>
                    <p className="text-base font-medium">{user.address.zipcode}</p>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-xl p-6 border flex flex-col justify-center items-center text-center space-y-3">
                  <div className="bg-background p-3 rounded-full shadow-sm">
                    <Navigation className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Geo Location</h4>
                  <div className="flex gap-4">
                    <div className="bg-background px-3 py-1.5 rounded-md border text-sm font-mono shadow-sm">
                      <span className="text-muted-foreground text-xs mr-2">LAT</span>
                      {user.address.geo.lat}
                    </div>
                    <div className="bg-background px-3 py-1.5 rounded-md border text-sm font-mono shadow-sm">
                      <span className="text-muted-foreground text-xs mr-2">LNG</span>
                      {user.address.geo.lng}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
