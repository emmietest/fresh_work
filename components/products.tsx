"use client"

import Image from "next/image"
import { Heart, Eye, ArrowRight } from "lucide-react"

const products = [
  {
    name: "Custom Stickers",
    image: "/images/product-stickers.jpg",
    price: "$9.95",
    priceMax: "$39.95",
  },
  {
    name: "Phone Case",
    image: "/images/product-phonecase.jpg",
    price: "$19.95",
    priceMax: "$24.95",
  },
  {
    name: "Custom Mug",
    image: "/images/product-mug.jpg",
    price: "$14.95",
    priceMax: "$119.95",
  },
  {
    name: "Tote Bag",
    image: "/images/product-totebag.jpg",
    price: "$12.95",
    priceMax: "$49.95",
  },
  {
    name: "Custom T-Shirt",
    image: "/images/product-tshirt.jpg",
    price: "$19.95",
    priceMax: "$59.95",
  },
  {
    name: "Hoodie",
    image: "/images/product-hoodie.jpg",
    price: "$29.95",
    priceMax: "$159.95",
  },
]

export function Products() {
  return (
    <section className="bg-secondary py-20 lg:py-28" id="products" aria-label="Featured products">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Featured Products
          </p>
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Amazing products ready for your design
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {"Choose from 250+ products for your e-commerce store"}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
}: {
  product: { name: string; image: string; price: string; priceMax: string }
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="eager"
        />
        {/* Hover actions */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-mono text-base font-bold text-card-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {product.price} &ndash; {product.priceMax}
        </p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-accent-foreground transition-all hover:bg-primary hover:text-primary-foreground">
          Personalize
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
