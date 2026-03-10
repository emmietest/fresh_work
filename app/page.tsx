import { TopBar, Navbar } from "@/components/header"
import { Hero, FeatureStrip } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Categories } from "@/components/categories"
import { Reasons } from "@/components/reasons"
import { Products } from "@/components/products"
import { Features } from "@/components/features"
import { BulkCTA, Partners } from "@/components/stats-cta"
import { Testimonials } from "@/components/testimonials"
import { DropShipping } from "@/components/drop-shipping"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <HowItWorks />
        <Categories />
        <Reasons />
        <Products />
        <Features />
        <BulkCTA />
        <Partners />
        <Testimonials />
        <DropShipping />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
