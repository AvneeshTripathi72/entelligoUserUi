"use client";

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Users", href: "/users" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
]

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-black text-2xl tracking-tight hover:opacity-90 transition-opacity">
          <div className="bg-foreground text-background p-1 transform rotate-45 rounded-sm shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </div>
          UserHub
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-foreground font-semibold" : "text-muted-foreground"
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

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
