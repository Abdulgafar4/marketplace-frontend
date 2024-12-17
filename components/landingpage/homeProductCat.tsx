"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "Electronics & Appliances", emoji: "📱" },
  { name: "Furniture", emoji: "🛋️" },
  { name: "Home & Garden", emoji: "🏡" },
  { name: "Baby & Kids", emoji: "👶" },
  { name: "Women's Fashion", emoji: "👚" },
  { name: "Men's Fashion", emoji: "👔" },
  { name: "Health & Beauty", emoji: "💄" },
  { name: "Sports & Outdoors", emoji: "⚽" },
  { name: "Games & Hobbies", emoji: "🎮" },
  { name: "Books & Music", emoji: "📚" },
  { name: "Pet Supplies", emoji: "🐾" },
  { name: "Art & Collectibles", emoji: "🎨" },
  { name: "Vehicles & Parts", emoji: "🚗" },
  { name: "Other", emoji: "📦" },
  { name: "Garage Sales", emoji: "🏷️" },
  { name: "Wanted", emoji: "🔍" },
  { name: "Music", emoji: "🎵" },
  { name: "Audio Equipment", emoji: "🎧" },
];

export default function ProductCategories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-600" id="productCat">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Product Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer group"
            >
              <div className="p-4 flex flex-col items-center justify-center">
                <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-3 mb-3 group-hover:bg-primary transition-colors duration-300">
                  <span
                    className="text-2xl"
                    role="img"
                    aria-label={category.name}
                  >
                    {category.emoji}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
