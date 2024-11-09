interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  stockCount: number;
  imageUrl: string;
  createdAt: Date;
  seller: {
    id: string;
    name: string;
    rating: number;
    sellersReviews?: SellersReview[];
    location: string;
    contact: string;
    totalSales?: number;
  };
  condition: string;
  specifications: {
    dimensions: string;
    weight: string;
    material: string;
    features?: string;
  };
  shipping: {
    methods: string[];
    cost: number;
    estimatedDelivery: string;
  };
  returnPolicy: {
    returnWindow: string;
    conditions: string;
  };
  paymentOptions: string[];
  origin: {
    brand: string;
    country: string;
  };
  usageGuidelines: {
    careInstructions: string;
    installation: string;
  };
  images: string[]; // Additional images for the product
  faq: { question: string; answer: string }[]; // FAQ items
  relatedProducts: string[]; // IDs of related products
  warranty: string; // Warranty information
  reviews?: Review[];
}

interface Review {
  id: string; // Unique identifier for the review
  userId: string; // ID of the user who left the review
  userName: string; // Name of the user who left the review
  productId: string; // ID of the product being reviewed
  rating: number; // Rating given by the user
  comment: string; // Comment left by the user
  createdAt: Date; // Date the review was created
  helpfulCount: number; // Number of users who found the review helpful
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
