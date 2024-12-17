"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCategories from "@/components/landingpage/homeProductCat";
import Features from "@/components/landingpage/features";
import WhyCleverMart from "@/components/landingpage/whyclevermart";
import Promotion from "@/components/landingpage/promotion";
import Stats from "@/components/landingpage/stats";
import Testimonials from "@/components/landingpage/testimonials";
import { HeroSection } from "@/components/landingpage/herosection";
import Pricing from "@/components/landingpage/pricing";

export default function CleverMartLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <HeroSection />
      <Promotion />
      <Features />
      <WhyCleverMart />
      <ProductCategories />
      <Stats />
      <Testimonials />
      <Pricing />
      <div className="relative isolate bg-gray-100 dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-gray-600 to-gray-900 opacity-30"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
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
      </div>
    </div>
  );
}
