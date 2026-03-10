"use client"

import { Product } from "@/lib/products"
import { useWishlist } from "@/context/wishlist-context"
import { useComparison } from "@/context/comparison-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

interface QuickViewModalProps {
  product: Product
  onClose: () => void
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { isInCompare, addToCompare, removeFromCompare } = useComparison()
  const [quantity, setQuantity] = useState(1)

  const inWishlist = isInWishlist(product.id)
  const inCompare = isInCompare(product.id)
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="sticky top-0 bg-white border-b border-border p-4 flex items-center justify-between">
          <h2 className="font-bold text-lg">Quick View</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <div className="bg-secondary aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {discount > 0 && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                -{discount}%
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-xs text-primary font-medium mb-2">{product.category}</p>
            <h3 className="font-bold text-2xl mb-2">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? "text-primary" : "text-muted"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg line-through text-muted-foreground">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Specs */}
            <div className="mb-6 pb-6 border-b border-border">
              <h4 className="font-semibold text-sm mb-3">Specifications</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {Object.entries(product.specs).map(
                  ([key, value]) =>
                    value && (
                      <div key={key}>
                        <span className="text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, " $1")}:
                        </span>
                        <p className="font-medium">{value}</p>
                      </div>
                    )
                )}
              </div>
            </div>

            {/* Personalization Options */}
            {product.personalizationOptions && product.personalizationOptions.length > 0 && (
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-semibold text-sm mb-3">Personalization</h4>
                <div className="flex flex-wrap gap-2">
                  {product.personalizationOptions.map((option) => (
                    <span
                      key={option}
                      className="bg-secondary text-foreground px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-secondary"
                >
                  −
                </button>
                <span className="px-4 py-2 border-l border-r border-border text-center w-12">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-secondary"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Button
                size="lg"
                className="w-full gap-2"
                disabled={!product.inStock}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </Button>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={inWishlist ? "default" : "outline"}
                  className="flex-1"
                  onClick={() =>
                    inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id)
                  }
                >
                  {inWishlist ? "❤ Saved" : "🤍 Save"}
                </Button>
                <Button
                  size="sm"
                  variant={inCompare ? "default" : "outline"}
                  className="flex-1"
                  onClick={() =>
                    inCompare ? removeFromCompare(product.id) : addToCompare(product)
                  }
                >
                  {inCompare ? "⚖ Comparing" : "⚖ Compare"}
                </Button>
              </div>
            </div>

            {!product.inStock && (
              <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded text-red-700 text-sm font-medium">
                This product is currently out of stock
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
