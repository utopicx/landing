import Header from "./Header";
import Seo, { PropsSeo } from "./Seo";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  seo: PropsSeo;
}

const Layout: FC<Props> = ({ children, seo }) => {
  return (
    <section className="select-none bg-utopicx-gray-dark font-ubuntu">
      <Seo {...seo} />
      <Header />
      <main className="relative h-screen">{children}</main>
    </section>
  );
};

export default Layout;
