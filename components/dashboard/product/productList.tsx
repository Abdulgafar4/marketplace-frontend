"use client";

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
import {Badge} from "@/components/ui/badge";

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
          <TableHead>ID</TableHead>
          <TableHead>Image</TableHead>
          <TableHead className="hidden sm:table-cell" >Name</TableHead>
          <TableHead className="hidden sm:table-cell">Price</TableHead>
          <TableHead className="hidden lg:table-cell">Category</TableHead>
          <TableHead className="hidden md:table-cell">Stock</TableHead>
          <TableHead className="hidden lg:table-cell">Condition</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>
              <div>
                <img src={product.imageUrl} alt={product.id} width={50} height={50} />
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">{product.name}</TableCell>
            <TableCell className="hidden sm:table-cell">${product.price.toFixed(2)}</TableCell>
            <TableCell className="hidden lg:table-cell">
              <Badge className="bg-gray-500 dark:text-gray-100">
              {product.category.toUpperCase()}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {product.stockCount}
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Badge className="bg-gray-500 dark:text-gray-100">
                {product.condition.toUpperCase()}
              </Badge>
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
