import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export default function AboutHeroSection() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-gray-600">About Us</p>
                            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Empowering Software Solutions
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-700">
                                At Clevertag Software Company, we specialize in crafting innovative and scalable software solutions
                                tailored to meet your unique business needs. Whether you're a startup or an enterprise, our expertise
                                ensures seamless integration and outstanding results.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt="Clevertag Software Company"
                        src="/assets/SoftwareComp.jpg"
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                            <p>
                                Clevertag is driven by a commitment to quality, reliability, and customer satisfaction. Our solutions
                                are built with cutting-edge technology and a user-centric approach, ensuring that your business operates
                                at peak efficiency. From software development to cloud-based solutions, we have you covered.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-gray-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Seamless Cloud Integration.</strong>
                                        Leverage the power of cloud computing to scale your business and optimize operations.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-gray-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Unmatched Security.</strong>
                                        Our solutions are fortified with enterprise-grade security features to protect your data and operations.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-gray-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Robust Infrastructure.</strong>
                                        Our platforms are designed to deliver top-tier performance and reliability.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Partner with Clevertag Software Company and transform your vision into reality. Let us build the future together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
