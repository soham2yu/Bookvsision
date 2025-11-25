"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-3 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-foreground transition-all duration-300 hover:scale-105 ai-glow rounded-lg px-2 py-1"
          >
           <div className="flex items-center gap-2 font-bold text-lg mb-4 ai-glow rounded-lg px-2 py-1">
              <div className="relative h-6 lg:h-10 w-9 lg:w-35">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl" />
            <img
              src="9.png"
              alt="BookVision Logo"
              className="relative h-full w-full object-cover rounded-3xl"
            />
          </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#how-it-works"
              className="text-sm text-muted-foreground hover:text-accent transition-all duration-300"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground hover:text-accent transition-all duration-300"
            >
              Pricing
            </Link>
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-accent transition-all duration-300"
            >
              Features
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-accent">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            <Link
              href="/#how-it-works"
              className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-all duration-300"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-all duration-300"
            >
              Pricing
            </Link>
            <div className="flex gap-2 pt-2 px-4">
              <Button variant="ghost" size="sm" asChild className="flex-1">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
