// hooks/useSeller.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {useUser} from "@clerk/nextjs";
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

export function useSeller() {

    const { user } = useUser();

    return useQuery({
        queryKey: ["user", user?.id],
        queryFn: async () => {
            const users = await sellerApi.getAll();
            const matchingUser = users.find((u) => u.userId === user?.id);

            if (matchingUser) {
                const userDocument = await sellerApi.getOne(matchingUser.$id);
                return userDocument;
            } else {
                throw new Error("User not found");
            }
        },
        enabled: !!user?.id,
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