import Image from "next/image"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "$50K+", label: "Invested in printing equipment" },
  { value: "10K+", label: "Happy customers worldwide" },
  { value: "1.0K+", label: "Person team across North America" },
  { value: "190K+", label: "Products sold by customers" },
]

const partners = [
  "Acme Corp",
  "Globex",
  "Initech",
  "Hooli",
  "Pied Piper",
  "Soylent",
  "Massive Dynamic",
  "Wonka Industries",
]

export function BulkCTA() {
  return (
    <section className="relative overflow-hidden" aria-label="Bulk order call to action">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/85" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center md:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Printed and shipped on demand!
        </p>
        <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
          <span className="text-balance">Ready to buy in bulk & save up to 30%?</span>
        </h2>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Explore More
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

export function Partners() {
  return (
    <section className="bg-background py-20 lg:py-28" aria-label="Partners and statistics">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Partners
          </p>
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              {"We're trusted by 240+ firms & departments across the globe"}
            </span>
          </h2>
        </div>

        {/* Partner logos */}
        <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-20 items-center justify-center rounded-xl border border-border bg-card px-6 transition-colors hover:border-primary/30"
            >
              <span className="font-mono text-sm font-bold text-muted-foreground">
                {partner}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <p className="font-mono text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
