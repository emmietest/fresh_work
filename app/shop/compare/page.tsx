"use client"

import { useComparison } from "@/context/comparison-context"
import { useWishlist } from "@/context/wishlist-context"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useComparison()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  if (compareList.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Compare Products</h1>
              <p className="text-muted-foreground mb-8">
                You haven't added any products to compare yet
              </p>
              <Link href="/shop">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Get all unique spec keys
  const allSpecKeys = new Set<string>()
  compareList.forEach((product) => {
    Object.keys(product.specs).forEach((key) => allSpecKeys.add(key))
  })

  const specKeys = Array.from(allSpecKeys)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Compare Products</h1>
              <p className="text-muted-foreground">
                Comparing {compareList.length} product{compareList.length !== 1 ? "s" : ""}
              </p>
            </div>
            {compareList.length > 0 && (
              <Button variant="outline" onClick={clearCompare}>
                Clear All
              </Button>
            )}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg border border-border overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="text-left p-4 font-semibold w-48 sticky left-0 bg-secondary z-10">
                    Specification
                  </th>
                  {compareList.map((product) => (
                    <th key={product.id} className="text-center p-4 font-semibold min-w-48">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-32 h-32 bg-muted rounded relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="128px"
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-sm line-clamp-2">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.category}</p>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Price Row */}
                <tr className="border-b border-border hover:bg-secondary/50">
                  <td className="p-4 font-semibold text-sm sticky left-0 bg-white">Price</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="text-center p-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-xs line-through text-muted-foreground">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Rating Row */}
                <tr className="border-b border-border hover:bg-secondary/50">
                  <td className="p-4 font-semibold text-sm sticky left-0 bg-white">Rating</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="text-center p-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < Math.floor(product.rating)
                                  ? "text-primary"
                                  : "text-muted"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Stock Status */}
                <tr className="border-b border-border hover:bg-secondary/50">
                  <td className="p-4 font-semibold text-sm sticky left-0 bg-white">
                    Stock Status
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="text-center p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          product.inStock
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Specs */}
                {specKeys.map((key) => (
                  <tr key={key} className="border-b border-border hover:bg-secondary/50">
                    <td className="p-4 font-semibold text-sm sticky left-0 bg-white capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </td>
                    {compareList.map((product) => (
                      <td key={product.id} className="text-center p-4 text-sm">
                        {product.specs[key as keyof typeof product.specs] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Personalization Options */}
                <tr className="border-b border-border hover:bg-secondary/50">
                  <td className="p-4 font-semibold text-sm sticky left-0 bg-white">
                    Personalization
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="text-center p-4">
                      {product.personalizationOptions &&
                      product.personalizationOptions.length > 0 ? (
                        <div className="flex flex-wrap gap-2 justify-center">
                          {product.personalizationOptions.map((option) => (
                            <span
                              key={option}
                              className="bg-secondary text-foreground px-2 py-1 rounded text-xs font-medium"
                            >
                              {option}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Actions */}
                <tr className="bg-secondary">
                  <td className="p-4 sticky left-0 bg-secondary"></td>
                  {compareList.map((product) => (
                    <td key={product.id} className="text-center p-4">
                      <div className="flex flex-col gap-2">
                        <Button
                          size="sm"
                          className="w-full"
                          disabled={!product.inStock}
                        >
                          Add to Cart
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            isInWishlist(product.id)
                              ? removeFromWishlist(product.id)
                              : addToWishlist(product.id)
                          }
                        >
                          {isInWishlist(product.id) ? "❤" : "🤍"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCompare(product.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to decide?</h2>
            <p className="text-muted-foreground mb-4">
              Choose your favorite and add it to your cart
            </p>
            <Link href="/shop">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
