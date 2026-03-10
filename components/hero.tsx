"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "The leader in quality custom T-Shirts",
    subtitle: "Turn your ideas into premium products that leave a lasting impression",
  },
  {
    title: "Design images just got easy",
    subtitle: "Turn your ideas into premium products that leave a lasting impression",
  },
  {
    title: "Create and sell custom products online",
    subtitle: "Turn your ideas into premium products that leave a lasting impression",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-accent" aria-label="Hero banner">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-printing.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/50" />
      </div>

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-20 md:min-h-[640px] lg:py-28">
        <div className="max-w-2xl">
          {/* Slide indicator */}
          <div className="mb-6 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? "w-10 bg-primary" : "w-4 bg-accent-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-accent-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">{slides[current].title}</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-accent-foreground/70">
            {slides[current].subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-accent-foreground/30 px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:border-accent-foreground/60"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-8 right-4 flex gap-2 md:right-8">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-foreground/20 text-accent-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-foreground/20 text-accent-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export function FeatureStrip() {
  const features = [
    { icon: "truck", title: "Free delivery worldwide" },
    { icon: "refresh", title: "30 day online returns" },
    { icon: "headphones", title: "Top-notch support" },
    { icon: "tag", title: "Low price guarantee" },
  ]

  return (
    <section className="border-b border-border bg-background" aria-label="Key features">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4 md:gap-8 md:py-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <FeatureIcon type={feature.icon} />
            </div>
            <span className="text-sm font-semibold text-foreground">{feature.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeatureIcon({ type }: { type: string }) {
  const iconClass = "h-5 w-5 text-primary"
  switch (type) {
    case "truck":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
          <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      )
    case "refresh":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
          <path d="M8 16H3v5" />
        </svg>
      )
    case "headphones":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    case "tag":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 2 7l10 5 10-5-10-5Z" />
          <path d="m2 17 10 5 10-5" />
          <path d="m2 12 10 5 10-5" />
        </svg>
      )
    default:
      return null
  }
}
