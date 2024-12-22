import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const STORAGE_KEY = 'wishlist-items';
const TIMESTAMP_KEY = 'wishlist-timestamp';
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

// Load initial data from localStorage
const loadFromStorage = (): WishlistItem[] => {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem(STORAGE_KEY);
    const timestamp = localStorage.getItem(TIMESTAMP_KEY);

    if (stored && timestamp) {
        const savedTime = parseInt(timestamp, 10);
        const currentTime = Date.now();

        if (currentTime - savedTime < ONE_MONTH_MS) {
            return JSON.parse(stored);
        } else {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(TIMESTAMP_KEY);
        }
    }
    return [];
};

// Save to localStorage
const saveToStorage = (items: WishlistItem[]) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
};

// Fetch wishlist from API
const getWishlist = async (): Promise<WishlistItem[]> => {
    const stored = loadFromStorage();

    try {
        const response = await fetch('/api/wishlist');
        if (!response.ok) {
            throw new Error('Failed to fetch wishlist');
        }
        const data = await response.json();
        saveToStorage(data);
        return data;
    } catch (error) {
        // Fallback to local data if API fails
        return stored;
    }
};

// Update wishlist (Add/Remove/Modify items)
const updateWishlist = async ({ product, action, quantity = 1 }: WishlistAction): Promise<WishlistItem[]> => {
    const response = await fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, action, quantity }),
    });

    if (!response.ok) {
        throw new Error('Failed to update wishlist');
    }

    const data = await response.json();
    saveToStorage(data);
    return data;
};

// Wishlist Hook
export const useWishlist = () => {
    return useQuery({
        queryKey: ['wishlist'],
        queryFn: getWishlist,
        initialData: loadFromStorage,
        staleTime: ONE_MONTH_MS, // Optional: Adjust stale time for reduced API calls
    });
};

// Wishlist Mutation Hook
export const useWishlistMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateWishlist,
        onMutate: async ({ product, action }) => {
            await queryClient.cancelQueries({ queryKey: ['wishlist'] });

            const previousWishlist = queryClient.getQueryData<WishlistItem[]>(['wishlist']) || [];

            queryClient.setQueryData(['wishlist'], (old: WishlistItem[] = []) => {
                if (action === 'add') {
                    // Add the new product with a quantity of 1
                    return [...old, { ...product, quantity: 1 }];
                } else if (action === 'remove') {
                    // Remove the product from the wishlist
                    return old.filter(item => item.id !== product.id);
                } else if (action === 'update') {
                    // Update the quantity of the existing product
                    return old.map(item =>
                        item.id === product.id ? { ...item, quantity: product.quantity } : item
                    );
                }

                return old; // Return the old state if no matching action
            });

            return { previousWishlist };
        },
        onSuccess: (_, variables) => {
            const actionText = variables.action === 'add' ? 'added to' : variables.action === 'update' ? 'updated at' : 'removed from';
            toast.success(`"${variables.product.name}" has been ${actionText} your wishlist.`);
        },
        onError: (_, variables, context) => {
            queryClient.setQueryData(['wishlist'], context?.previousWishlist);
            toast.error(`Failed to update wishlist for "${variables.product.name}".`);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['wishlist'] });
        },
    });
};
