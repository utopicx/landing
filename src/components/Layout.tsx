import Header from "./Header";
import Seo from "./Seo";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <section className="select-none bg-utopicx-gray-dark font-ubuntu">
      <Seo />
      <Header />
      <main className="relative h-screen">{children}</main>
    </section>
  );
};

export default Layout;
