import { CameraIcon, ShieldCheckIcon, TrendingUpIcon } from "lucide-react";

const features = [
  {
    name: "List Anything",
    description:
      "Sell items from your home, garage, or business. Electronics, furniture, tools, collectibles – if you can photograph it, you can list it.",
    icon: CameraIcon,
  },
  {
    name: "Smart Pricing",
    description:
      "Our intelligent pricing tool helps you set competitive rates. Get real-time market insights to maximize your sales across all categories.",
    icon: TrendingUpIcon,
  },
  {
    name: "Secure Transactions",
    description:
      "Shop and sell with confidence. Our secure payment system and buyer/seller protection ensure a safe experience.",
    icon: ShieldCheckIcon,
  },
];

export default function Features() {
  return (
    <div
      className="overflow-hidden bg-gray-100 py-24 sm:py-32 dark:bg-gray-900"
      id="features"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
                More Than Just a Marketplace – Your Strategic Selling Companion
                The CleverMart dashboard isn't just a tool – it's your personal
                marketplace strategist. From advanced analytics to intelligent
                pricing suggestions, we empower you to sell smarter, not harder.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 dark:text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-gray-100">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-gray-500 dark:text-gray-400"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/assets/dashImg.jpg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 filter grayscale brightness-100 dark:filter-none dark:brightness-110"
          />
        </div>
      </div>
    </div>
  );
}
