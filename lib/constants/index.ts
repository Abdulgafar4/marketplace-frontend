// Constants
export const CATEGORIES = [
  { value: "all", label: "All Categories" },
  { value: "electronics_appliances", label: "Electronics & Appliances" },
  { value: "furniture", label: "Furniture" },
  { value: "home_garden", label: "Home & Garden" },
  { value: "baby_kids", label: "Baby & Kids" },
  { value: "womens_fashion", label: "Women's Fashion" },
  { value: "mens_fashion", label: "Men's Fashion" },
  { value: "health_beauty", label: "Health & Beauty" },
  { value: "sports_outdoors", label: "Sports & Outdoors" },
  { value: "games_hobbies", label: "Games & Hobbies" },
  { value: "books_music", label: "Books & Music" },
  { value: "pet_supplies", label: "Pet Supplies" },
  { value: "art_collectibles", label: "Art & Collectibles" },
  { value: "vehicles_parts", label: "Vehicles & Parts" },
  { value: "other", label: "Other" },
  { value: "garage_sales", label: "Garage Sales" },
  { value: "wanted", label: "Wanted" },
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
