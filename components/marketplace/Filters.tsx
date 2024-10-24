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
import { Star } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const Filters: React.FC<{
  filters: any;
  setFilters: (filters: any) => void;
  priceRange: { min: number; max: number };
  handlePriceRangeChange: (value: number[]) => void;
  resetFilters: () => void;
}> = ({
  filters,
  setFilters,
  priceRange,
  handlePriceRangeChange,
  resetFilters,
}) => (
  <Card>
    <CardHeader>
      <h3 className="font-semibold">Filters</h3>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium block mb-2">Category</label>
          <Select
            value={filters.category}
            onValueChange={(value) =>
              setFilters({ ...filters, category: value })
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
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
          <label className="text-sm font-medium block mb-2">
            Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
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
                variant={filters.minRating >= rating ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilters({ ...filters, minRating: rating })}
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

        <Button variant="outline" className="w-full" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default Filters;
