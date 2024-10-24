import React from "react";
import { Star } from "lucide-react";

interface ProductOverviewProps {
  name: string;
  rating: number;
  price: number;
  description: string;
  reviewCount: number;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({
  name,
  rating,
  price,
  description,
  reviewCount,
}) => (
  <div className="space-y-3">
    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
      {name}
    </h1>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600 font-bold dark:text-gray-400">
        ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
      </span>
    </div>
    <p className="text-xl font-bold text-gray-900 dark:text-white">
      ${price.toFixed(2)}
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
  </div>
);

export default ProductOverview;
