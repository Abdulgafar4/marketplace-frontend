interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  stockCount: number;
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
    dimensions?: string; // Optional as not all categories have dimensions
    weight?: string; // Optional
    material?: string; // Optional
    features?: string; // Optional
    size?: string;
  };
  shipping?: {
    // Optional shipping details
    methods: string[];
    cost: number;
    estimatedDelivery: string;
  };
  returnPolicy?: {
    // Optional return policy
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
  images: string[]; // Array of image URLs
  faq: { question: string; answer: string }[]; // FAQ items
  relatedProducts: string[]; // IDs of related products
  warranty?: string; // Optional as not all products may have a warranty
  reviews?: Review[]; // Optional as reviews may not exist initially
  rating?: number; // Optional as some products may not have ratings
  // Category-specific fields (optional, based on category)
  categorySpecificFields?: {
    brand?: string; // Optional in categories where brand isn't required
    model?: string; // Optional in categories like 'furniture'
    powerSource?: string; // Optional for categories like 'furniture' or 'baby_kids'
    voltage?: string; // Optional for certain categories
    color?: string; // Optional, only applicable to certain categories
    size?: string; // Optional for 'fashion' categories
    assemblyRequired?: boolean; // Optional for 'furniture' only
    safetyStandards?: string; // Optional for 'baby_kids' only
    material?: string; // Optional for categories like 'furniture', 'home_garden', 'health_beauty'
    type?: string; // Optional for many categories like 'games_hobbies', 'sports_outdoors', etc.
    occasion?: string; // Optional for 'womens_fashion'
    fit?: string; // Optional for 'mens_fashion'
    expiryDate?: string; // Optional for 'health_beauty'
    ingredients?: string; // Optional for 'health_beauty'
    skinType?: string; // Optional for 'health_beauty'
    volume?: string; // Optional for 'health_beauty'
    weatherResistance?: string; // Optional for 'home_garden'
    mileage?: string; // Optional for 'vehicles_parts'
    fuelType?: string; // Optional for 'vehicles_parts'
    artist?: string; // Optional for 'art_collectibles'
    medium?: string; // Optional for 'art_collectibles'
    provenance?: string; // Optional for 'art_collectibles'
    year?: string; // Optional for 'games_hobbies', 'books_music', 'vehicles_parts'
    urgency?: string; // Optional for 'wanted'
    preferredCondition?: string; // Optional for 'wanted'
    budget?: string; // Optional for 'wanted'
    eventDate?: string; // Optional for 'garage_sales'
    location?: string; // Optional for 'garage_sales'
    items?: string; // Optional for 'garage_sales'
    contactInfo?: string; // Optional for 'garage_sales'
  };
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
