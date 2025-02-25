export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.950),theme(colors.gray.900))] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-gray-800 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:ring-gray-700 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          What Our Users Say
        </h2>
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 dark:text-gray-300 sm:text-2xl/9">
            <p>
              “CleverEcoMart revolutionized how I sell my handmade crafts. The
              platform is intuitive and the community is wonderful!”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900 dark:text-gray-100">
                Sarah Chen
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900 dark:fill-gray-300"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
