import { NextResponse } from 'next/server';

let wishlistItems: Product[] = [];

export async function GET() {
    return NextResponse.json(wishlistItems);
}

export async function POST(request: Request) {
    const { product, action } = await request.json();

    if (action === 'add') {
        // Add product if it doesn't already exist in the wishlist
        if (!wishlistItems.find(item => item.id === product.id)) {
            wishlistItems.push(product);
        }
    } else if (action === 'remove') {
        // Remove product from the wishlist
        wishlistItems = wishlistItems.filter(item => item.id !== product.id);
    } else if (action === 'update') {
        // Update the quantity of the product in the wishlist
        const existingProductIndex = wishlistItems.findIndex(item => item.id === product.id);
        if (existingProductIndex !== -1) {
            // Update the quantity of the existing product
            wishlistItems[existingProductIndex].quantity = product.quantity;
        }
    }

    return NextResponse.json(wishlistItems);
}