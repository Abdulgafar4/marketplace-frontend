import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Shield, CreditCard } from "lucide-react";
import bsimage from "../public/assets/images/BSimage-bg.png";
import Image from "next/image";
import Link from "next/link";

const products = {
  electronics: [
    {
      name: "Premium Headphones",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&h=200",
    },
    {
      name: "Latest Smartphone",
      price: 899.99,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300&h=200",
    },
    {
      name: "Ultra Laptop",
      price: 1299.99,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300&h=200",
    },
  ],
  fashion: [
    {
      name: "Designer Watch",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&h=200",
    },
    {
      name: "Leather Handbag",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=300&h=200",
    },
    {
      name: "Running Shoes",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&h=200",
    },
  ],
  home: [
    {
      name: "Modern Coffee Table",
      price: 399.99,
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=300&h=200",
    },
    {
      name: "Smart Kitchen Blender",
      price: 179.99,
      image:
        "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=300&h=200",
    },
    {
      name: "Decorative Lamp",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=300&h=200",
    },
  ],
};

const testimonials = [
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
export default function CleverMartLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Buy and Sell Smarter with CleverMart
              </h1>
              <p className="text-xl mb-6">
                Join a trusted community of sellers and buyers.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-700 to-black text-white dark:from-gray-200 dark:to-white dark:text-black"
              >
                Start Selling
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src={bsimage}
                alt="CleverMart Marketplace"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Product Showcase with Category Filters */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Explore Our Marketplace
          </h2>
          <Tabs defaultValue="electronics" className="w-full">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="electronics">Electronics</TabsTrigger>
              <TabsTrigger value="fashion">Fashion</TabsTrigger>
              <TabsTrigger value="home">Home Goods</TabsTrigger>
            </TabsList>
            {Object.entries(products).map(([category, items]) => (
              <TabsContent
                key={category}
                value={category}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {items.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden transition-transform hover:scale-105"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        ${item.price}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose CleverMart */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose CleverMart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <ShoppingCart size={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-400">
                List your products in minutes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield size={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe and Secure</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We protect your transactions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CreditCard size={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Payments</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get paid quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-100 dark:bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied users and list your first product for
            free!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-700 to-black text-white dark:from-gray-200 dark:to-white dark:text-black"
          >
            <Link href="/sign-in">Join Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
