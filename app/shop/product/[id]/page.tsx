"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Share2, Upload, ChevronDown, ChevronUp } from "lucide-react"
import { TopBar, Navbar } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products"
import { useWishlist } from "@/context/wishlist-context"
import { useComparison } from "@/context/comparison-context"
import { Button } from "@/components/ui/button"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const product = products.find((p) => p.id === id)
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

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product.id)
    }
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowReviewForm(false)
    setReviewText("")
    setRating(5)
  }

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Breadcrumb */}
      <nav className="border-b border-border bg-background px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
            <li>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </div>
      </nav>

      <main className="bg-background py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Product Images */}
            <div>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-destructive text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              {/* Thumbnail would go here */}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase">
                  {product.category}
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
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

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-foreground">
                    ${product.salePrice || product.price}
                  </span>
                  {product.salePrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.price}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  SKU: {product.sku}
                </p>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Options */}
              {(product.colors?.length || 0) > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-3">Color</label>
                  <div className="flex gap-2">
                    {product.colors?.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`h-10 w-10 rounded-full border-2 transition ${
                          selectedColor === color
                            ? "border-primary"
                            : "border-border hover:border-primary"
                        }`}
                        style={{ backgroundColor: color === "Red" ? "#ef4444" : color === "Blue" ? "#3b82f6" : color === "Black" ? "#000" : "#fff" }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {(product.sizes?.length || 0) > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-3">Size</label>
                  <div className="flex gap-2">
                    {product.sizes?.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-md transition ${
                          selectedSize === size
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Design Upload */}
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Upload Your Design</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload your design files for personalization
                </p>
                <input
                  type="file"
                  onChange={(e) => setDesignFile(e.target.files?.[0] || null)}
                  className="hidden"
                  id="design-upload"
                  accept="image/*,.pdf"
                />
                <label htmlFor="design-upload">
                  <Button variant="outline" asChild>
                    <span>Choose File</span>
                  </Button>
                </label>
                {designFile && (
                  <p className="text-sm text-primary mt-2">{designFile.name}</p>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-secondary"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center border-0 bg-transparent"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-secondary"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                </div>
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Add to Cart
                </Button>
              </div>

              {/* Wishlist and Compare */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={toggleWishlist}
                  className={isInWishlist(product.id) ? "border-primary text-primary" : ""}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                  {isInWishlist(product.id) ? "Added to Wishlist" : "Add to Wishlist"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => addToCompare(product)}
                >
                  Compare
                </Button>
              </div>

              {/* Share */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <Share2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Share:</span>
                <button className="text-primary hover:underline text-sm">Facebook</button>
                <button className="text-primary hover:underline text-sm">Twitter</button>
              </div>
            </div>
          </div>

          {/* Additional Information Tabs */}
          <div className="mt-16 border-t border-border pt-8">
            <div className="space-y-4">
              {/* Description */}
              <div className="border border-border rounded-lg">
                <button
                  onClick={() => setExpandedSection(expandedSection === "description" ? null : "description")}
                  className="w-full flex items-center justify-between p-4 hover:bg-secondary"
                >
                  <h3 className="font-semibold">Description</h3>
                  <ChevronDown className={`h-4 w-4 transition ${expandedSection === "description" ? "rotate-180" : ""}`} />
                </button>
                {expandedSection === "description" && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground space-y-3">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>

              {/* Specifications */}
              {product.specs && (
                <div className="border border-border rounded-lg">
                  <button
                    onClick={() => setExpandedSection(expandedSection === "specs" ? null : "specs")}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary"
                  >
                    <h3 className="font-semibold">Specifications</h3>
                    <ChevronDown className={`h-4 w-4 transition ${expandedSection === "specs" ? "rotate-180" : ""}`} />
                  </button>
                  {expandedSection === "specs" && (
                    <div className="px-4 pb-4">
                      <table className="w-full text-sm">
                        <tbody>
                          {Object.entries(product.specs).map(([key, value]) => (
                            <tr key={key} className="border-t border-border">
                              <td className="py-2 font-medium text-foreground">{key}</td>
                              <td className="py-2 text-muted-foreground">{String(value)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Reviews */}
              <div className="border border-border rounded-lg">
                <button
                  onClick={() => setExpandedSection(expandedSection === "reviews" ? null : "reviews")}
                  className="w-full flex items-center justify-between p-4 hover:bg-secondary"
                >
                  <h3 className="font-semibold">Reviews ({product.reviews})</h3>
                  <ChevronDown className={`h-4 w-4 transition ${expandedSection === "reviews" ? "rotate-180" : ""}`} />
                </button>
                {expandedSection === "reviews" && (
                  <div className="px-4 pb-4 space-y-6">
                    {/* Review List */}
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="pb-4 border-b border-border last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Reviewer Name</h4>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, j) => (
                                <Star
                                  key={j}
                                  className="h-3 w-3 fill-primary text-primary"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">Great product quality and fast shipping!</p>
                        </div>
                      ))}
                    </div>

                    {/* Add Review Form */}
                    {!showReviewForm ? (
                      <Button
                        onClick={() => setShowReviewForm(true)}
                        variant="outline"
                      >
                        Add a Review
                      </Button>
                    ) : (
                      <form onSubmit={handleReviewSubmit} className="space-y-4 pt-4 border-t border-border">
                        <div>
                          <label className="block text-sm font-medium mb-2">Rating</label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className="p-1"
                              >
                                <Star
                                  className={`h-5 w-5 ${
                                    star <= rating
                                      ? "fill-primary text-primary"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Your Review</label>
                          <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Share your experience with this product"
                            className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                            rows={4}
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            Submit Review
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setShowReviewForm(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Related Products</h2>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/shop/product/${related.id}`}
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-3">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-semibold text-sm group-hover:text-primary">
                      {related.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      ${related.salePrice || related.price}
                    </p>
                  </Link>
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
