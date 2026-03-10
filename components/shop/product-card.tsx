"use client"

import { Product } from "@/lib/products"
import { useWishlist } from "@/context/wishlist-context"
import { useComparison } from "@/context/comparison-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { QuickViewModal } from "./quick-view-modal"

interface ProductCardProps {
  product: Product
  displayType?: "grid" | "list"
}

export function ProductCard({ product, displayType = "grid" }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { isInCompare, addToCompare, removeFromCompare } = useComparison()
  const [showQuickView, setShowQuickView] = useState(false)

  const inWishlist = isInWishlist(product.id)
  const inCompare = isInCompare(product.id)
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  if (displayType === "list") {
    return (
      <>
        <div className="flex gap-4 bg-white rounded-lg border border-border p-4 hover:shadow-md transition">
          <Link href={`/shop/product/${product.id}`} className="w-24 h-24 shrink-0 relative bg-secondary rounded">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="96px"
              className="object-cover rounded"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                <span className="text-white font-semibold text-sm">Out of Stock</span>
              </div>
            )}
          </Link>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <Link href={`/shop/product/${product.id}`} className="hover:text-primary">
                  <h3 className="font-semibold text-sm">{product.name}</h3>
                </Link>
                <p className="text-xs text-muted-foreground">{product.category}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">★</span>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm line-through text-muted-foreground">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                      -{discount}%
                    </span>
                  </>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={inWishlist ? "default" : "outline"}
                  onClick={() =>
                    inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id)
                  }
                >
                  {inWishlist ? "❤" : "🤍"}
                </Button>
                <Button size="sm" variant="outline" onClick={() => setShowQuickView(true)}>
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>

        {showQuickView && (
          <QuickViewModal product={product} onClose={() => setShowQuickView(false)} />
        )}
      </>
    )
  }

  return (
    <>
      <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition group">
        {/* Image Container */}
        <Link href={`/shop/product/${product.id}`}>
          <div className="relative bg-secondary aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition duration-300"
            />

            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold">Out of Stock</span>
              </div>
            )}

            {discount > 0 && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                -{discount}%
              </div>
            )}

            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end justify-center pb-4 gap-2">
              <div className="opacity-0 group-hover:opacity-100 transition flex gap-2">
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowQuickView(true)
                  }}
                  className="gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Quick View
                </Button>
                <Button
                  size="sm"
                  variant={inCompare ? "default" : "outline"}
                  onClick={(e) => {
                    e.preventDefault()
                    inCompare ? removeFromCompare(product.id) : addToCompare(product)
                  }}
                >
                  ⚖
                </Button>
              </div>
            </div>
          </div>
        </Link>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <p className="text-xs text-primary font-medium mb-1">{product.category}</p>
              <Link href={`/shop/product/${product.id}`} className="hover:text-primary">
                <h3 className="font-semibold text-sm line-clamp-2 mb-1">{product.name}</h3>
              </Link>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <span className="text-xs">★</span>
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm line-through text-muted-foreground">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1"
              disabled={!product.inStock}
              variant={!product.inStock ? "outline" : "default"}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button
              size="sm"
              variant={inWishlist ? "default" : "outline"}
              onClick={() =>
                inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id)
              }
            >
              {inWishlist ? "❤" : "🤍"}
            </Button>
          </div>
        </div>
      </div>

      {showQuickView && (
        <QuickViewModal product={product} onClose={() => setShowQuickView(false)} />
      )}
    </>
  )
}
