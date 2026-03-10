"use client"

import { useComparison } from "@/context/comparison-context"
import { sortOptions } from "@/lib/products"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ShopControlsProps {
  sort: string
  onSortChange: (sort: string) => void
  displayType: "grid" | "list"
  onDisplayChange: (type: "grid" | "list") => void
  totalProducts: number
  resultsCount: number
}

export function ShopControls({
  sort,
  onSortChange,
  displayType,
  onDisplayChange,
  totalProducts,
  resultsCount,
}: ShopControlsProps) {
  const { compareList } = useComparison()

  return (
    <div className="bg-white rounded-lg border border-border p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{resultsCount}</span> of{" "}
          <span className="font-semibold text-foreground">{totalProducts}</span> products
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Sort by:</label>
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 border border-border rounded-md text-sm bg-white"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <button
              onClick={() => onDisplayChange("grid")}
              className={`p-2 border rounded ${
                displayType === "grid"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-primary"
              }`}
              title="Grid view"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 12.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
              </svg>
            </button>
            <button
              onClick={() => onDisplayChange("list")}
              className={`p-2 border rounded ${
                displayType === "list"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-primary"
              }`}
              title="List view"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>
        </div>

        {compareList.length > 0 && (
          <Link href="/shop/compare">
            <Button size="sm" variant="outline" className="gap-2">
              <span>Compare ({compareList.length})</span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
