"use client";

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const solutions = [
  {
    title: "Cloud Architecture",
    description: "Secure cloud foundations for growth.",
    href: "/solutions/cloud",
  },
  {
    title: "AI & ML Solutions",
    description: "Automation and insight through applied AI.",
    href: "/solutions/ai",
  },
  {
    title: "Enterprise RPO",
    description: "End-to-end hiring for growing teams.",
    href: "/solutions/rpo",
  },
  {
    title: "Project RPO",
    description: "Flexible hiring support for urgent needs.",
    href: "/solutions/project-rpo",
  },
  {
    title: "Jira Administration",
    description: "Jira setup, workflows, and admin support.",
    href: "/solutions/jira",
  },
  {
    title: "Confluence & Atlassian",
    description: "Support for Confluence and Atlassian tools.",
    href: "/solutions/atlassian",
  },
]

export function Header() {
  return (
    <header className="border-b bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-black text-2xl tracking-tight hover:opacity-90 transition-opacity">
          <div className="bg-foreground text-background p-1 transform rotate-45 rounded-sm shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </div>
          Entelligo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end pr-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-3 gap-0 p-0">
                    <ul className="col-span-2 grid w-full grid-cols-2 gap-x-8 gap-y-6 p-6">
                      {solutions.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                    <div className="col-span-1 bg-[#F9F0EB] dark:bg-muted/30 p-6 flex flex-col justify-center">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Featured</p>
                      <h4 className="text-2xl font-bold mb-6 leading-tight">
                        Build teams, products, and systems that scale together.
                      </h4>
                      <div className="space-y-4">
                        <Link href="/case-study" className="text-sm font-medium hover:underline flex justify-between items-center group">
                          Explore our case studies
                          <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                        </Link>
                        <Link href="/contact" className="text-sm font-medium hover:underline flex justify-between items-center group">
                          Talk to our specialists
                          <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/case-study" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Case Study
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="rounded-full px-6 font-bold bg-foreground text-background hover:bg-foreground/90">
            Let's talk
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
