// Constants
export enum CategoryType {
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
export enum Condition {
  like_new = "Like New",
  new = "New",
  good = "Good",
  fair = "Fair",
  poor = "Poor",
}

export enum Status {
  active = "Active",
  sold = "Sold",
  pending = "Pending",
}

export enum PaymentType {
  cash = "Cash",
  etransfer = "eTransfer",
  any = "Any",
}

export interface CategoryOption {
  value: CategoryType;
  label: string;
}

export const CATEGORY_OPTIONS: CategoryOption[] = [
  { value: CategoryType.ALL, label: "All Categories" },
  {
    value: CategoryType.ELECTRONICS_APPLIANCES,
    label: "Electronics & Appliances",
  },
  { value: CategoryType.FURNITURE, label: "Furniture" },
  { value: CategoryType.HOME_GARDEN, label: "Home & Garden" },
  { value: CategoryType.BABY_KIDS, label: "Baby & Kids" },
  { value: CategoryType.WOMENS_FASHION, label: "Women's Fashion" },
  { value: CategoryType.MENS_FASHION, label: "Men's Fashion" },
  { value: CategoryType.HEALTH_BEAUTY, label: "Health & Beauty" },
  { value: CategoryType.SPORTS_OUTDOORS, label: "Sports & Outdoors" },
  { value: CategoryType.GAMES_HOBBIES, label: "Games & Hobbies" },
  { value: CategoryType.BOOKS_MUSIC, label: "Books & Music" },
  { value: CategoryType.PET_SUPPLIES, label: "Pet Supplies" },
  { value: CategoryType.ART_COLLECTIBLES, label: "Art & Collectibles" },
  { value: CategoryType.VEHICLES_PARTS, label: "Vehicles & Parts" },
  { value: CategoryType.OTHER, label: "Other" },
  { value: CategoryType.GARAGE_SALES, label: "Garage Sales" },
  { value: CategoryType.WANTED, label: "Wanted" },
];

export const CATEGORIES = [
  { value: CategoryType.ALL, label: "All Categories" },
  {
    value: CategoryType.ELECTRONICS_APPLIANCES,
    label: "Electronics & Appliances",
  },
  { value: CategoryType.FURNITURE, label: "Furniture" },
  { value: CategoryType.HOME_GARDEN, label: "Home & Garden" },
  { value: CategoryType.BABY_KIDS, label: "Baby & Kids" },
  { value: CategoryType.WOMENS_FASHION, label: "Women's Fashion" },
  { value: CategoryType.MENS_FASHION, label: "Men's Fashion" },
  { value: CategoryType.HEALTH_BEAUTY, label: "Health & Beauty" },
  { value: CategoryType.SPORTS_OUTDOORS, label: "Sports & Outdoors" },
  { value: CategoryType.GAMES_HOBBIES, label: "Games & Hobbies" },
  { value: CategoryType.BOOKS_MUSIC, label: "Books" },
  { value: CategoryType.PET_SUPPLIES, label: "Pet Supplies" },
  { value: CategoryType.ART_COLLECTIBLES, label: "Art & Collectibles" },
  { value: CategoryType.VEHICLES_PARTS, label: "Vehicles & Parts" },
  { value: CategoryType.OTHER, label: "Other" },
  { value: CategoryType.GARAGE_SALES, label: "Garage Sales" },
  { value: CategoryType.WANTED, label: "Wanted" },
];

export const CATEGORYSPEC = {
  electronics_appliances: [
    { name: "brand", label: "Brand", type: "text" },
    { name: "model", label: "Model Number", type: "text" },
    { name: "warranty", label: "Warranty (Months)", type: "number" },
    { name: "powerSource", label: "Power Source", type: "text" },
    { name: "condition", label: "Condition", type: "text" },
    { name: "features", label: "Key Features", type: "textarea" },
    { name: "voltage", label: "Voltage (V)", type: "number" },
  ],
  furniture: [
    { name: "material", label: "Material", type: "text" },
    { name: "dimensions", label: "Dimensions (LxWxH)", type: "text" },
    { name: "weight", label: "Weight", type: "text" },
    { name: "style", label: "Style", type: "text" },
    { name: "color", label: "Color", type: "text" },
    { name: "assemblyRequired", label: "Assembly Required", type: "boolean" },
    { name: "condition", label: "Condition", type: "text" },
  ],
  home_garden: [
    { name: "type", label: "Type", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "dimensions", label: "Dimensions", type: "text" },
    { name: "material", label: "Material", type: "text" },
    { name: "weatherResistance", label: "Weather Resistance", type: "text" },
    { name: "condition", label: "Condition", type: "text" },
  ],
  baby_kids: [
    { name: "ageRange", label: "Age Range", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "material", label: "Material", type: "text" },
    { name: "safetyStandards", label: "Safety Standards", type: "text" },
    { name: "dimensions", label: "Dimensions", type: "text" },
    { name: "weight", label: "Weight Limit", type: "text" },
    { name: "condition", label: "Condition", type: "text" },
  ],
  womens_fashion: [
    { name: "size", label: "Size", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "material", label: "Material", type: "text" },
    { name: "color", label: "Color", type: "text" },
    { name: "pattern", label: "Pattern", type: "text" },
    { name: "condition", label: "Condition", type: "text" },
    {
      name: "occasion",
      label: "Occasion (e.g., Formal, Casual)",
      type: "text",
    },
  ],
  mens_fashion: [
    { name: "size", label: "Size", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "material", label: "Material", type: "text" },
    { name: "color", label: "Color", type: "text" },
    { name: "pattern", label: "Pattern", type: "text" },
    { name: "condition", label: "Condition", type: "text" },
    { name: "fit", label: "Fit (e.g., Slim, Regular)", type: "text" },
  ],
  health_beauty: [
    { name: "type", label: "Type", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "expiryDate", label: "Expiry Date", type: "date" },
    { name: "ingredients", label: "Ingredients", type: "textarea" },
    { name: "skinType", label: "Suitable Skin Type", type: "text" },
    { name: "volume", label: "Volume (ml)", type: "number" },
    {
      name: "usageInstructions",
      label: "Usage Instructions",
      type: "textarea",
    },
  ],
  sports_outdoors: [
    { name: "type", label: "Type", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "weight", label: "Weight", type: "text" },
    { name: "material", label: "Material", type: "text" },
    { name: "dimensions", label: "Dimensions", type: "text" },
    { name: "condition", label: "Condition", type: "text" },
    {
      name: "suitableFor",
      label: "Suitable For (e.g., Hiking, Yoga)",
      type: "text",
    },
  ],
  games_hobbies: [
    { name: "type", label: "Type", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "condition", label: "Condition", type: "text" },
    {
      name: "pieces",
      label: "Number of Pieces (if applicable)",
      type: "number",
    },
    { name: "ageSuitability", label: "Age Suitability", type: "text" },
    { name: "year", label: "Year Released", type: "number" },
  ],
  books_music: [
    { name: "type", label: "Type (Book/Music)", type: "text" },
    { name: "authorArtist", label: "Author/Artist", type: "text" },
    { name: "genre", label: "Genre", type: "text" },
    { name: "publisher", label: "Publisher", type: "text" },
    { name: "year", label: "Year Published/Released", type: "number" },
    { name: "condition", label: "Condition", type: "text" },
  ],
  pet_supplies: [
    { name: "type", label: "Type", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "suitableFor", label: "Suitable For (Pet Type)", type: "text" },
    { name: "dimensions", label: "Dimensions", type: "text" },
    {
      name: "weightLimit",
      label: "Weight Limit (if applicable)",
      type: "text",
    },
    { name: "condition", label: "Condition", type: "text" },
  ],
  art_collectibles: [
    { name: "type", label: "Type", type: "text" },
    { name: "artist", label: "Artist", type: "text" },
    { name: "year", label: "Year Created", type: "number" },
    { name: "medium", label: "Medium", type: "text" },
    { name: "dimensions", label: "Dimensions", type: "text" },
    { name: "provenance", label: "Provenance", type: "textarea" },
    { name: "condition", label: "Condition", type: "text" },
  ],
  vehicles_parts: [
    { name: "type", label: "Type (Vehicle/Part)", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "model", label: "Model", type: "text" },
    { name: "mileage", label: "Mileage (if Vehicle)", type: "number" },
    { name: "year", label: "Year Manufactured", type: "number" },
    { name: "fuelType", label: "Fuel Type (if Vehicle)", type: "text" },
    { name: "condition", label: "Condition", type: "text" },
  ],
  other: [
    { name: "description", label: "Description", type: "textarea" },
    { name: "specifications", label: "Specifications", type: "textarea" },
  ],
  garage_sales: [
    { name: "eventDate", label: "Event Date", type: "date" },
    { name: "location", label: "Location", type: "text" },
    { name: "items", label: "Items List", type: "textarea" },
    { name: "contactInfo", label: "Contact Information", type: "text" },
  ],
  wanted: [
    { name: "description", label: "Description", type: "textarea" },
    { name: "urgency", label: "Urgency Level", type: "text" },
    { name: "preferredCondition", label: "Preferred Condition", type: "text" },
    { name: "budget", label: "Budget Range", type: "text" },
  ],
};
export const SORT_OPTIONS = [
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

// export type CategorySpecificData = {
//   [CategoryType.ELECTRONICS_APPLIANCES]: ElectronicsListing;
//   [CategoryType.FURNITURE]: FurnitureListing;
//   [CategoryType.WOMENS_FASHION]: FashionListing;
//   [CategoryType.MENS_FASHION]: FashionListing;
//   [CategoryType.VEHICLES_PARTS]: VehicleListing;
//   [CategoryType.GARAGE_SALES]: GarageSaleListing;
//   [CategoryType.ALL]: BaseListingData;
//   [CategoryType.HOME_GARDEN]: BaseListingData;
//   [CategoryType.BABY_KIDS]: BaseListingData;
//   [CategoryType.HEALTH_BEAUTY]: BaseListingData;
//   [CategoryType.SPORTS_OUTDOORS]: BaseListingData;
//   [CategoryType.GAMES_HOBBIES]: BaseListingData;
//   [CategoryType.BOOKS_MUSIC]: BaseListingData;
//   [CategoryType.PET_SUPPLIES]: BaseListingData;
//   [CategoryType.ART_COLLECTIBLES]: BaseListingData;
//   [CategoryType.OTHER]: BaseListingData;
// };
