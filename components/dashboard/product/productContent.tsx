"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddProduct from "./addProduct";
import ProductList from "./productlist";

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

export default function ProductContent() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Wireless Headphones",
      price: 99.99,
      category: "Electronics",
      stockCount: 50,
      description: "High-quality wireless headphones",
      condition: "New",
      imageUrl: "https://example.com/headphones.jpg",
      dimensions: "7x5x3 inches",
      weight: "0.5 lbs",
      material: "Plastic, Metal",
      shippingMethods: "Standard, Express",
      shippingCost: 5.99,
      estimatedDelivery: "3-5 business days",
    },
    {
      id: "2",
      name: "Smart Watch",
      price: 199.99,
      category: "Electronics",
      stockCount: 30,
      description: "Feature-rich smart watch",
      condition: "New",
      imageUrl: "https://example.com/smartwatch.jpg",
      dimensions: "1.5x1.5x0.5 inches",
      weight: "0.2 lbs",
      material: "Aluminum, Glass",
      shippingMethods: "Standard, Express",
      shippingCost: 4.99,
      estimatedDelivery: "2-4 business days",
    },
    {
      id: "3",
      name: "Leather Wallet",
      price: 49.99,
      category: "Accessories",
      stockCount: 100,
      description: "Genuine leather wallet",
      condition: "New",
      imageUrl: "https://example.com/wallet.jpg",
      dimensions: "4x3x0.5 inches",
      weight: "0.2 lbs",
      material: "Leather",
      shippingMethods: "Standard",
      shippingCost: 3.99,
      estimatedDelivery: "5-7 business days",
    },
  ]);

  const [categories, setCategories] = useState<string[]>([
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports & Outdoors",
    "Accessories",
  ]);

  const handleAddProduct = (product: Product) => {
    setProducts([...products, { ...product, id: Date.now().toString() }]);
  };

  const handleEditProduct = (editedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
    );
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Products</CardTitle>
          <div className="flex space-x-2">
            <AddProduct
              onAddProduct={handleAddProduct}
              categories={categories}
              setCategories={setCategories}
            />
          </div>
        </CardHeader>
        <CardContent>
          <ProductList
            products={products}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
            categories={categories}
          />
        </CardContent>
      </Card>
    </div>
  );
}
