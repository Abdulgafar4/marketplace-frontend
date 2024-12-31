'use client'

import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Product {
    id: string
    name: string
    image: string
    clicks: number
    status: 'active' | 'renew' | 'deleted'
    createdAt: number
}

export default function RenewProductsPage() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const storedProducts = localStorage.getItem('products')
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts))
        }
    }, [])

    const updateProductStatus = (id: string, status: 'active' | 'renew' | 'deleted') => {
        const updatedProducts = products.map(p =>
            p.id === id ? { ...p, status } : p
        )
        setProducts(updatedProducts)
        localStorage.setItem('products', JSON.stringify(updatedProducts))
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Renew Products</h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Days Listed</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.filter(p => p.status === 'renew').map((product) => {
                        const daysListed = Math.floor((Date.now() - product.createdAt) / (1000 * 60 * 60 * 24))
                        return (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover" />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{daysListed}</TableCell>
                                <TableCell>
                                    <Button variant="outline" size="sm" className="mr-2"
                                            onClick={() => updateProductStatus(product.id, 'active')}>
                                        Renew Listing
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

