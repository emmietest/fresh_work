"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Search, ShoppingCart, Heart, Menu, X, ChevronDown } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <div className="hidden items-center gap-6 md:flex">
          <span className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-primary" />
            +1 800-567-8899
          </span>
          <span className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-primary" />
            hello@printec.com
          </span>
        </div>
        <div className="flex w-full items-center justify-between md:w-auto md:justify-end md:gap-6">
          <span className="text-xs md:text-sm">
            Free metro delivery* Sign up for $30 off your order!
          </span>
          <span className="hidden items-center gap-1 md:flex">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Store Locations
          </span>
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-lg font-bold text-primary-foreground">P</span>
          </div>
          <span className="font-mono text-2xl font-bold tracking-tight text-foreground">
            Printec
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="hidden rounded-full p-2 text-foreground transition-colors hover:bg-secondary md:flex"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            className="relative rounded-full p-2 text-foreground transition-colors hover:bg-secondary"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
