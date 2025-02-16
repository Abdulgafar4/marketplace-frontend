// hooks/useProduct.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productsApi } from "@/app/api/product";

export function useCreateProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productsApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });
}

export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: productsApi.getAll,
    });
}

export function useProduct(productId?: string) {
    return useQuery({
        queryKey: ['products', productId],
        queryFn: () => productsApi.getOne(productId!),
        enabled: !!productId,
    });
}

export function useUpdateProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productsApi.update,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['products', data.$id] });
        },
    });
}

export function useDeleteProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productsApi.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });
}