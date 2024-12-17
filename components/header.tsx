"use client";
// import { useAuth, UserButton } from "@clerk/nextjs";
// import { usePathname, useRouter } from "next/navigation";
// import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ModeToggle } from "@/components/modeToggle";
import { ClevertagLogo } from "@/components/cleverlogo";
import { Button } from "./ui/button";

const navigation = [
  { name: "Marketplace", href: "/marketplace" },
  { name: "Features", href: "#features" },
  { name: "Why Clevermart", href: "#why-clevermart" },
  { name: "Pricing", href: "#pricing" },
  { name: "About US", href: "/aboutus" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-50 fixed bg-white dark:bg-gray-800">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center -m-1.5 p-1.5">
            <ClevertagLogo className="h-8 w-8 mr-[10px]" />
            <span className="sr-only sm:not-sr-only  text-xl font-semibold text-gray-900 dark:text-white">
              CleverMart
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex mr-[5px] items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
          <ModeToggle />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-6">
          <a
            href="/sign-in"
            className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            Log in
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <ModeToggle />
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center -m-1.5 p-1.5">
              <ClevertagLogo className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-[10px]" />
              <span className="sr-only sm:not-sr-only  text-xl font-semibold text-gray-900 dark:text-white">
                CleverMart
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/50">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
