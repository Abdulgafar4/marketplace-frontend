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

export default function OlderProductsPage() {
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

    const deleteProduct = (id: string) => {
        const updatedProducts = products.filter(p => p.id !== id)
        setProducts(updatedProducts)
        localStorage.setItem('products', JSON.stringify(updatedProducts))
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Older Products</h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Days Since Deletion</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.filter(p => p.status === 'deleted').map((product) => {
                        const daysSinceDeletion = Math.floor((Date.now() - product.createdAt) / (1000 * 60 * 60 * 24))
                        return (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover" />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{daysSinceDeletion}</TableCell>
                                <TableCell>
                                    <Button variant="outline" size="sm" className="mr-2"
                                            onClick={() => updateProductStatus(product.id, 'active')}>
                                        Relist
                                    </Button>
                                    <Button variant="destructive" size="sm"
                                            onClick={() => deleteProduct(product.id)}>
                                        Delete Permanently
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

