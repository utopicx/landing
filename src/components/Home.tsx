import LogoHorizontalDark from "./svgs/LogoHorizontalDark";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <LogoHorizontalDark className="h-32" />
      <h1 className="sr-only">Utópicx</h1>
      <p className="text-white text-center w-52">
        Slogan o pequeño texto con la personalidad de marca
      </p>
      <a
        className="mt-20 border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-yellow focus:ring-offset-transparent"
        href="#hi"
      >
        <p className="sr-only">Siguiente pantalla</p>
        <img src="/arrowDown.png" alt="Flecha hacia abajo" />
      </a>
    </section>
  );
};

export default Home;
