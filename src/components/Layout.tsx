import Header from "./Header";
import Seo from "./Seo";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className="bg-utopicx-gray-dark">
      <Seo />
      <Header />
      <main className="h-screen relative">{children}</main>
    </section>
  );
};

export default Layout;
