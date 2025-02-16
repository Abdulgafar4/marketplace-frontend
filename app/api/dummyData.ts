import { CategoryType } from "@/lib/constants";

export const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    description:
      "Premium wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.",
    category: "electronics",
    rating: 4.5,
    stockCount: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    createdAt: new Date("2024-03-15"),
    seller: {
      id: "seller1",
      name: "AudioTech Store",
      totalSales: 15,
      rating: 4.7,
      location: "New York, NY",
      contact: "support@audiotech.com",
    },
    condition: "new",
    specifications: {
      dimensions: "7.5 x 6.2 x 3 inches",
      weight: "0.55 lbs",
      material: "Plastic, Aluminum",
    },
    shipping: {
      methods: ["Standard", "Expedited"],
      cost: 5.99,
      estimatedDelivery: "3-5 business days",
    },
    returnPolicy: {
      returnWindow: "30 days",
      conditions: "Must be unopened and in original packaging.",
    },
    paymentOptions: ["Credit Card", "PayPal"],
    origin: {
      brand: "AudioTech",
      country: "Toronto, Ontario",
    },
    usageGuidelines: {
      careInstructions: "Clean with a soft cloth; avoid water.",
      installation: "Simply connect via Bluetooth.",
    },
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1527459655565-87bdb1e8c4c9?w=400&h=400&fit=crop",
    ],
    faq: [
      {
        question: "Does it come with a charging cable?",
        answer: "Yes, it includes a USB charging cable.",
      },
      {
        question: "Are these headphones waterproof?",
        answer: "No, they are not waterproof.",
      },
    ],
    relatedProducts: ["2", "4", "7"],
    warranty: "1 year limited warranty.",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    description:
      "Track your health and fitness with this advanced smartwatch featuring heart rate monitoring, GPS, and sleep tracking.",
    category: "electronics",
    rating: 4.8,
    stockCount: 25,
    imageUrl:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
    createdAt: new Date("2024-03-15"),
    seller: {
      id: "seller2",
      name: "FitTrack Co.",
      rating: 4.9,
      location: "Los Angeles, CA",
      contact: "info@fittrackco.com",
      totalSales: 5,
    },
    condition: "new",
    specifications: {
      dimensions: "1.5 x 1.5 x 0.5 inches",
      weight: "0.1 lbs",
      material: "Silicone, Glass",
    },
    shipping: {
      methods: ["Standard", "Expedited"],
      cost: 4.99,
      estimatedDelivery: "2-4 business days",
    },
    returnPolicy: {
      returnWindow: "14 days",
      conditions: "Must be in original condition.",
    },
    paymentOptions: ["Credit Card", "PayPal", "Apple Pay"],
    origin: {
      brand: "FitTrack",
      country: "USA",
    },
    usageGuidelines: {
      careInstructions: "Keep away from extreme temperatures.",
      installation: "Download the FitTrack app to connect.",
    },
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1592390954202-4ff9b88f3882?w=400&h=400&fit=crop",
    ],
    faq: [
      {
        question: "Is it compatible with iPhone?",
        answer: "Yes, it works with both iOS and Android.",
      },
      {
        question: "Does it have a heart rate monitor?",
        answer: "Yes, it has a built-in heart rate monitor.",
      },
    ],
    relatedProducts: ["1", "3", "5"],
    warranty: "2 years limited warranty.",
    // User reviews
  },
  {
    id: "3",
    name: "Leather Crossbody Bag",
    price: 79.99,
    description:
      "Stylish genuine leather crossbody bag with adjustable strap and multiple compartments.",
    category: "fashion",
    rating: 4.2,
    stockCount: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    createdAt: new Date("2024-03-15"),
    seller: {
      id: "seller3",
      name: "Fashionista Boutique",
      rating: 4.6,
      location: "Chicago, IL",
      contact: "contact@fashionistaboutique.com",
      totalSales: 50,
    },
    condition: "new",
    specifications: {
      dimensions: "10 x 8 x 2 inches",
      weight: "0.75 lbs",
      material: "Genuine Leather",
    },
    shipping: {
      methods: ["Standard", "Express"],
      cost: 5.99,
      estimatedDelivery: "3-5 business days",
    },
    returnPolicy: {
      returnWindow: "30 days",
      conditions: "Must be in unworn condition with tags attached.",
    },
    paymentOptions: ["Credit Card", "PayPal"],
    origin: {
      brand: "Fashionista",
      country: "Italy",
    },
    usageGuidelines: {
      careInstructions: "Avoid prolonged exposure to moisture.",
      installation: "No installation required.",
    },
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    ],
    faq: [
      {
        question: "Is this bag real leather?",
        answer: "Yes, it's made of genuine leather.",
      },
      {
        question: "Can the strap be adjusted?",
        answer: "Yes, it has an adjustable strap.",
      },
    ],
    relatedProducts: ["4", "5", "6"],
    warranty: "1 year limited warranty.",
  },
  {
    id: "4",
    name: "Smart Home Security Camera",
    price: 149.99,
    description:
      "1080p HD security camera with night vision, two-way audio, and mobile app control.",
    category: "electronics",
    rating: 4.6,
    stockCount: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400&h=400&fit=crop",
    createdAt: new Date("2024-03-15"),
    seller: {
      id: "seller4",
      name: "HomeGuard Security",
      rating: 4.8,

      location: "Miami, FL",
      contact: "support@homeguard.com",
      totalSales: 15,
    },
    condition: "new",
    specifications: {
      dimensions: "5 x 5 x 5 inches",
      weight: "1.2 lbs",
      features: "Night vision, Two-way audio, Motion detection",
      material: "",
    },
    shipping: {
      methods: ["Standard", "Expedited"],
      cost: 7.99,
      estimatedDelivery: "2-4 business days",
    },
    returnPolicy: {
      returnWindow: "30 days",
      conditions: "Must be returned in original condition.",
    },
    paymentOptions: ["Credit Card", "PayPal"],
    origin: {
      brand: "HomeGuard",
      country: "China",
    },
    usageGuidelines: {
      careInstructions: "Clean the lens regularly.",
      installation: "Mounting hardware included for easy installation.",
    },
    images: [
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400&h=400&fit=crop",
    ],
    faq: [],
    relatedProducts: ["1", "2", "5"],
    warranty: "1 year warranty.",
  },
  {
    id: "5",
    name: "Modern Coffee Table",
    price: 249.99,
    description:
      "Contemporary coffee table with tempered glass top and wooden base.",
    category: "home",
    rating: 4.4,
    stockCount: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&h=400&fit=crop",
    createdAt: new Date("2024-03-15"),
    seller: {
      id: "seller5",
      name: "Home Decor Hub",
      rating: 4.5,
      location: "Seattle, WA",
      contact: "sales@homedecorhub.com",
      totalSales: 15,
    },
    condition: "new",
    specifications: {
      dimensions: "48 x 24 x 18 inches",
      weight: "30 lbs",
      material: "Tempered Glass, Wood",
    },
    shipping: {
      methods: ["Standard"],
      cost: 19.99,
      estimatedDelivery: "5-7 business days",
    },
    returnPolicy: {
      returnWindow: "30 days",
      conditions: "Must be returned in original packaging.",
    },
    paymentOptions: ["Credit Card", "PayPal"],
    origin: {
      brand: "Home Decor Hub",
      country: "USA",
    },
    usageGuidelines: {
      careInstructions: "Use coasters to protect the glass surface.",
      installation: "Some assembly required.",
    },
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&h=400&fit=crop",
    ],
    faq: [],
    relatedProducts: ["1", "3", "6"],
    warranty: "1 year warranty against defects.",
  },
  {
    id: "6",
    name: "Casual Denim Jacket",
    price: 89.99,
    description:
      "Classic denim jacket with comfortable fit and durable construction.",
    category: "fashion",
    rating: 4.3,
    stockCount: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400&h=400&fit=crop",
    createdAt: new Date("2024-03-15"),
    seller: {
      id: "seller6",
      name: "Trendy Threads",
      rating: 4.4,
      totalSales: 5,

      location: "Austin, TX",
      contact: "info@trendythreads.com",
    },
    condition: "new",
    specifications: {
      dimensions: "28 x 20 x 1 inches",
      weight: "1 lb",
      material: "Denim",
    },
    shipping: {
      methods: ["Standard", "Express"],
      cost: 5.99,
      estimatedDelivery: "3-5 business days",
    },
    returnPolicy: {
      returnWindow: "30 days",
      conditions: "Must be unworn and with tags attached.",
    },
    paymentOptions: ["Credit Card", "PayPal"],
    origin: {
      brand: "Trendy Threads",
      country: "USA",
    },
    usageGuidelines: {
      careInstructions: "Machine wash cold; tumble dry low.",
      installation: "No installation required.",
    },
    images: [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400&h=400&fit=crop",
    ],
    faq: [],
    relatedProducts: ["2", "4", "5"],
    warranty: "3 months warranty against defects.",
  },
  {
    id: "7",
    name: 'Smart LED TV - 55"',
    price: 699.99,
    description: "4K Ultra HD Smart TV with HDR and built-in streaming apps.",
    category: "electronics",
    rating: 4.7,
    stockCount: 10,

    imageUrl:
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=400&fit=crop",
    createdAt: new Date("2024-03-15"),
    seller: {
      id: "seller7",
      name: "ElectroHome",
      rating: 4.9,
      totalSales: 5,

      location: "San Francisco, CA",
      contact: "support@electrohome.com",
    },
    condition: "new",
    specifications: {
      dimensions: "48.5 x 28.5 x 3 inches",
      weight: "45 lbs",
      features: "4K, HDR, Smart TV capabilities",
      material: "",
    },
    shipping: {
      methods: ["Standard"],
      cost: 49.99,
      estimatedDelivery: "7-10 business days",
    },
    returnPolicy: {
      returnWindow: "30 days",
      conditions: "Must be returned in original packaging.",
    },
    paymentOptions: ["Credit Card", "PayPal"],
    origin: {
      brand: "ElectroHome",
      country: "South Korea",
    },
    usageGuidelines: {
      careInstructions: "Dust regularly; avoid moisture.",
      installation: "Wall mount or stand included.",
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=400&fit=crop",
    ],

    faq: [],
    relatedProducts: ["1", "2", "3"],
    warranty: "1 year warranty.",
  },
  {
    id: "8",
    name: "Ergonomic Office Chair",
    price: 199.99,
    description:
      "Comfortable office chair with lumbar support and adjustable height.",
    category: "home",
    rating: 4.5,
    stockCount: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=400&h=400&fit=crop",
    createdAt: new Date("2024-03-15"),
    seller: {
      id: "seller8",
      name: "Office Comfort",
      rating: 4.7,
      totalSales: 20,
      location: "Boston, MA",
      contact: "contact@officecomfort.com",
    },
    condition: "new",
    specifications: {
      dimensions: "24 x 25 x 45 inches",
      weight: "35 lbs",
      material: "Mesh, Plastic",
    },
    shipping: {
      methods: ["Standard", "Express"],
      cost: 19.99,
      estimatedDelivery: "3-5 business days",
    },
    returnPolicy: {
      returnWindow: "30 days",
      conditions: "Must be in original condition.",
    },
    paymentOptions: ["Credit Card", "PayPal"],
    origin: {
      brand: "Office Comfort",
      country: "USA",
    },
    usageGuidelines: {
      careInstructions: "Wipe clean with a damp cloth.",
      installation: "Assembly required; tools included.",
    },
    images: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=400&h=400&fit=crop",
    ],
    faq: [],
    relatedProducts: ["5", "6", "7"],
    warranty: "1 year warranty against defects.",
  },
];

export default dummyProducts;

export const testimonials = [
  {
    name: "Sarah Chen",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50",
    text: "CleverMart revolutionized how I sell my handmade crafts. The platform is intuitive and the community is wonderful!",
  },
  {
    name: "Marcus Johnson",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=50&h=50",
    text: "As a tech enthusiast, I love how easy it is to buy and sell electronics here. The secure payment system gives me peace of mind.",
  },
  {
    name: "Emma Rodriguez",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=50&h=50",
    text: "I've been selling home decor items for 6 months now. The support team is amazing and the sales keep growing!",
  },
];
export const dummyListings: BaseListingData[] = [
  {
    category: CategoryType.ELECTRONICS_APPLIANCES,

    id: "el-001",
    title: "MacBook Pro 16-inch 2023",
    description:
      "Excellent condition MacBook Pro, M2 chip, barely used for 3 months. Comes with original charger and box.",
    price: 2199.99,
    condition: "like_new",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=800",
      "https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?w=800",
    ],
    status: "active",
    shipping_available: true,
    pickup_available: true,
    brand: "Apple",
    model: "MacBook Pro 16",
  },

  {
    category: CategoryType.FURNITURE,
    id: "furn-002",
    title: "Mid-Century Modern Sofa",
    description:
      "Beautiful velvet sofa in excellent condition. Perfect for any modern living room.",
    price: 899.99,
    condition: "good",
    images: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800",
      "https://images.unsplash.com/photo-1634643836960-c345c8a91fb1?w=800",
      "https://images.unsplash.com/photo-1634497885778-152eb6fd543c?w=800",
    ],
    status: "active",
    shipping_available: false,
    pickup_available: true,
  },
  {
    category: CategoryType.MENS_FASHION,
    id: "fash-003",
    title: "Designer Leather Jacket",
    description:
      "Genuine leather jacket from top designer. Worn only a few times.",
    price: 299.99,
    condition: "like_new",
    images: [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800",
    ],
    status: "active",
    shipping_available: true,
    pickup_available: true,
    brand: "AllSaints",
  },
  {
    category: CategoryType.VEHICLES_PARTS,
    id: "veh-004",
    title: "2020 Tesla Model 3 Long Range",
    description:
      "Single owner, perfect condition Tesla Model 3. Full self-driving capability included.",
    price: 39999.99,
    condition: "good",
    images: [
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800",
      "https://images.unsplash.com/photo-1554744512-783e8dc69b93?w=800",
    ],
    status: "active",
    shipping_available: false,
    pickup_available: true,
  },
  {
    category: CategoryType.GAMES_HOBBIES,
    id: "game-005",
    title: "PlayStation 5 Console Bundle",
    description:
      "PS5 Disc Edition with extra controller and 3 games. Perfect condition.",
    price: 599.99,
    condition: "like_new",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800",
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800",
    ],
    status: "active",
    shipping_available: true,
    pickup_available: true,
  },
  {
    category: CategoryType.SPORTS_OUTDOORS,
    id: "sport-006",
    title: "Trek Marlin 7 Mountain Bike 2024",
    description:
      "Brand new Trek Marlin 7 Mountain Bike. Size Large. Perfect for trails and city riding.",
    price: 1099.99,
    condition: "new",
    images: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800",
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800",
    ],
    status: "active",
    shipping_available: true,
    pickup_available: true,
  },
];
