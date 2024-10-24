import React from "react";

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, name }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img
      src={imageUrl}
      alt={name}
      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
    />
  </div>
);

export default ProductImage;
