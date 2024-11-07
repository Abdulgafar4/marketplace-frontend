"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const path = usePathname();
  const { userId } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleGoBack = () => router.back();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-black z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold italic">
          CLEVERMART
        </Link>

        {/* Toggle and ModeToggle for small screens */}
        <div className="flex items-center space-x-4 md:hidden">
          {userId && path !== "/onboarding" && (
            <>
              <UserButton />
            </>
          )}
          {!userId && (
            <Link
              href="/sign-in"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Log In
            </Link>
          )}
          <ModeToggle />
          <button onClick={toggleMenu} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex space-x-4">
          {userId && path.startsWith("/marketplace/") && (
            <button
              onClick={handleGoBack}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Go Back
            </button>
          )}
          {userId && path === "/marketplace" && (
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Dashboard
            </Link>
          )}
          {userId && (path === "/dashboard" || path === "/") && (
            <Link
              href="/marketplace"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Marketplace
            </Link>
          )}
        </nav>

        {/* Profile and Cart Icons for larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          {userId && path !== "/onboarding" && (
            <>
              <Link
                href="/marketplace/cart"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <ShoppingCart className="w-6 h-6" />
              </Link>
              <UserButton />
            </>
          )}
          {!userId && (
            <Link
              href="/sign-in"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Log In
            </Link>
          )}

          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        >
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-white dark:bg-black p-4">
            {/* Close button aligned to the right */}
            <div className="flex justify-end mb-4">
              <button onClick={toggleMenu} aria-label="Close menu">
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Menu Items with Icons */}
            <nav className="flex flex-col space-y-4">
              <Link
                href="/marketplace"
                onClick={toggleMenu}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Marketplace</span>
              </Link>

              {userId && (
                <Link
                  href="/dashboard"
                  onClick={toggleMenu}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a7 7 0 017 7v2h1a3 3 0 110 6h-1v4h-2v-4H8v4H6v-4H5a3 3 0 010-6h1V9a7 7 0 016-7zM9 9v2h6V9a5 5 0 00-10 0v2h1V9a3 3 0 016 0z" />
                  </svg>
                  <span>Dashboard</span>
                </Link>
              )}

              {userId && (
                <Link
                  href="/marketplace/cart"
                  onClick={toggleMenu}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
