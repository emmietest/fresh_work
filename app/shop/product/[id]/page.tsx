import React from "react"
import { products } from "@/lib/products"
import ProductPageClient from "./ProductPageClient"

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const product = products.find((p) => p.id === id)

  return <ProductPageClient product={product || null} />
}
