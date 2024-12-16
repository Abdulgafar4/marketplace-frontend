export default function Promotion() {
    return (
        <div className="relative overflow-hidden bg-gray-100" id="promotion">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Simplified: Buy, Sell, and Swap
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Your Ultimate Marketplace for Anything -
                            here is your chance to refresh your
                            wardrobe, home, garage without breaking the bank.
                            CleverMart is the smart way to buy, sell, and
                            trade anything – connecting you people,
                            saving you money, and giving anything a second life.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    alt=""

                                                    src="https://tinyurl.com/583waa7s"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""

                                                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
                                                    className="size-full object-cover filter grayscale brightness-75"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400&h=400&fit=crop"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=400&fit=crop"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&h=400&fit=crop"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="/sign-in"
                                className="inline-block rounded-md border border-transparent bg-gray-500 px-8 py-3 text-center font-medium text-white hover:bg-gray-400"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
