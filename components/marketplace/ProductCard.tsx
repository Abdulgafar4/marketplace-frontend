import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import Link from "next/link";

const ProductCard: React.FC<{
  product: Product;
  onWishlist?: boolean;
  onToggleWishlist?: () => void;
  link: string;
}> = ({ product, onWishlist, onToggleWishlist, link }) => (
  <Link href={link} className="w-full max-w-sm">
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow min-h-[400px]">
      <CardHeader className="p-4">
        <div className="relative pb-[100%]">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          {onToggleWishlist && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleWishlist}
              className="p-1"
            >
              <Heart
                className={`w-5 h-5 ${
                  onWishlist ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
          )}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < product.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating})</span>
        </div>
        <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600">
          {product.stockCount > 0
            ? `${product.stockCount} in stock`
            : "Out of stock"}
        </p>
      </CardContent>
    </Card>
  </Link>
);

export default ProductCard;