"use client";
import {useAuth, UserButton, useUser} from "@clerk/nextjs";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ModeToggle } from "@/components/modeToggle";
import { ClevertagLogo } from "@/components/cleverlogo";
import Cart from "@/app/marketplace/cart/page";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Why Clevermart", href: "#why-clevermart" },
  { name: "Pricing", href: "#pricing" },
  { name: "About US", href: "/aboutus" },
];

const userNav =[
  { name: "Marketplace", href: "/marketplace" },
  { name: "Sell Item", href: "/dashboard" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { userId } = useAuth();
  const { user } = useUser();


  return (
    <header className="inset-x-0 top-0 z-50 fixed bg-white dark:bg-gray-800">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex md:flex-1">
          <a href="/" className="flex items-center -m-1.5 p-1.5">
            <ClevertagLogo className="h-8 w-8 mr-[10px]" />
            <span className="sr-only sm:not-sr-only  text-xl font-semibold text-gray-900 dark:text-white">
              CleverMart
            </span>
          </a>
        </div>
        <div className="flex md:hidden">
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
        { !userId && (
            <>
            <div className="hidden md:flex md:gap-x-12">
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
          <div className="hidden md:flex md:flex-1 md:justify-end mr-6">
          <a
          href="/sign-in"
          className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
          Log in
          </a>
          </div>
            </>
        ) }

        { userId && (
            <>
            <div className="hidden md:flex md:gap-x-12">
              {userNav.map((item) => (
                  <a
                      key={item.name}
                      href={item.href}
                      className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {item.name}
                  </a>
              ))}
            </div>
            <div className="hidden md:flex md:flex-1 md:justify-end mr-6">
              <Cart />
            </div>
            <div className="hidden md:flex md:gap-x-12 mr-6">
              <UserButton/>
            </div>
            </>
            ) }

            <div className="hidden md:flex md:gap-x-12">
              <ModeToggle/>
            </div>
            </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-40" />
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
              {!userId && (
                  <>
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
                  </>
                  )}
              {userId && (
                  <>
                    <div className="space-y-2 py-6">
                      {userNav.map((item) => (
                          <a
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            {item.name}
                          </a>
                      ))}

                    </div>
                    <div className="py-6 flex flex-col gap-3 ">
                      <div
                          className="flex items-cente text-base/7 font-bold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white space-x-2 cursor-pointer"
                      >
                        <Cart/>

                      </div>

                      <div className="flex items-center space-x-2">
                        <UserButton />
                        <a href="\user-profile"
                        >
                        <span
                            className="text-gray-600 cursor-pointer text-base/7 font-bold hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"

                        >

                          {user?.username && user?.username.charAt(0).toUpperCase() + user?.username.slice(1) || "Profile"} </span>
                        </a>

                      </div>
                    </div>

                  </>
              )}
            </div>
          </div>
        </DialogPanel>
          </Dialog>
    </header>
  );
}
