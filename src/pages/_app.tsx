import "../styles/globals.css";
import "../../public/fonts/index.css";
import type { AppProps } from "next/app";
import { GlobalProvider } from "../context/global/Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}

export default MyApp;
