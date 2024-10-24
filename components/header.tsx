"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const path = usePathname();
  const { userId } = useAuth();
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-black z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-extrabold italic"
        >
          CLEVERMART
        </Link>

        <nav className="hidden md:flex space-x-4">
          {userId && path.startsWith("/marketplace/") && (
            <button
              onClick={handleGoBack}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Go Back
            </button>
          )}
          {userId && path === "/marketplace" && (
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Dashboard
            </Link>
          )}
          {userId && (path === "/dashboard" || path === "/") && (
            <Link
              href="/marketplace"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Marketplace
            </Link>
          )}
          
        </nav>

        
        <div className="flex items-center space-x-4">
        {userId && (
          <Link
            href="/marketplace/cart"
            className="ml-4 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            <ShoppingCart className="w-6 h-6" /> {/* Adjust size as needed */}
          </Link>
        )}
          {userId ? (
            <UserButton />
          ) : (
            <Link
              href="/sign-in"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Log In
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
