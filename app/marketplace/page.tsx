"use client";
import React, { useState, useMemo } from "react";
import { dummyProducts } from "../api/dummyData";
import { SORT_OPTIONS } from "@/lib/constants";
import SearchBar from "@/components/marketplace/SearchBar";
import Filters from "@/components/marketplace/Filters";
import ProductCard from "@/components/marketplace/ProductCard";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const Marketplace: React.FC = () => {
  const [products] = useState<Product[]>(dummyProducts);
  const [sortBy, setSortBy] = useState("newest");
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 1000] as [number, number],
    minRating: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const priceRange = useMemo(() => {
    const prices = products.map((p) => p.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, [products]);

  const filteredAndSortedProducts = React.useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        const matchesCategory =
          filters.category === "all" || product.category === filters.category;

        // Other filters (price, rating, etc.)
        const matchesPrice =
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1];
        const matchesRating = product.rating >= filters.minRating;
        const matchesSearch = searchQuery
          ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          : true;

        return (
          matchesCategory && matchesPrice && matchesRating && matchesSearch
        );
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          case "newest":
            return b.createdAt.getTime() - a.createdAt.getTime();
          default:
            return 0;
        }
      });
  }, [products, sortBy, filters, searchQuery]);

  const handlePriceRangeChange = (value: number[]) => {
    if (value.length === 2) {
      setFilters((prev) => ({ ...prev, priceRange: [value[0], value[1]] }));
    }
  };
  console.log("Selected category:", filters.category);

  const resetFilters = () => {
    setFilters({
      category: "all",
      priceRange: [priceRange.min, priceRange.max],
      minRating: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar onSearch={setSearchQuery} />

        <div className="flex space-x-4 mt-8">
          <div className="w-1/4">
            <Filters
              filters={filters}
              setFilters={setFilters}
              priceRange={priceRange}
              handlePriceRangeChange={handlePriceRangeChange}
              resetFilters={resetFilters}
            />
          </div>

          <div className="w-3/4">
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full py-2 px-3 border rounded-md">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {SORT_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  link={`/marketplace/${product.id}`}
                  //  onWishlist={product.isWishlist}
                  onToggleWishlist={() => {
                    // Logic to toggle wishlist
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
