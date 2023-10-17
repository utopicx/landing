import Link from "next/link";

const Page404 = () => {
    return (
        <main className="relative flex h-screen flex-col overflow-hidden">
            <video autoPlay loop muted className="h-screen w-full object-cover">
                <source src="/videos/space.mp4" type="video/mp4"/>
            </video>
            <div className="absolute inset-0 flex items-center">
                <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
                    <p className="text-sm font-semibold uppercase tracking-wide text-black">
                        Error 404
                    </p>
                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Uh oh! <span className="text-black">Creo</span> que estas perdidx.
                    </h1>
                    <p className="mt-2 text-lg font-medium text-black">
                        Parece que la página que estás buscando no existe.
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/"
                            className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-75 sm:hover:bg-opacity-90"
                        >
                            Ir al inicio
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page404;
