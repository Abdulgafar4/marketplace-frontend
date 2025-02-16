export function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('/assets/CartImg.jpg')] dark:bg-none dark:bg-gray-800">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-400 to-gray-600 opacity-40 dark:from-gray-800 dark:to-black sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl">
            Enrich your online business
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl">
            Buy and Sell with Confidence on CleverMart – Join a Thriving
            Community of Trusted Buyers and Sellers Today! Discover seamless
            transactions, secure payments, and unparalleled customer support in
            a marketplace built for you. Whether you're looking to find great
            deals or sell your products, CleverMart connects you with a
            trustworthy network of like-minded individuals, ensuring peace of
            mind with every interaction.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/sign-up"
              className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Start Selling
            </a>
            <a
              href="/marketplace"
              className="text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Check Market <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gray-400 to-gray-600 opacity-40 dark:from-gray-800 dark:to-black sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
