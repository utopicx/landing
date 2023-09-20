import type {AppProps} from "next/app";
import {GlobalProvider} from "../context/global/Context";
import SEO from "../../next-seo.config";
import {DefaultSeo} from "next-seo";
import localFonts from "../utils/localFonts";
import PreloaderImage from "../components/PreloaderImage";

import "../styles/globals.css";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>

            <section
                className={`${localFonts.RedHatDisplay.variable} ${localFonts.Ubuntu.variable}`}
            >
                <GlobalProvider>
                    <>
                        <DefaultSeo {...SEO} />
                        <Component {...pageProps} />
                        <PreloaderImage/>
                    </>
                </GlobalProvider>
            </section>
        </>
    );
}

export default MyApp;
