"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Share2, Upload, ChevronDown, ChevronUp } from "lucide-react"
import { TopBar, Navbar } from "@/components/header"
import { Footer } from "@/components/footer"
import { Product, products } from "@/lib/products"
import { useWishlist } from "@/context/wishlist-context"
import { useComparison } from "@/context/comparison-context"
import { Button } from "@/components/ui/button"

interface ProductPageClientProps {
  product: Product | null
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  if (!product) {
    return (
      <>
        <TopBar />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product not found</h1>
            <Link href="/shop" className="text-primary hover:underline">
              Back to shop
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "")
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "")
  const [designFile, setDesignFile] = useState<File | null>(null)
  const [expandedSection, setExpandedSection] = useState<string | null>("description")
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rating, setRating] = useState(5)
  const [reviewText, setReviewText] = useState("")

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { addToCompare } = useComparison()

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product.id)
    }
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle review submission
    setShowReviewForm(false)
    setReviewText("")
    setRating(5)
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Additional images could go here */}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-muted-foreground">{product.category}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <span className={`inline-block h-3 w-3 rounded-full ${
                  product.inStock ? "bg-green-500" : "bg-red-500"
                }`}></span>
                <span className="text-sm font-medium">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground">{product.description}</p>

              {/* Options */}
              {(product.colors?.length || 0) > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Color</h3>
                  <div className="flex gap-2">
                    {product.colors?.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border rounded-lg ${
                          selectedColor === color
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(product.sizes?.length || 0) > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Size</h3>
                  <div className="flex gap-2">
                    {product.sizes?.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="font-semibold mb-3">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button className="flex-1" size="lg" disabled={!product.inStock}>
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={toggleWishlist}
                >
                  {isInWishlist(product.id) ? "❤️" : "🤍"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => addToCompare(product)}
                >
                  Compare
                </Button>
              </div>

              {/* Share */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <span className="text-sm font-medium">Share:</span>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-border pt-12">
            <div className="space-y-4">
              {/* Description */}
              <div>
                <button
                  onClick={() => setExpandedSection(expandedSection === "description" ? null : "description")}
                  className="flex items-center justify-between w-full py-4 border-b border-border"
                >
                  <h3 className="text-lg font-semibold">Description</h3>
                  {expandedSection === "description" ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedSection === "description" && (
                  <div className="py-4">
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                )}
              </div>

              {/* Specifications */}
              <div>
                <button
                  onClick={() => setExpandedSection(expandedSection === "specs" ? null : "specs")}
                  className="flex items-center justify-between w-full py-4 border-b border-border"
                >
                  <h3 className="text-lg font-semibold">Specifications</h3>
                  {expandedSection === "specs" ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedSection === "specs" && (
                  <div className="py-4">
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="font-medium capitalize">{key}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reviews */}
              <div>
                <button
                  onClick={() => setExpandedSection(expandedSection === "reviews" ? null : "reviews")}
                  className="flex items-center justify-between w-full py-4 border-b border-border"
                >
                  <h3 className="text-lg font-semibold">Reviews ({product.reviews})</h3>
                  {expandedSection === "reviews" ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedSection === "reviews" && (
                  <div className="py-4 space-y-4">
                    {/* Sample reviews */}
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">John Doe</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Great product! Exactly what I was looking for.
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setShowReviewForm(!showReviewForm)}
                    >
                      Write a Review
                    </Button>

                    {showReviewForm && (
                      <form onSubmit={handleReviewSubmit} className="border border-border rounded-lg p-4 space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Rating</label>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => setRating(i + 1)}
                                className="text-2xl"
                              >
                                <Star
                                  className={`w-6 h-6 ${
                                    i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Review</label>
                          <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            className="w-full p-3 border border-border rounded-lg"
                            rows={4}
                            placeholder="Write your review here..."
                          />
                        </div>
                        <Button type="submit">Submit Review</Button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-16">
              <h2 className="text-2xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((related) => (
                  <div key={related.id} className="group">
                    <Link href={`/shop/product/${related.id}`}>
                      <div className="aspect-square bg-secondary rounded-lg overflow-hidden mb-4">
                        <Image
                          src={related.image}
                          alt={related.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition">
                        {related.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">{related.category}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">${related.price.toFixed(2)}</span>
                        {related.originalPrice && (
                          <span className="text-sm line-through text-muted-foreground">
                            ${related.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}