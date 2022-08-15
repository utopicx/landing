import Link from "next/link";

const Page404 = () => {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <video autoPlay loop muted className="min-h-screen w-full object-cover">
        <source src="/videos/space.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-sm font-semibold uppercase tracking-wide text-black">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Uh oh! I <span className="text-black">think</span> you’re lost.
          </h1>
          <p className="mt-2 text-lg font-medium text-black">
            It looks like the page you’re looking for doesn&apos;t exist.
          </p>
          <div className="mt-6">
            <Link href="/">
              <a className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-75 sm:hover:bg-opacity-90">
                Go back home
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx global>{`
        html {
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default Page404;
