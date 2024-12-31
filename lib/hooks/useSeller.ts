// hooks/useSeller.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {sellerApi} from "@/app/api/sellers";

// Hooks
export function useCreateSeller() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: sellerApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['sellers'] });
        },
    });
}

export function useSellers() {
    return useQuery({
        queryKey: ['sellers'],
        queryFn: sellerApi.getAll,
    });
}

export function useSeller(id: string) {
    return useQuery({
        queryKey: ['sellers', id],
        queryFn: () => sellerApi.getOne(id),
        enabled: !!id,
    });
}

export function useUpdateSeller() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: sellerApi.update,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['sellers'] });
            queryClient.invalidateQueries({ queryKey: ['sellers', data.$id] });
        },
    });
}

export function useDeleteSeller() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: sellerApi.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['sellers'] });
        },
    });
}