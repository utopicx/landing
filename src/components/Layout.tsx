import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className="bg-utopicx-gray-dark">
      <Header />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
