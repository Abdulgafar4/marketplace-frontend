"use client";

import { useState } from "react";
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
import { Plus } from "lucide-react";
import ProductCategory from "./productCategory";

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

const defaultProduct: Product = {
  id: "",
  name: "",
  price: 0,
  description: "",
  category: "",
  stockCount: 0,
  condition: "",
  imageUrl: "",
  dimensions: "",
  weight: "",
  material: "",
  shippingMethods: "",
  shippingCost: 0,
  estimatedDelivery: "",
};

export default function AddProduct({
  onAddProduct,
  categories,
  setCategories,
}: {
  onAddProduct: (product: Product) => void;
  categories: string[];
  setCategories: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<Product>(defaultProduct);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct(defaultProduct);
    setIsOpen(false);
  };

  const handleAddCategory = (newCategory: string) => {
    setCategories((prevCategories: any) => [...prevCategories, newCategory]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Enter the details of your new product listing.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
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
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: parseFloat(e.target.value) })
                }
                required
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                required
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={product.category}
                onValueChange={(value) =>
                  setProduct({ ...product, category: value })
                }
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <div>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                    <div className="flex justify-center w-full">
                      <ProductCategory
                        categories={categories}
                        onAddCategory={handleAddCategory}
                      />
                    </div>
                  </div>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stockCount">Stock Count</Label>
              <Input
                id="stockCount"
                type="number"
                value={product.stockCount}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    stockCount: parseInt(e.target.value),
                  })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="condition">Condition</Label>
              <Select
                value={product.condition}
                onValueChange={(value) =>
                  setProduct({ ...product, condition: value })
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
                value={product.imageUrl}
                onChange={(e) =>
                  setProduct({ ...product, imageUrl: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dimensions">Dimensions</Label>
              <Input
                id="dimensions"
                value={product.dimensions}
                onChange={(e) =>
                  setProduct({ ...product, dimensions: e.target.value })
                }
                placeholder="e.g., 10x5x2 inches"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                value={product.weight}
                onChange={(e) =>
                  setProduct({ ...product, weight: e.target.value })
                }
                placeholder="e.g., 2.5 lbs"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="material">Material</Label>
              <Input
                id="material"
                value={product.material}
                onChange={(e) =>
                  setProduct({ ...product, material: e.target.value })
                }
                placeholder="e.g., Plastic, Metal, etc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shippingMethods">Shipping Methods</Label>
              <Input
                id="shippingMethods"
                value={product.shippingMethods}
                onChange={(e) =>
                  setProduct({ ...product, shippingMethods: e.target.value })
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
                value={product.shippingCost}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    shippingCost: parseFloat(e.target.value),
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estimatedDelivery">Estimated Delivery</Label>
              <Input
                id="estimatedDelivery"
                value={product.estimatedDelivery}
                onChange={(e) =>
                  setProduct({ ...product, estimatedDelivery: e.target.value })
                }
                placeholder="e.g., 3-5 business days"
              />
            </div>
          </div>
          <Button type="submit">Add Product</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
