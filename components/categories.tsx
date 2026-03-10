import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = [
  { name: "Packaging", image: "/images/cat-packaging.jpg" },
  { name: "Apparel", image: "/images/cat-apparel.jpg" },
  { name: "Stationery", image: "/images/cat-stationery.jpg" },
]

const tags = [
  "Business Cards",
  "Calendars",
  "Flyers",
  "Folded Leaflets",
  "Greeting Cards",
  "Letterheads",
  "Notepads",
  "Packaging",
  "Postcards",
  "Roller Banners",
  "Stickers",
  "Brochures",
]

export function Categories() {
  return (
    <section className="bg-secondary py-20 lg:py-28" aria-label="Product categories">
      <div className="mx-auto max-w-7xl px-4">
        {/* Tags */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              {tag}
            </a>
          ))}
        </div>

        {/* Category Cards */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Top Categories
            </p>
            <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                Premium product categories you can customize
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Ideal for creators and online businesses who hate complexity but want results.
            </p>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 md:inline-flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group relative overflow-hidden rounded-2xl block"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-mono text-2xl font-bold text-accent-foreground">
                  {cat.name}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Shop Now <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
