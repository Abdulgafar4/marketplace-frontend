"use client";

import React, { useState, useMemo } from "react";
import { dummyProducts } from "../api/dummyData";
import { SORT_OPTIONS } from "@/lib/constants";
import Filters from "@/components/marketplace/Filters";
import ProductCard from "@/components/marketplace/ProductCard";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {useWishlist} from "@/lib/hooks/useWishlist";
import {useProducts} from "@/lib/hooks/useProduct";
import { useSellers} from "@/lib/hooks/useSeller";
import Loader from "@/components/loading";

const Marketplace: React.FC = () => {
  const {data: products, isLoading} = useProducts();
  const { data: profile} = useSellers();

  const [sortBy, setSortBy] = useState("newest");
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 1000] as [number, number],
    minRating: 0,
    location: "all",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const { data: wishlistItems = [] } = useWishlist();

  const priceRange = useMemo(() => {
    if (!products || products.length === 0) {
      return { min: 0, max: 0 }; // or whatever default values you want
    }
    const prices = products.map((p) => p.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, [products]);

  // Get unique cities from products
  const cities = useMemo(() => {
    if (!profile || !Array.isArray(profile)) {
      return ["all"]; // Default value when no profile data exists
    }

    const uniqueCities = Array.from(
        new Set(profile.map((p) => p.location).filter(Boolean))
    );
    return ["all", ...uniqueCities.sort()];
  }, [profile]);

  const filteredAndSortedProducts = useMemo(() => {
    return products && products
      .filter((product) => {
        const matchesCategory =
          filters.category === "all" || product.category === filters.category;
        const matchesPrice =
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1];
        const matchesCity =
          filters.location === "all" ||
          product.seller.location === filters.location;
        // const matchesRating = product.rating && (product?.rating >= filters.minRating);
        const matchesSearch = searchQuery
          ? product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          : true;

        return (
          matchesCategory &&
          matchesPrice &&
          // matchesRating &&
          matchesSearch &&
          matchesCity
        );
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          // case "rating":
          //   return b.rating && a.rating ? b?.rating - a?.rating : 0;
          case "newest":
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          default:
            return 0;
        }
      });
  }, [products, sortBy, filters, searchQuery]);

  const totalPages = filteredAndSortedProducts && Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredAndSortedProducts && filteredAndSortedProducts.slice(startIndex, endIndex);

  const handlePriceRangeChange = (value: number[]) => {
    if (value.length === 2) {
      setFilters((prev) => ({ ...prev, priceRange: [value[0], value[1]] }));
    }
  };

  const resetFilters = () => {
    setFilters({
      category: "all",
      priceRange: [priceRange.min, priceRange.max],
      minRating: 0,
      location: "all",
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const productsWithWishlistStatus = React.useMemo(() => {
    const wishlistSet = new Set(wishlistItems.map(item => item.id)); // Faster lookup with Set
    return currentProducts && currentProducts.map(product => ({
      ...product,
      isInWishlist: wishlistSet.has(product.id),
    }));
  }, [currentProducts, wishlistItems]);

  return (
      <div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 min-h-screen">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-2 xl:gap-10 mt-2 md:mt-6">
            <aside className="w-full lg:w-1/4 xl:w-1/5 lg:block">
              <div className="sticky top-20 overflow-hidden">
                  <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 max-h-[calc(100vh-160px)]">
                    <Filters
                        filters={filters}
                        setFilters={setFilters}
                        priceRange={priceRange}
                        handlePriceRangeChange={handlePriceRangeChange}
                        resetFilters={resetFilters}
                        location={cities}
                        setSearchQuery={setSearchQuery}
                    />
                  </div>
              </div>
            </aside>

            <main className="w-full lg:w-3/4">
              <div className="pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="w-full sm:w-1/2">
                    <label className="text-sm font-medium block mb-2">
                      Sort By
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full dark:border-black">
                        <SelectValue placeholder="Select an option"/>
                      </SelectTrigger>
                      <SelectContent>
                        {SORT_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value} className=" dark:bg-gray-900">
                              {option.label}
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label className="text-sm font-medium block mb-2">
                      Items per page
                    </label>
                    <Select
                        value={itemsPerPage.toString()}
                        onValueChange={handleItemsPerPageChange}
                    >
                      <SelectTrigger className="w-full dark:border-black">
                        <SelectValue placeholder="Select"/>
                      </SelectTrigger>
                      <SelectContent className=" dark:bg-gray-900">
                        <SelectItem value="12">12 items</SelectItem>
                        <SelectItem value="24">24 items</SelectItem>
                        <SelectItem value="48">48 items</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div
                  className="grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {isLoading ? (
                    <div className="col-span-full flex justify-center items-center min-h-[200px]">
                      <Loader message="Loading Products..."/>
                    </div>
                ) : (
                    productsWithWishlistStatus && productsWithWishlistStatus.map((product) => {
                      return (
                          <ProductCard
                              key={product.$id}
                              product={product}
                              link={`/marketplace/${product.$id}`}
                              isInWishlist={product.isInWishlist}
                          />
                      );
                    })
                )}
              </div>

              {/* Pagination */}
              <div className="mt-8 p-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) handlePageChange(currentPage - 1);
                          }}
                      />
                    </PaginationItem>

                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                  href="#"
                                  isActive={page === currentPage}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(page);
                                  }}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                        );
                      } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                      ) {
                        return <PaginationEllipsis key={page}/>;
                      }
                      return null;
                    })}

                    <PaginationItem>
                      <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (totalPages && (currentPage < totalPages))
                              handlePageChange(currentPage + 1);
                          }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </main>
          </div>
        </div>
      </div>
  );
};

export default Marketplace;
