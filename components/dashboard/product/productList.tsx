"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import EditProduct from "./editProduct";

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

export default function ProductList({
  products,
  onEditProduct,
  onDeleteProduct,
  categories,
}: {
  products: Product[];
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
  categories: string[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="hidden md:table-cell">Category</TableHead>
          <TableHead className="hidden md:table-cell">Stock</TableHead>
          <TableHead className="hidden lg:table-cell">Condition</TableHead>
          <TableHead className="hidden lg:table-cell">Material</TableHead>
          <TableHead className="hidden xl:table-cell">Shipping Cost</TableHead>
          <TableHead className="hidden xl:table-cell">
            Estimated Delivery
          </TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
            <TableCell className="hidden md:table-cell">
              {product.category}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {product.stockCount}
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {product.condition}
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {product.material}
            </TableCell>
            <TableCell className="hidden xl:table-cell">
              ${product.shippingCost.toFixed(2)}
            </TableCell>
            <TableCell className="hidden xl:table-cell">
              {product.estimatedDelivery}
            </TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <EditProduct
                  product={product}
                  onEditProduct={onEditProduct}
                  categories={categories}
                />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your product.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDeleteProduct(product.id)}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
