"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
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
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, X, Upload } from "lucide-react";
import { CATEGORIES, CATEGORYSPEC } from "@/lib/constants";
import Image from "next/image";

const defaultProduct: Product = {
  id: "",
  name: "",
  price: 0,
  description: "",
  category: "",
  stockCount: 0,
  condition: "",
  images: [],
  imageUrl: "",
  createdAt: new Date(),
  seller: {
    id: "",
    name: "",
    rating: 0,
    sellersReviews: undefined,
    location: "",
    contact: "",
    totalSales: undefined,
  },
  specifications: {
    dimensions: undefined,
    weight: undefined,
    material: undefined,
    features: undefined,
    size: undefined,
  },
  paymentOptions: [],
  origin: {
    brand: "",
    country: "",
  },
  usageGuidelines: {
    careInstructions: "",
    installation: "",
  },
  faq: [],
  relatedProducts: [],
};

export default function AddProduct({
  onAddProduct,
  categories,
  getCategoryLabel,
}: {
  onAddProduct: (product: Product) => void;
  categories: string[];
  getCategoryLabel: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<Product>(defaultProduct);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct(defaultProduct);
    setIsOpen(false);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          images: [...prevProduct.images, reader.result as string],
        }));
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  const removeImage = (index: number) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      images: prevProduct.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="md:mr-2 h-4 w-4" />
          <span className="hidden md:inline">Add Product</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] max-h-full p-0">
        <ScrollArea className="h-full">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Enter the details of your new product listing.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <Card>
                <CardContent className="p-4">
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                      isDragActive
                        ? "border-primary bg-primary/10"
                        : "border-gray-300 hover:border-primary"
                    }`}
                  >
                    <input {...getInputProps()} />
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">
                      Drag 'n' drop some images here, or click to select files
                    </p>
                  </div>
                  {product.images.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                      {product.images.map((image, index) => (
                        <div key={index} className="relative group">
                          <Image
                            src={image}
                            alt={`Product ${index + 1}`}
                            className="w-full h-24 object-cover rounded-md"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      setProduct({
                        ...product,
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
                      <SelectValue placeholder="Select a category">
                        {product.category && getCategoryLabel(product.category)}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {getCategoryLabel(category)}
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
                {product.category &&
                  (() => {
                    // Find the corresponding category-specific fields based on product category value
                    const categoryValue = CATEGORIES.find(
                      (cat) => cat.value === product.category
                    );

                    if (!categoryValue) return null;

                    const fields =
                      CATEGORYSPEC[
                        categoryValue.value as keyof typeof CATEGORYSPEC
                      ] || [];

                    return fields.map((field) => {
                      // Get the value from the product, handle possible Date or other types
                      const fieldValue = product[field.name as keyof Product];
                      const stringValue =
                        typeof fieldValue === "string" ||
                        typeof fieldValue === "number"
                          ? fieldValue
                          : fieldValue instanceof Date
                          ? fieldValue.toISOString() // Convert Date to string (you can adjust the format)
                          : "";

                      return (
                        <div key={field.name} className="space-y-2">
                          <Label htmlFor={field.name}>{field.label}</Label>
                          <Input
                            id={field.name}
                            type={field.type}
                            value={stringValue}
                            onChange={(e) =>
                              setProduct({
                                ...product,
                                [field.name]: e.target.value,
                              })
                            }
                          />
                        </div>
                      );
                    });
                  })()}
              </div>
              <Button type="submit" className="w-full">
                Add Product
              </Button>
            </form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
