import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { reviewsApi } from "@/app/api/reviews";

export function useCreateReview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: reviewsApi.create,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['reviews'] });
            queryClient.invalidateQueries({
                queryKey: ['reviews', 'product', data.productId]
            });
        },
    });
}

export function useReviews() {
    return useQuery({
        queryKey: ['reviews'],
        queryFn: reviewsApi.getAll,
    });
}

export function useReview(reviewId?: string) {
    return useQuery({
        queryKey: ['reviews', reviewId],
        queryFn: () => reviewsApi.getOne(reviewId!),
        enabled: !!reviewId,
    });
}

export function useProductReviews(productId?: string) {
    return useQuery({
        queryKey: ['reviews', 'product', productId],
        queryFn: async () => {
            const reviews = await reviewsApi.getAll();
            return reviews.filter(review => review.productId === productId);
        },
        enabled: !!productId,
    });
}

export function useUpdateReview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: reviewsApi.update,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['reviews'] });
            queryClient.invalidateQueries({ queryKey: ['reviews', data.$id] });
            queryClient.invalidateQueries({
                queryKey: ['reviews', 'product', data.productId]
            });
        },
    });
}

export function useDeleteReview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: reviewsApi.delete,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['reviews'] });
            // Note: You might need to pass productId separately or store it in a ref
            // if you need to invalidate product-specific reviews on delete
        },
    });
}