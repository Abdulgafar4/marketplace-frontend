// components/Cart.tsx
'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {Minus, Plus, ShoppingCart} from "lucide-react"
import {useWishlist, useWishlistMutation} from "@/lib/hooks/useWishlist";
import {Button} from "@/components/ui/button";

export default function Cart() {
    const [open, setOpen] = useState(false)
    const { data: wishlistItems = [], isLoading } = useWishlist()
    const wishlistMutation = useWishlistMutation()
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true); // Indicate that the component has hydrated
    }, []);

    const handleRemoveItem = (product: WishlistItem) => {
        wishlistMutation.mutate({
            product,
            action: 'remove'
        })
    }

    const handleUpdateQuantity = (product: WishlistItem, newQuantity: number) => {
        const updatedProduct = { ...product, quantity: newQuantity };
        if (newQuantity < 1) {
            // If quantity is less than 1, remove the product
            wishlistMutation.mutate({
                product,
                action: 'remove' // Action for removal
            });
        } else {
            // Otherwise, update the product with the new quantity
            wishlistMutation.mutate({
                product: updatedProduct,
                action: 'update',
                quantity: newQuantity
            });
        }
    };

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="-m-2.5 inline-flex gap-3 items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
                <div className="relative">
                    <ShoppingCart className="size-6" aria-hidden="true"/>
                    {hydrated && wishlistItems.length > 0 && (
                        <span
                            className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistItems.length}
            </span>
                    )}
                </div>
                <span className="not-sr-only md:sr-only mt-1">Cart</span>
            </button>


            <Dialog open={open} onClose={setOpen} className="relative z-50">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <DialogTitle className="text-lg font-medium text-gray-900">
                                                Saved Items
                                            </DialogTitle>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                >
                                                    <span className="absolute -inset-0.5"/>
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon aria-hidden="true" className="size-6"/>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                {isLoading ? (
                                                    <div className="flex justify-center py-6">
                                                        <div
                                                            className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"/>
                                                    </div>
                                                ) : wishlistItems.length === 0 ? (
                                                    <p className="text-center py-6 text-gray-500">
                                                        No items in your wishlist
                                                    </p>
                                                ) : (
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {wishlistItems.map((product) => (
                                                            <li key={product.id} className="flex py-6">
                                                                <div
                                                                    className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img
                                                                        src={product.imageUrl}
                                                                        alt={product.name}
                                                                        className="size-full object-cover"
                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div
                                                                            className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                <a>{product.name}</a>
                                                                            </h3>
                                                                            <p className="ml-4">${product.price.toFixed(2)}</p>
                                                                        </div>
                                                                        {product.name && (
                                                                            <p className="mt-1 text-sm text-gray-500">Red</p>
                                                                        )}
                                                                    </div>
                                                                    <div
                                                                        className="flex flex-1 items-end justify-between text-sm">
                                                                        <div className="flex items-center space-x-2">
                                                                            <Button
                                                                                variant="outline"
                                                                                size="icon"
                                                                                onClick={() => handleUpdateQuantity(product, product.quantity - 1)}
                                                                                disabled={wishlistMutation.isPending}
                                                                                className="h-8 w-8"
                                                                            >
                                                                                <Minus className="h-4 w-4"/>
                                                                            </Button>
                                                                            <span className="text-gray-600">
    {product.quantity}
</span>
                                                                            <Button
                                                                                variant="outline"
                                                                                size="icon"
                                                                                onClick={() => handleUpdateQuantity(product, product.quantity + 1)}
                                                                                disabled={wishlistMutation.isPending}
                                                                                className="h-8 w-8"
                                                                            >
                                                                                <Plus className="h-4 w-4"/>
                                                                            </Button>
                                                                        </div>
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => handleRemoveItem(product)}
                                                                            disabled={wishlistMutation.isPending}
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500 disabled:opacity-50"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}