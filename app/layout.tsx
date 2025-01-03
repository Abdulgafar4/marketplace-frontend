import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {Providers} from "@/app/providers";

export const metadata: Metadata = {
  title: "CleverMart",
  description:
    "An application by Clevertag. CleverMart is a web and mobile application for buying and selling and also allows users to post, manage, and edit their products. It includes features for user authentication, product uploading (with images), and rich text editing for product descriptions. This application is designed to scale and adapt to a growing user base, with features like advanced search, product analytics, and potentially integrating payment systems in the future. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClerkProvider afterSignOutUrl="/">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>

            <Header />
            {children}
            <Footer />
            </Providers>

          </ThemeProvider>
        </ClerkProvider>
        <ToastContainer
            position= "top-center"
        autoClose={2000}
        closeOnClick={true}
        />
      </body>
    </html>
  );
}
