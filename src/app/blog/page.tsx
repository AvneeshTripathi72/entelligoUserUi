import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

export const metadata = {
  title: 'Blog | UserHub',
  description: 'Insights, news, and guides from the UserHub team.',
};

const featuredPost = {
  id: 1,
  title: 'The Future of Enterprise User Management',
  excerpt: 'Discover how modern organizations are leveraging centralized directories to streamline onboarding, enhance security, and foster better cross-team collaboration.',
  category: 'Product Strategy',
  date: 'August 12, 2026',
  readTime: '8 min read',
  author: 'Arjun Sharma',
  imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
};

const recentPosts = [
  {
    id: 2,
    title: '5 Ways to Improve Team Collaboration',
    excerpt: 'When your company grows beyond 100 people, knowing who does what becomes a challenge. Here are our top tips for keeping teams connected.',
    category: 'Best Practices',
    date: 'August 05, 2026',
    readTime: '5 min read',
    author: 'Priya Patel',
  },
  {
    id: 3,
    title: 'Scaling Security in Remote Work',
    excerpt: 'With distributed teams becoming the norm, maintaining security protocols without sacrificing employee experience is more important than ever.',
    category: 'Security',
    date: 'July 28, 2026',
    readTime: '6 min read',
    author: 'Vikram Singh',
  },
  {
    id: 4,
    title: 'Introducing UserHub 2.0',
    excerpt: 'We are thrilled to announce the next major version of our platform, featuring lightning-fast search, custom fields, and an all-new API.',
    category: 'Product Updates',
    date: 'July 15, 2026',
    readTime: '4 min read',
    author: 'Ananya Iyer',
  },
  {
    id: 5,
    title: 'Why Culture Matters in Tech',
    excerpt: 'Building a great product starts with building a great team. Learn how to foster an inclusive and innovative culture.',
    category: 'Company Culture',
    date: 'July 02, 2026',
    readTime: '7 min read',
    author: 'Rahul Desai',
  },
  {
    id: 6,
    title: 'A Guide to API Rate Limiting',
    excerpt: 'Technical deep-dive into how we implemented our new sliding-window rate limiter using Redis and Go.',
    category: 'Engineering',
    date: 'June 20, 2026',
    readTime: '10 min read',
    author: 'Sneha Reddy',
  },
  {
    id: 7,
    title: 'The Rise of Headless Architecture',
    excerpt: 'Decoupling your frontend from your backend gives you unprecedented flexibility. Here is why you should consider it.',
    category: 'Architecture',
    date: 'June 10, 2026',
    readTime: '6 min read',
    author: 'Kavya Menon',
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
   
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <Badge variant="outline" className="px-4 py-1.5 rounded-full text-sm mb-6 border-primary/20 bg-primary/5 text-primary">
          Our Blog
        </Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          Insights & Updates
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The latest news, engineering deep-dives, and guides on building scalable teams and software from the UserHub team.
        </p>
      </div>

    
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
        <Card className="overflow-hidden border-none shadow-xl bg-card rounded-3xl group cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${featuredPost.imageUrl})` }}
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 shadow-none border-none">
                  {featuredPost.category}
                </Badge>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <span className="font-medium text-foreground">{featuredPost.author}</span>
                </div>
                <Button variant="ghost" className="group/btn hover:bg-transparent hover:text-primary p-0">
                  Read article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Posts Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center justify-between">
          Recent Posts
          <Button variant="outline" className="rounded-full">View all</Button>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col hover:shadow-md transition-shadow cursor-pointer group border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="font-normal text-xs">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-4 border-t flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
   
      <div className="mt-24 bg-foreground text-background rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="text-background/80 mb-8 max-w-xl mx-auto">
          Get the latest insights, news, and updates delivered straight to your inbox once a month. No spam, ever.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 h-12 px-4 rounded-lg text-foreground bg-background outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <Button type="button" className="h-12 px-8 font-bold bg-primary text-primary-foreground hover:bg-primary/90">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
