import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "CleverMart",
  description:
    "CleverMart is a web and mobile application for buying and selling and also allows users to post, manage, and edit their products. It includes features for user authentication, product uploading (with images), and rich text editing for product descriptions. This application is designed to scale and adapt to a growing user base, with features like advanced search, product analytics, and potentially integrating payment systems in the future. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
