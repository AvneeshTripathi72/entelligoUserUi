"use client";

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"
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
    
        <Link href="/" className="flex items-center gap-2 font-black text-2xl tracking-tight hover:opacity-90 transition-opacity">
          <Logo />
          UserHub
        </Link>

    
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.title} 
                href={link.href}
                className={cn(
                  "relative text-base font-semibold transition-all duration-300 hover:text-foreground group py-1",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.title}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-foreground transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            )
          })}
        </nav>

  
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
