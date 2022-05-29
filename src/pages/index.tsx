import type { NextPage } from "next";
import AboutUs from "../components/AboutUs";
import Apps from "../components/Apps";
import Cta from "../components/Cta";
import Hi from "../components/Hi";
import Home from "../components/Home";
import Layout from "../components/Layout";
import LogoHorizontalDark from "../components/svgs/LogoHorizontalDark";

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
      <Hi />
      <AboutUs />
      <Apps />
      <Cta />
    </Layout>
  );
};

export default Index;
