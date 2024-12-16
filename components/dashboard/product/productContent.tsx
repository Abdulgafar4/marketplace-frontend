"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddProduct from "./addProduct";
import ProductList from "./productList";
import { CATEGORIES } from "@/lib/constants";
import dummyProducts from "@/app/api/dummyData";

export default function ProductContent() {
  const [products, setProducts] = useState<Product[]>(dummyProducts);

  const [categories] = useState<string[]>(
    CATEGORIES.map((category) => category.value)
  );

  const getCategoryLabel = (value: string): string | undefined => {
    const category = CATEGORIES.find((cat) => cat.value === value);
    return category ? category.label : undefined;
  };
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
              getCategoryLabel={getCategoryLabel}
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
