interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  stockCount: number;
  createdAt: Date;
  quantity?: number;
  seller: Seller;
  condition: string;
  paymentOptions: string[];
  images: string[];
}

interface Seller {
  id: string;
  name: string;
  rating: number;
  sellersReviews?: SellersReview[];
  location: string;
  contact: string;
  email?: string;
  totalSales?: number;
}

interface SellersReview {
  id: string; // Unique identifier for the review
  productId: string; // ID of the product being reviewed
  rating: number; // Rating given by the user
  comment: string; // Comment left by the user
  createdAt: Date; // Date the review was created
  helpfulCount?: number; // Number of users who found the review helpful
}
type ProductsByCategory = {
  [key: string]: Product[]; // Adjust the type based on your Product definition
};
interface WishlistItem extends Product {
  quantity: number;
}
interface WishlistAction {
  product: Product;
  action: 'add' | 'remove' | 'update';
  quantity?: number;
}
interface ProductCardProps {
  product: Product;
  link: string;
  isInWishlist: boolean;
}

interface CreateSellerDTO {
  userId: string;
  email: string;
  firstname: string;
  lastname: string;
  image: string;
  contact: string;
}

interface UpdateSellerDTO {
  sellerId: string;
  data: Partial<CreateSellerDTO>;
}