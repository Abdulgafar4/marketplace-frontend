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
      sellersReviews: [
        {
          comment: "Great sound quality!",
          rating: 5,
          id: "comment1",
          productId: "1",
          createdAt: new Date("2024-03-15"),
          helpfulCount: 2,
        },
      ],
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
      country: "USA",
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
    // User reviews
    reviews: [
      {
        userId: "user1",
        comment: "Great sound quality!",
        rating: 5,
        id: "comment1",
        userName: "JohnDoe",
        productId: "1",
        createdAt: new Date("2024-03-15"),
        helpfulCount: 2,
      },
      {
        userId: "user2",
        comment: "Comfortable for long use.",
        rating: 4,
        id: "comment2",
        userName: "JaneSmith",
        productId: "1",
        createdAt: new Date("2024-03-16"),
        helpfulCount: 1,
      },
    ],
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
      sellersReviews: [
        {
          id: "1",
          comment:
            "Our smartwatch is the ultimate fitness companion, designed for people who want to stay active and healthy.",
          rating: 5,
          createdAt: new Date("2024-03-12"),
          productId: "product1",
        },
      ],
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
    reviews: [
      {
        userId: "user3",
        comment: "Helps me stay motivated!",
        rating: 5,
        id: "comment3",
        userName: "FitFan123",
        productId: "2",
        createdAt: new Date("2024-03-15"),
        helpfulCount: 5,
      },
      {
        userId: "user4",
        comment: "Great features for the price.",
        rating: 5,
        id: "comment4",
        userName: "HealthGuru",
        productId: "2",
        createdAt: new Date("2024-03-16"),
        helpfulCount: 3,
      },
    ],
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
      sellersReviews: [
        {
          id: "1",
          comment:
            "Our smartwatch is the ultimate fitness companion, designed for people who want to stay active and healthy.",
          rating: 5,
          createdAt: new Date("2024-03-12"),
          productId: "product1",
        },
      ],
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
    // User reviews
    reviews: [
      {
        userId: "user5",
        comment: "Looks great, but could be more spacious.",
        rating: 4,
        id: "comment5",
        userName: "ChicShopper",
        productId: "3",
        createdAt: new Date("2024-03-15"),
        helpfulCount: 4,
      },
    ],
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
      sellersReviews: [
        {
          id: "1",
          comment:
            "Our smartwatch is the ultimate fitness companion, designed for people who want to stay active and healthy.",
          rating: 5,
          createdAt: new Date("2024-03-12"),
          productId: "product1",
        },
      ],

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
    reviews: [
      {
        userId: "user7",
        comment: "Easy to set up and use.",
        rating: 5,
        id: "",
        userName: "",
        productId: "",
        createdAt: new Date("2024-03-15"),
        helpfulCount: 0,
      },
      {
        userId: "user8",
        comment: "Good image quality at night.",
        rating: 4,
        id: "",
        userName: "",
        productId: "",
        createdAt: new Date("2024-03-15"),
        helpfulCount: 0,
      },
    ],
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
      sellersReviews: [
        {
          comment: "Looks great in my living room!",
          rating: 5,
          id: "",
          productId: "",
          createdAt: new Date("2024-03-15"),
          helpfulCount: 0,
        },
        {
          comment: "Assembly was straightforward.",
          rating: 4,
          id: "",
          productId: "",
          createdAt: new Date("2024-03-15"),
          helpfulCount: 0,
        },
      ],
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
    reviews: [],
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

      sellersReviews: [
        {
          comment: "Very stylish and comfortable.",
          rating: 5,
          id: "",
          productId: "",
          createdAt: new Date("2024-03-15"),
          helpfulCount: 0,
        },
        {
          comment: "Fit as expected.",
          rating: 4,
          id: "",
          productId: "",
          createdAt: new Date("2024-03-15"),
          helpfulCount: 0,
        },
      ],
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
    reviews: [],
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

      sellersReviews: [
        {
          comment: "Best TV I’ve ever owned!",
          rating: 5,
          id: "",
          productId: "",
          createdAt: new Date("2024-03-15"),
          helpfulCount: 0,
        },
        {
          comment: "Fantastic picture quality.",
          rating: 5,
          id: "",
          productId: "",
          createdAt: new Date("2024-03-15"),
          helpfulCount: 0,
        },
      ],
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
    reviews: [],
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

      sellersReviews: [
        {
          comment: "Best chair for long hours of work.",
          rating: 5,
          id: "",
          productId: "",
          createdAt: new Date("2024-03-15"),
          helpfulCount: 0,
        },
        {
          comment: "Very supportive.",
          rating: 4,
          id: "",
          productId: "",
          createdAt: new Date("2024-03-15"),
          helpfulCount: 0,
        },
      ],
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
    reviews: [],
  },
];

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
