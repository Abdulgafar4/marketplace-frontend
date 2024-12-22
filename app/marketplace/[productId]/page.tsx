"use client";

import React, { useState } from "react";
import { dummyProducts } from "../../api/dummyData";

import ProductImage from "@/components/product/ProductImage";
import ProductOverview from "@/components/product/ProductOverview";
import ActionButtons from "@/components/product/ActionButtons";
import CollapsibleSection from "@/components/product/CollapsibleSection";
import CommentSection from "@/components/product/Comment";
import {useWishlist} from "@/lib/hooks/useWishlist";

function ProductPage({ params }: { params: { productId: string } }) {
  const product = dummyProducts.find((p) => p.id === params.productId);
  const { data: wishlistItems = [] } = useWishlist();

  const isInWishlist = React.useMemo(() => {
    return wishlistItems.some(item => item.id === product?.id);
  }, [wishlistItems, product?.id]);

  const [openSections, setOpenSections] = useState({
    sellerInfo: true,
    shippingInfo: false,
    warrantyInfo: false,
    paymentOptions: false,
    faqs: false,
    relatedProducts: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const relatedProducts = dummyProducts.filter(
    (relatedProduct) =>
      relatedProduct.category === product?.category &&
      relatedProduct.id !== params.productId
  );

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  const productRating = product.reviews?.length
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) /
      product.reviews.length
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-gray-200 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        {/* Left Column: Product Image and Overview */}
        <div className="space-y-6">
          <ProductImage imageUrl={product.imageUrl} name={product.name} />
          <ProductOverview
            name={product.name}
            rating={productRating}
            price={product.price}
            description={product.description}
            reviewCount={product.reviews?.length || 0}
          />
          <ActionButtons
            sellerContact={product.seller.contact}
            product={product}
            isInWishlist={isInWishlist}
          />
        </div>

        {/* Right Column: Additional Product Details */}
        <div className="space-y-6">
          <CollapsibleSection
            title="Seller Information"
            badge={`${product.seller.totalSales} sales`}
            rating={product.seller.rating}
            isOpen={openSections.sellerInfo}
            onToggle={() => toggleSection("sellerInfo")}
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Name</span>
                <span className="text-sm text-gray-900">
                  {product.seller.name}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Location
                </span>
                <span className="text-sm text-gray-900">
                  {product.seller.location}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Contact
                </span>
                <span className="text-sm text-gray-900">
                  {product.seller.contact}
                </span>
              </div>
            </div>
          </CollapsibleSection>

          { product.shipping &&
          <CollapsibleSection
            title="Shipping Information"
            isOpen={openSections.shippingInfo}
            onToggle={() => toggleSection("shippingInfo")}
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Methods
                </span>
                <span className="text-sm text-gray-900">
                  {product?.shipping.methods.join(", ")}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Cost</span>
                <span className="text-sm text-gray-900">
                  ${product?.shipping.cost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Estimated Delivery
                </span>
                <span className="text-sm text-gray-900">
                  {product?.shipping.estimatedDelivery}
                </span>
              </div>
            </div>
          </CollapsibleSection>
          }
          <CollapsibleSection
            title="Warranty & Return Policy"
            isOpen={openSections.warrantyInfo}
            onToggle={() => toggleSection("warrantyInfo")}
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Warranty
                </span>
                <span className="text-sm text-gray-900">
                  {product.warranty}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Return Window
                </span>
                {product.returnPolicy &&
                <span className="text-sm text-gray-900">
                  {product?.returnPolicy.returnWindow}
                </span>
                }
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Conditions
                </span>
                {product.returnPolicy &&
                <span className="text-sm text-gray-900">
                  {product?.returnPolicy.conditions}
                </span>
                }
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Payment Options"
            isOpen={openSections.paymentOptions}
            onToggle={() => toggleSection("paymentOptions")}
          >
            <div className="space-y-2">
              {product.paymentOptions.map((option: any, index: any) => (
                <div key={index} className="text-sm text-gray-900">
                  {option}
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="FAQs"
            isOpen={openSections.faqs}
            onToggle={() => toggleSection("faqs")}
          >
            <div className="space-y-4">
              {product.faq.map((faq: any, index: any) => (
                <div key={index} className="space-y-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {faq.question}
                  </p>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Related Products"
            isOpen={openSections.relatedProducts}
            onToggle={() => toggleSection("relatedProducts")}
          >
            <div className="space-y-4">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="flex items-center space-x-4"
                  >
                    <img
                      src={relatedProduct.imageUrl}
                      alt={relatedProduct.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        {relatedProduct.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        ${relatedProduct.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">
                  No related products found.
                </p>
              )}
            </div>
          </CollapsibleSection>
        </div>
        <CommentSection productId={params.productId} />
      </div>
    </div>
  );
}

export default ProductPage;
