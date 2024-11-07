import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Filters: React.FC<{
  filters: any;
  setFilters: (filters: any) => void;
  priceRange: { min: number; max: number };
  handlePriceRangeChange: (value: number[]) => void;
  resetFilters: () => void;
  location: string[];
}> = ({
  filters,
  setFilters,
  priceRange,
  handlePriceRangeChange,
  resetFilters,
  location,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open on large screens by default
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsOpen(mediaQuery.matches);

    const handleResize = () => setIsOpen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader>
          <CollapsibleTrigger asChild>
            <div className="flex justify-between items-center cursor-pointer dark:hover:bg-black transition-colors">
              <h3 className="font-semibold">Filters</h3>
              <Button variant="ghost" size="sm">
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
              </Button>
            </div>
          </CollapsibleTrigger>
        </CardHeader>

        <CollapsibleContent>
          <CardContent>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium block mb-2">
                  Category
                </label>
                <Select
                  value={filters.category}
                  onValueChange={(value) =>
                    setFilters({ ...filters, category: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] overflow-y-auto">
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">City</h3>
                <Select
                  value={filters.location}
                  onValueChange={(value) =>
                    setFilters((prev: any) => ({ ...prev, location: value }))
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] overflow-y-auto">
                    {location.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city === "all" ? "All Cities" : city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Price Range: ${filters.priceRange[0]} - $
                  {filters.priceRange[1]}
                </label>
                <Slider
                  defaultValue={[priceRange.min, priceRange.max]}
                  min={priceRange.min}
                  max={priceRange.max}
                  step={10}
                  onValueChange={handlePriceRangeChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2 text-gray-900 dark:text-gray-100">
                  Minimum Rating
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating}
                      variant={
                        filters.minRating >= rating ? "default" : "ghost"
                      }
                      size="sm"
                      onClick={() =>
                        setFilters({ ...filters, minRating: rating })
                      }
                      className={`${
                        filters.minRating >= rating
                          ? "bg-gray-800 text-white"
                          : "text-gray-900 dark:text-gray-200"
                      }`}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          filters.minRating >= rating
                            ? "fill-current text-white"
                            : "fill-gray-500 dark:fill-gray-400"
                        }`}
                      />
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default Filters;
