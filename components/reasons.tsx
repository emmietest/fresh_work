import Image from "next/image"
import { Store, ShoppingBag, Package, Truck } from "lucide-react"

const steps = [
  {
    icon: Store,
    title: "Connect your store",
    description: "Connect your store to Printec, add your products, and set your own retail prices.",
  },
  {
    icon: ShoppingBag,
    title: "Customer places their order",
    description: "A customer buys from your store, we charge for fulfillment, and you keep the profit.",
  },
  {
    icon: Package,
    title: "Printec fulfills the order",
    description: "We take care of your order from A to Z, and control the whole fulfillment process.",
  },
  {
    icon: Truck,
    title: "Order ships to your customer",
    description: "Your customer receives their order with your brand attached to it.",
  },
]

export function Reasons() {
  return (
    <section id="about" className="overflow-hidden bg-background py-20 lg:py-28" aria-label="Reasons to choose us">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/printing-press.jpg"
                alt="Printing press in operation"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 rounded-xl bg-primary px-6 py-4 shadow-lg md:-right-6">
              <p className="text-xs font-medium text-primary-foreground/70">Since</p>
              <p className="font-mono text-3xl font-bold text-primary-foreground">2005</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {"Let's get printing"}
            </p>
            <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <span className="text-balance">
                Reasons to get printing started with us
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We have all the equipment, know-how, and everything you need to receive fast,
              reliable printing services with high quality results.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-base font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
