"use client"

import { useState, useMemo } from "react"
import { products, sortOptions, priceRanges, ratings } from "@/lib/products"
import { TopBar, Navbar } from "@/components/header"
import { Footer } from "@/components/footer"
import { FilterSidebar } from "@/components/shop/filter-sidebar"
import { ShopControls } from "@/components/shop/shop-controls"
import { ProductCard } from "@/components/shop/product-card"

const ITEMS_PER_PAGE = 15

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("")
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortBy, setSortBy] = useState("popularity")
  const [displayType, setDisplayType] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }

      // Price range filter
      if (selectedPriceRange) {
        const [min, max] = selectedPriceRange.split("-").map(Number)
        if (product.price < min || product.price > max) {
          return false
        }
      }

      // Rating filter
      if (selectedRating && product.rating < selectedRating) {
        return false
      }

      // Stock filter
      if (inStockOnly && !product.inStock) {
        return false
      }

      return true
    })
  }, [selectedCategories, selectedPriceRange, selectedRating, inStockOnly])

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case "reviews":
        sorted.sort((a, b) => b.reviews - a.reviews)
        break
      case "newest":
        // Assume higher ID = newer
        sorted.sort((a, b) => Number(b.id) - Number(a.id))
        break
      case "popularity":
      default:
        // Sort by reviews as proxy for popularity
        sorted.sort((a, b) => b.reviews - a.reviews)
        break
    }

    return sorted
  }, [filteredProducts, sortBy])

  // Paginate products
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE)
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const endIdx = startIdx + ITEMS_PER_PAGE
  const paginatedProducts = sortedProducts.slice(startIdx, endIdx)

  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      setSelectedCategories([])
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
      )
    }
    setCurrentPage(1)
  }

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(range)
    setCurrentPage(1)
  }

  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating)
    setCurrentPage(1)
  }

  const handleInStockChange = (inStock: boolean) => {
    setInStockOnly(inStock)
    setCurrentPage(1)
  }

  const handleReset = () => {
    setSelectedCategories([])
    setSelectedPriceRange("")
    setSelectedRating(null)
    setInStockOnly(false)
    setCurrentPage(1)
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb & Title */}
        <div className="bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-2">Shop</h1>
            <p className="text-muted-foreground">
              Discover our premium printing and customization products
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar
                selectedCategories={selectedCategories}
                selectedPriceRange={selectedPriceRange}
                selectedRating={selectedRating}
                inStockOnly={inStockOnly}
                onCategoryChange={handleCategoryChange}
                onPriceRangeChange={handlePriceRangeChange}
                onRatingChange={handleRatingChange}
                onInStockChange={handleInStockChange}
                onReset={handleReset}
              />
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              {/* Controls */}
              <ShopControls
                sort={sortBy}
                onSortChange={setSortBy}
                displayType={displayType}
                onDisplayChange={setDisplayType}
                totalProducts={products.length}
                resultsCount={sortedProducts.length}
              />

              {/* Product Grid/List */}
              {paginatedProducts.length > 0 ? (
                <>
                  <div
                    className={
                      displayType === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                        : "flex flex-col gap-4"
                    }
                  >
                    {paginatedProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        displayType={displayType}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-2">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-border rounded hover:bg-secondary disabled:opacity-50"
                      >
                        Previous
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded flex items-center justify-center ${
                            currentPage === page
                              ? "bg-primary text-primary-foreground"
                              : "border border-border hover:bg-secondary"
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-border rounded hover:bg-secondary disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-lg font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to find what you're looking for
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
