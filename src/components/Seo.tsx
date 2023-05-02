import { NextSeo } from "next-seo";
import { FC } from "react";
import { useGlobal } from "../context/global/Context";

export interface PropsSeo {
  title?: string;
  description?: string;
  url?: string;
}

const Seo: FC<PropsSeo> = ({ title, description, url }) => {
  const { state } = useGlobal();
  const titleSection = state.section ? `${state.section} | ` : "";
  return (
    <NextSeo
      title={`${titleSection}${title || "Utópicx"}`}
      description={description || "Utópicx landing page."}
      canonical={url || "https://utopicx.com"}
      openGraph={{
        url: url || "https://utopicx.com",
        title: title || "Utópicx",
        description: description || "Utópicx landing page.",
      }}
    />
  );
};

export default Seo;
