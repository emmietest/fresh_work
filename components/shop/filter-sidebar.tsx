"use client"

import { useState } from "react"
import { categories, priceRanges, ratings } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface FilterSidebarProps {
  selectedCategories: string[]
  selectedPriceRange: string
  selectedRating: number | null
  inStockOnly: boolean
  onCategoryChange: (category: string) => void
  onPriceRangeChange: (range: string) => void
  onRatingChange: (rating: number | null) => void
  onInStockChange: (inStock: boolean) => void
  onReset: () => void
}

export function FilterSidebar({
  selectedCategories,
  selectedPriceRange,
  selectedRating,
  inStockOnly,
  onCategoryChange,
  onPriceRangeChange,
  onRatingChange,
  onInStockChange,
  onReset,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    rating: true,
    stock: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="w-full bg-white rounded-lg border border-border p-6 sticky top-24 max-h-[calc(100vh-96px)] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg">Filters</h3>
        {(selectedCategories.length > 0 ||
          selectedPriceRange ||
          selectedRating ||
          inStockOnly) && (
          <button
            onClick={onReset}
            className="text-xs text-primary hover:underline font-medium"
          >
            Reset
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6 pb-6 border-b border-border">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full mb-3 font-semibold text-sm"
        >
          <span>Category</span>
          <span className="text-xs">{expandedSections.category ? "−" : "+"}</span>
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 cursor-pointer hover:bg-secondary p-2 rounded"
              >
                <Checkbox
                  checked={selectedCategories.includes(cat)}
                  onCheckedChange={() => onCategoryChange(cat)}
                  className="cursor-pointer"
                />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6 pb-6 border-b border-border">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full mb-3 font-semibold text-sm"
        >
          <span>Price</span>
          <span className="text-xs">{expandedSections.price ? "−" : "+"}</span>
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            {priceRanges.map((range, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 cursor-pointer hover:bg-secondary p-2 rounded"
              >
                <Checkbox
                  checked={selectedPriceRange === `${range.min}-${range.max}`}
                  onCheckedChange={() =>
                    onPriceRangeChange(
                      selectedPriceRange === `${range.min}-${range.max}`
                        ? ""
                        : `${range.min}-${range.max}`
                    )
                  }
                  className="cursor-pointer"
                />
                <span className="text-sm">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="mb-6 pb-6 border-b border-border">
        <button
          onClick={() => toggleSection("rating")}
          className="flex items-center justify-between w-full mb-3 font-semibold text-sm"
        >
          <span>Rating</span>
          <span className="text-xs">{expandedSections.rating ? "−" : "+"}</span>
        </button>
        {expandedSections.rating && (
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label
                key={rating.stars}
                className="flex items-center gap-3 cursor-pointer hover:bg-secondary p-2 rounded"
              >
                <Checkbox
                  checked={selectedRating === rating.stars}
                  onCheckedChange={() =>
                    onRatingChange(selectedRating === rating.stars ? null : rating.stars)
                  }
                  className="cursor-pointer"
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm">{rating.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {"★".repeat(rating.stars)}
                  </span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Stock */}
      <div>
        <button
          onClick={() => toggleSection("stock")}
          className="flex items-center justify-between w-full mb-3 font-semibold text-sm"
        >
          <span>Availability</span>
          <span className="text-xs">{expandedSections.stock ? "−" : "+"}</span>
        </button>
        {expandedSections.stock && (
          <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary p-2 rounded">
            <Checkbox
              checked={inStockOnly}
              onCheckedChange={onInStockChange}
              className="cursor-pointer"
            />
            <span className="text-sm">In Stock Only</span>
          </label>
        )}
      </div>
    </div>
  )
}
