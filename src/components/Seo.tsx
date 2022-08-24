import { NextSeo } from "next-seo";
import { FC } from "react";
import { useGlobal } from "../context/global/Context";

const Seo: FC = () => {
  const { state } = useGlobal();
  return (
    <NextSeo
      title={state.texts?.seo.Title || "Utópicx"}
      description={state.texts?.seo.Description || "Utópicx landing page."}
      canonical={state.texts?.seo.URL || "https://utopicx.com"}
      openGraph={{
        url: state.texts?.seo.URL || "https://utopicx.com",
        title: state.texts?.seo.Title || "Utópicx",
        description: state.texts?.seo.Description || "Utópicx landing page.",
      }}
    />
  );
};

export default Seo;
