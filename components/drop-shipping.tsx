import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  "Catalog of 350+ products",
  "Easy order management, transparency in production",
  "Competitive & flexible product pricing",
]

export function DropShipping() {
  return (
    <section className="bg-background py-20 lg:py-28" id="about" aria-label="How print-on-demand drop shipping works">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Our clients say
            </p>
            <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <span className="text-balance">
                How print-on-demand drop shipping works
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {"Everyone's local printer, we partner with more than 50 print on demand suppliers in over 10 countries and counting, enabling us to fulfil orders near your customers and reduce carbon emissions in the process."}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Discover Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/team-working.jpg"
              alt="Team working together on print designs"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
