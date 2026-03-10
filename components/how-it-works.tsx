import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Pick your product",
    description:
      "From t-shirts to totes, select from our large range of high-quality clothing and accessories to print your design on.",
  },
  {
    number: "02",
    title: "Create your design",
    description:
      "Our free online design tool makes creating simple. Choose from hundreds of fonts, premade designs, or upload your own.",
  },
  {
    number: "03",
    title: "Leave the rest to us",
    description:
      "Once your masterpiece is complete, simply place your order. Your expertly printed item will arrive so quickly.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-20 lg:py-28" id="services" aria-label="How it works">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              How you can fulfill your ideas with{" "}
              <span className="text-primary">Printec</span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Ideal for creators and online businesses who hate complexity but want results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <span className="font-mono text-5xl font-bold text-primary/20 transition-colors group-hover:text-primary/40">
                {step.number}
              </span>
              <h3 className="mt-4 font-mono text-xl font-bold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
