enum CategoryType {
  ALL = "all",
  ELECTRONICS_APPLIANCES = "electronics_appliances",
  FURNITURE = "furniture",
  WOMENS_FASHION = "womens_fashion",
  MENS_FASHION = "mens_fashion",
  GARAGE_SALES = "garage_sales",
  VEHICLES_PARTS = "vehicles_parts",
  HOME_GARDEN = "home_garden",
  BABY_KIDS = "baby_kids",
  HEALTH_BEAUTY = "health_beauty",
  SPORTS_OUTDOORS = "sports_outdoors",
  GAMES_HOBBIES = "games_hobbies",
  BOOKS_MUSIC = "books_music",
  PET_SUPPLIES = "pet_supplies",
  ART_COLLECTIBLES = "art_collectibles",
  WANTED = "wanted",
  OTHER = "other",
}
enum Condition {
  New = "new",
  LikeNew = "like_new",
  Good = "good",
  Fair = "fair",
  Poor = "poor",
}
enum Status {
  active = "Active",
  sold = "Sold",
  pending = "Pending",
}
enum PaymentType {
  cash = "Cash",
  etransfer = "eTransfer",
  any = "Any",
}

interface SellersReview {
  id: string; // Unique identifier for the review
  productId: string; // ID of the product being reviewed
  rating: number; // Rating given by the user
  comment: string; // Comment left by the user
  createdAt: Date; // Date the review was created
  userName: string;
  image: string;
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
  image?: string;
}

interface BaseListingData {
  id: string;
  $id?: string;
  title: string;
  description: string;
  price: number;
  condition: Condition;
  images: string[];
  status: Status;
  shipping_available: boolean;
  pickup_available: boolean;
  category: CategoryType;
  brand?: string;
  model?: string;
  paymentOptions: PaymentType;
}
// interface ElectronicsListing extends BaseListingData {
//   brand: string;
//   model: string;
//   warranty_status?: {
//     has_warranty: boolean;
//     expiry_date?: Date;
//   };
//   technical_specs: {
//     year: number;
//     color: string;
//     dimensions?: string;
//   };
// }
// interface FurnitureListing extends BaseListingData {
//   material: string[];
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//     unit: "inches" | "cm";
//   };
//   style: string; // e.g., modern, vintage, industrial
//   assembly_required: boolean;
// }
// interface FashionListing extends BaseListingData {
//   size: string;
//   color: string[];
//   brand: string;
//   material: string[];
//   CategoryType: "tops" | "bottoms" | "dresses" | "shoes" | "accessories";
//   care_instructions?: string;
// }
// interface VehicleListing extends BaseListingData {
//   make: string;
//   model: string;
//   year: number;
//   mileage?: number;
//   vin?: string;
//   fuel_type?: string;
//   transmission?: string;
//   part_type?: string;
//   compatibility?: string[];
// }
// interface GarageSaleListing extends BaseListingData {
//   event_date: Date;
//   end_date: Date;
//   items_preview: string[];
//   multiple_items: boolean;
// }
// interface HomeGardenListing extends BaseListingData {
//   categoryType:
//     | "indoor"
//     | "outdoor"
//     | "tools"
//     | "decor"
//     | "kitchen"
//     | "bathroom";
//   brand?: string;
//   dimensions?: string;
//   material?: string[];
// }
// interface BabyKidsListing extends BaseListingData {
//   ageRange: "infant" | "toddler" | "preschool" | "school_age";
//   gender: "boys" | "girls" | "unisex";
//   categoryType: "clothing" | "toys" | "furniture" | "gear" | "accessories";
//   brand: string;
// }
// interface HealthBeautyListing extends BaseListingData {
//   categoryType: "skincare" | "makeup" | "haircare" | "fragrance" | "wellness";
//   brand: string;
//   expirationDate?: Date;
//   sealed: boolean;
//   organic?: boolean;
// }
// interface SportsOutdoorsListing extends BaseListingData {
//   sportType: string;
//   equipmentType: string;
//   brand: string;
//   size?: string;
//   gender: "mens" | "womens" | "unisex";
// }
// interface GamesHobbiesListing extends BaseListingData {
//   categoryType:
//     | "video_games"
//     | "board_games"
//     | "puzzles"
//     | "crafts"
//     | "collectibles";
//   platform?: string;
//   complete: boolean;
//   ageRating?: string;
// }
// interface BooksMusicListing extends BaseListingData {
//   type: "book" | "album" | "instrument" | "accessory";
//   format: string;
//   genre: string;
//   authorArtist: string;
//   isbn?: string;
// }
// interface PetSuppliesListing extends BaseListingData {
//   petType: "dog" | "cat" | "bird" | "fish" | "small_animal" | "reptile";
//   categoryType: "food" | "toys" | "accessories" | "housing" | "grooming";
//   brand: string;
//   ageRange?: string;
//   size?: string;
// }
// interface ArtCollectiblesListing extends BaseListingData {
//   categoryType: "fine_art" | "antiques" | "coins" | "stamps" | "memorabilia";
//   eraPeriod: string;
//   authenticityCert: boolean;
//   artistMaker?: string;
//   medium?: string;
//   dimensions?: string;
// }
// interface BaseListingData {
//   category: CategoryType;
//   productDetails: BaseListingData;
//   category_specific_data:
//     | ElectronicsListing
//     | FurnitureListing
//     | FashionListing
//     | VehicleListing
//     | GarageSaleListing
//     | BabyKidsListing
//     | HealthBeautyListing
//     | SportsOutdoorsListing
//     | GamesHobbiesListing
//     | BooksMusicListing
//     | PetSuppliesListing
//     | ArtCollectiblesListing
//     | HomeGardenListing;
//   metadata: {
//     search_tags: string[];
//     featured: boolean;
//     views: number;
//     saves: number;
//   };
// }

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
  seller: Seller;
  quantity?: number;
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
}
interface WishlistItem extends BaseListingData {
  quantity: number;
}
interface WishlistAction {
  product: BaseListingData;
  action: "add" | "remove" | "update";
  quantity?: number;
}
interface ProductCardProps {
  product: BaseListingData;
  link: string;
  isInWishlist: boolean;
}
interface CreateSellerDTO {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  contact: string;
  location: string;
  userName: string;
}
interface UpdateSellerDTO {
  id: string;
  data: Partial<CreateSellerDTO>;
}
