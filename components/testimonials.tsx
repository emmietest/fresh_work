"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, BrandCraft Co.",
    avatar: "/images/avatar-1.jpg",
    text: "We found an incredible partner in Printec for all of our custom merchandise needs. The quality is outstanding, turnaround times are lightning fast, and the team genuinely cares about getting every detail right.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Marketing Director, Elevate Studios",
    avatar: "/images/avatar-2.jpg",
    text: "With seamless order management and unparalleled print quality, Printec has helped us scale our branded merchandise program effortlessly. Their customer support is second to none.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "E-commerce Manager, NovaTrend",
    avatar: "/images/avatar-3.jpg",
    text: "Printec transformed how we handle custom products. From design to delivery, their end-to-end solution saved us time and resources while delighting our customers every single time.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="bg-secondary py-20 lg:py-28" aria-label="Client testimonials">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our clients say
          </p>
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              {"Here's what our users speak about us"}
            </span>
          </h2>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[current]} />
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-primary text-primary"
          />
        ))}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold text-card-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
