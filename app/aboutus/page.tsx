"use client";

import React  from "react";
import AboutHeroSection from "@/components/about/aboutHeroSection";
import TeamSection from "@/components/about/teamsection";
import ContactSales from "@/components/about/contactSales";

export default function Aboutus(){
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <AboutHeroSection />
            <TeamSection/>
            <ContactSales />
        </div>
    );
}