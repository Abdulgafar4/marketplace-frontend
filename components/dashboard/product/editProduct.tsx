"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stockCount: number;
  condition: string;
  imageUrl: string;
  dimensions: string;
  weight: string;
  material: string;
  shippingMethods: string;
  shippingCost: number;
  estimatedDelivery: string;
};

export default function EditProduct({
  product,
  onEditProduct,
  categories,
}: {
  product: Product;
  onEditProduct: (product: Product) => void;
  categories: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState<Product>(product);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEditProduct(editedProduct);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Make changes to your product listing.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={editedProduct.name}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, name: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={editedProduct.price}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    price: parseFloat(e.target.value),
                  })
                }
                required
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={editedProduct.description}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    description: e.target.value,
                  })
                }
                required
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={editedProduct.category}
                onValueChange={(value) =>
                  setEditedProduct({ ...editedProduct, category: value })
                }
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stockCount">Stock Count</Label>
              <Input
                id="stockCount"
                type="number"
                value={editedProduct.stockCount}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    stockCount: parseInt(e.target.value),
                  })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="condition">Condition</Label>
              <Select
                value={editedProduct.condition}
                onValueChange={(value) =>
                  setEditedProduct({ ...editedProduct, condition: value })
                }
              >
                <SelectTrigger id="condition">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                  <SelectItem value="refurbished">Refurbished</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Main Image URL</Label>
              <Input
                id="imageUrl"
                type="url"
                value={editedProduct.imageUrl}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    imageUrl: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dimensions">Dimensions</Label>
              <Input
                id="dimensions"
                value={editedProduct.dimensions}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    dimensions: e.target.value,
                  })
                }
                placeholder="e.g., 10x5x2 inches"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                value={editedProduct.weight}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, weight: e.target.value })
                }
                placeholder="e.g., 2.5 lbs"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="material">Material</Label>
              <Input
                id="material"
                value={editedProduct.material}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    material: e.target.value,
                  })
                }
                placeholder="e.g., Plastic, Metal, etc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shippingMethods">Shipping Methods</Label>
              <Input
                id="shippingMethods"
                value={editedProduct.shippingMethods}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    shippingMethods: e.target.value,
                  })
                }
                placeholder="e.g., Standard, Express"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shippingCost">Shipping Cost</Label>
              <Input
                id="shippingCost"
                type="number"
                step="0.01"
                value={editedProduct.shippingCost}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    shippingCost: parseFloat(e.target.value),
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estimatedDelivery">Estimated Delivery</Label>
              <Input
                id="estimatedDelivery"
                value={editedProduct.estimatedDelivery}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    estimatedDelivery: e.target.value,
                  })
                }
                placeholder="e.g., 3-5 business days"
              />
            </div>
          </div>
          <Button type="submit">Update Product</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
