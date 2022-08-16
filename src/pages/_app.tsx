import "../styles/globals.css";
import "../../public/fonts/index.css";
import type { AppProps } from "next/app";
import { GlobalProvider } from "../context/global/Context";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalProvider>
        <>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </>
      </GlobalProvider>
    </>
  );
}

export default MyApp;
