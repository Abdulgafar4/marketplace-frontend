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
import { Badge } from "@/components/ui/badge";
import Loader from "@/components/loading";
import {capitalize} from "@/lib/utils";
import {toast} from "react-toastify";
import {useDeleteProduct} from "@/lib/hooks/useProduct";

export default function ProductList({
  products,
    isLoading,
    isError,
}: {
  products: BaseListingData[];
  isLoading: boolean;
  isError: boolean;
}) {
  const { mutateAsync } = useDeleteProduct()
  if (isLoading) {
    return <Loader message="Fetching products..." />;
  }

  if (isError) {
    return <Loader message="Try reload the page..." />;
  }

  const onDeleteProduct = async (id: string) => {
    try {
      await mutateAsync(id);
      toast.error("Deleted product with the id '" + id);
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
      <>
    <Table>
      <TableHeader>
        <TableRow className=" dark:hover:bg-gray-800">
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="hidden sm:table-cell">Price</TableHead>
          <TableHead className="hidden lg:table-cell">Category</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="hidden lg:table-cell">Condition</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.filter(p => p.status === 'Active').map((product) => (
          <TableRow key={product.id} className=" dark:hover:bg-gray-800">
            <TableCell>
              <div>
                <img
                  src={product.images[0]}
                  alt={product.id}
                  width={50}
                  height={50}
                />
              </div>
            </TableCell>
            <TableCell>
              {product.title.toUpperCase()}
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              ${product.price.toFixed(2)}
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Badge className="bg-gray-500 dark:text-gray-100">
                {capitalize(product.category.replace("_", " "))}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge className="bg-gray-500 dark:text-gray-100">
              {capitalize(product.status)}
              </Badge>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Badge className="bg-gray-500 dark:text-gray-100">
                {capitalize(product.condition)}
              </Badge>
            </TableCell>

            <TableCell>
              <div className="flex space-x-2">
                <EditProduct
                  product={product}
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
                        onClick={() => onDeleteProduct(product.$id!)}
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
      </>
  );
}
