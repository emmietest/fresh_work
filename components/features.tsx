import { Globe, ShieldCheck, Zap, Palette, PenTool, Package } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Local fulfillment",
    description:
      "Get speed and consistency -- our global in-house and partner facilities offer competitive shipping rates and consistent quality.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable quality",
    description:
      "Make a lasting impression by using our industry leading tech, quality inks, and premium materials. 99.99% of our orders reach happy customers.",
  },
  {
    icon: Zap,
    title: "Smooth automation",
    description:
      "When customers buy from you, we receive and fulfill their orders automatically, so you can focus on running your business.",
  },
  {
    icon: Palette,
    title: "Custom branding tools",
    description:
      "Build your reputation by keeping your brand at the forefront. We are a white-label partner, so your customers see only your brand.",
  },
  {
    icon: PenTool,
    title: "Intuitive design tools",
    description:
      "Create unique pieces with our built-in Design Maker, even with no design experience. Simple or intricate, our features are versatile.",
  },
  {
    icon: Package,
    title: "No order minimums",
    description:
      "Save money and avoid any leftover stock. The products you sell are created only when your customer places an order.",
  },
]

export function Features() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28" aria-label="What makes Printec stand out">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Printing Made Easy
          </p>
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              What makes <span className="text-primary">Printec</span> stand out
            </span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 font-mono text-lg font-bold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
