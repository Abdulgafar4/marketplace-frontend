export default function WhyCleverMart() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32" id="why-clevermart">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    Still Wondering 🤔Why CleverMart?
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Mobile friendly
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    CleverMart adjusts to fit perfectly on any screen size, whether you're using a smartphone, tablet, or desktop. The layout adapts smoothly,
                                    ensuring that all elements are easy to interact with, from product listings to the checkout process.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src="/assets/MobileCMView.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    CleverMart ensures that every page loads quickly, thanks to a combination of optimized code, compressed images, and lazy loading for product visuals.
                                    This means users spend less time waiting and more time engaging with the platform.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <img
                                    className="w-full max-lg:max-w-xs filter grayscale brightness-75"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    CleverMart prioritizes security to ensure a safe experience for its users.
                                    The platform implements robust encryption protocols (like SSL/TLS) to
                                    protect user data, particularly during transactions. Sensitive information,
                                    such as payment details, is securely handled and stored in compliance with
                                    industry standards.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                <img
                                    className="h-[min(152px,40cqw)] object-cover filter grayscale brightness-75"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Powerful APIs
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    CleverMart uses powerful APIs that enable seamless integration with third-party services, enhancing its functionality for both buyers and sellers.
                                    These APIs allow for smooth payment processing, inventory management, and real-time data syncing.                                 </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div
                                    className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-600 shadow-2xl">
                                    <img src="/assets/API's.jpg" alt="API's"
                                         className="absolute inset-0 h-full w-full object-cover filter grayscale brightness-75"/>
                                </div>
                                </div>

                            </div>
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
