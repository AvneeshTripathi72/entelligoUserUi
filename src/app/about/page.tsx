import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Zap, Shield, Target, Trophy } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'About | UserHub',
  description: 'Learn more about UserHub, our mission, and our team.',
};

const stats = [
  { value: "10M+", label: "Active Users Managed" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "24/7", label: "Expert Support" },
];

const values = [
  {
    title: "Security First",
    description: "We believe that data protection is a fundamental right. Our architecture is built from the ground up to ensure enterprise-grade security at every layer.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Lightning Fast",
    description: "Speed is a feature. We optimize every millisecond of our stack to ensure your directory operations happen instantly, no matter your scale.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Global Scale",
    description: "Built for distributed teams. Our infrastructure spans multiple regions to guarantee low latency and high availability worldwide.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "User Centric",
    description: "We design tools that people actually want to use. Intuitive interfaces and seamless developer experiences are at our core.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Mission Driven",
    description: "We are on a mission to simplify identity management so teams can focus on building great products, not managing users.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards. We constantly iterate, improve, and push the boundaries of what is possible.",
    icon: <Trophy className="w-6 h-6" />,
  },
];

const team = [
  {
    name: "Arjun Sharma",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Patel",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Vikram Singh",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ananya Iyer",
    role: "VP of Design",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="px-4 py-1.5 rounded-full text-sm mb-8 border-primary/20 bg-primary/5 text-primary shadow-sm">
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-tight">
              Building the future of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                identity management
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
              We started UserHub with a simple belief: managing users shouldn't be the hardest part of building software. Today, we empower teams to scale securely and efficiently.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center px-4">
                <span className="text-4xl md:text-5xl font-black text-foreground mb-2">{stat.value}</span>
                <span className="text-sm md:text-base font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              These core principles guide everything we do, from how we write code to how we support our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-24 md:py-32 bg-muted/30 border-t">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">
              We're a diverse group of engineers, designers, and problem solvers passionate about making identity simple.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6">
                
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
  
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to join our journey?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We are always looking for talented individuals who share our passion for building exceptional products.
          </p>
          <button className="bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
}
