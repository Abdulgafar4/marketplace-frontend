'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {useProducts} from "@/lib/hooks/useProduct";
import Loader from "@/components/loading";
import {capitalize, countProductsByStatus} from "@/lib/utils";
import {Status} from "@/lib/constants";

export default function OverviewPage() {
    const { data, isLoading } = useProducts();


    const activeListing = countProductsByStatus(data, Status.active)
    const pendingListing = countProductsByStatus(data, Status.pending)
    const soldListing = countProductsByStatus(data, Status.sold)


    const topProducts = data?.slice(0, 5)

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Overview</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activeListing}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Listing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{pendingListing}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sold</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{soldListing}</div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Top Recent Products</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading ? <Loader message="Fetching products..." /> : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead className="hidden sm:table-cell" >Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className="hidden md:table-cell">Category</TableHead>
                                <TableHead className="hidden md:table-cell">Status</TableHead>
                                <TableHead className="hidden lg:table-cell">Condition</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {topProducts && topProducts.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <div>
                                            <img src={product.images[0]} alt={product.id} width={50} height={50} />
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">{capitalize(product.title)}</TableCell>
                                    <TableCell>${product.price.toFixed(2)}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Badge className="bg-gray-500 dark:text-gray-100">
                                            {capitalize(product.category.replace("_", " "))}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Badge className="bg-gray-500 dark:text-gray-100">
                                        {product.status ?? "Active"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Badge className="bg-gray-500 dark:text-gray-100">
                                        {capitalize(product.condition)}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

