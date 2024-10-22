import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { usePathname } from "next/navigation";

export default async function Header() {
  const { userId } = await auth();
  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-black z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 text-lg font-bold"
        >
          CleverMart
        </Link>

        <nav className="hidden md:flex space-x-4">
          {userId && path === "/marketplace" && (
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Dashboard
            </Link>
          )}
          {userId && path === "/dashboard" && (
            <Link
              href="/marketplace"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Marketplace
            </Link>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {userId ? (
            <UserButton afterSignOutUrl="/" />
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
