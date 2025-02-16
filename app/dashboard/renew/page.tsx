'use client'

import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {useDeleteProduct, useProducts} from "@/lib/hooks/useProduct";
import EditProduct from "@/components/dashboard/product/editProduct";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Trash2} from "lucide-react";
import Loader from "@/components/loading";
import {toast} from "react-toastify";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function RenewProductsPage() {
const { data: products, isLoading, isError } = useProducts();
    const { mutateAsync } = useDeleteProduct()

    const onDeleteProduct = async (id: string) => {
        try {
            await mutateAsync(id);
            toast.error("Deleted product with the id '" + id);
        } catch (error: any) {
            toast.error(error.message);
        }
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">Pending Products</CardTitle>
            </CardHeader>
            <CardContent>
                {isLoading ? <Loader message="Fetching products..." /> : isError ? <Loader message="Try reload the page..." /> : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Day Listed</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products && products.filter(p => p.status === 'Pending').map((product: any) => {
                            return (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <img src={product.images[0]} alt={product.title} className="w-10 h-10 object-cover" />
                                    </TableCell>
                                    <TableCell>{product.title}</TableCell>
                                    <TableCell>{new Date(product.createdAt).toLocaleDateString()}</TableCell>
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
                            )
                        })}
                    </TableBody>
                </Table>
                    )}
            </CardContent>
        </Card>
    )
}

