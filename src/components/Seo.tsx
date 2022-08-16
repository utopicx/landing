import { NextSeo } from "next-seo";
import { FC } from "react";

const Seo: FC = () => {
  return (
    <NextSeo
      title="Utópicx"
      description="Utópicx landing page."
      canonical="https://utopicx.com"
      openGraph={{
        url: "https://utopicx.com",
        title: "Utópicx",
        description: "Utópicx landing page.",
      }}
    />
  );
};

export default Seo;
