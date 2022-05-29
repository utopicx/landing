import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className="bg-gray-900">
      <Header />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
