"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns & Refunds", href: "#" },
    { label: "Order Status", href: "#" },
  ],
  products: [
    { label: "Custom T-Shirts", href: "#" },
    { label: "Business Cards", href: "#" },
    { label: "Packaging", href: "#" },
    { label: "Stickers & Labels", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground" id="contact">
      {/* Newsletter */}
      <div className="border-b border-accent-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 md:flex-row">
          <div>
            <h3 className="font-mono text-2xl font-bold text-accent-foreground">
              Subscribe to our newsletter
            </h3>
            <p className="mt-1 text-sm text-accent-foreground/60">
              Get the latest updates on new products and upcoming sales.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-accent-foreground/20 bg-transparent px-5 py-3 text-sm text-accent-foreground placeholder:text-accent-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-lg font-bold text-primary-foreground">P</span>
              </div>
              <span className="font-mono text-2xl font-bold tracking-tight text-accent-foreground">
                Printec
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-accent-foreground/60">
              Turn your ideas into premium products that leave a lasting impression. Quality printing services since 2005.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <span className="flex items-center gap-2 text-sm text-accent-foreground/60">
                <Phone className="h-4 w-4 text-primary" />
                +1 800-567-8899
              </span>
              <span className="flex items-center gap-2 text-sm text-accent-foreground/60">
                <Mail className="h-4 w-4 text-primary" />
                hello@printec.com
              </span>
              <span className="flex items-center gap-2 text-sm text-accent-foreground/60">
                <MapPin className="h-4 w-4 text-primary" />
                123 Print Street, New York, NY 10001
              </span>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-foreground/20 text-accent-foreground/60 transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground">
              Support
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground">
              Products
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-accent-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-accent-foreground/40 md:flex-row">
          <p>&copy; 2026 Printec. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent-foreground/60">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-accent-foreground/60">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-accent-foreground/60">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
