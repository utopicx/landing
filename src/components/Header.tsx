import LogoMini from "./svgs/LogoMini";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 fixed top-0 w-screen bg-gray-900 bg-opacity-95">
      <a
        href="#home"
        className="border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-yellow focus:ring-offset-transparent"
      >
        <LogoMini className="w-12 h-12" />
      </a>
      <button
        className="border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
        type="button"
      >
        <p className="sr-only">Abrir menu</p>
        <img
          className="object-contain w-10 h-10"
          src="/burger.png"
          alt="Menu"
        />
      </button>
    </header>
  );
};

export default Header;
