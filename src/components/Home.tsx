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
        className="mt-20 border border-transparent z-10 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-yellow focus:ring-offset-transparent"
        href="#hi"
      >
        <p className="sr-only">Siguiente pantalla</p>
        <img src="/arrowDown.png" alt="Flecha hacia abajo" />
      </a>
      <img className="absolute bottom-0 left-0" src="/shapes/Capa 5.png" />
      <img className="absolute bottom-40 left-4" src="/shapes/Rectangle.png" />
      <img className="absolute top-2 right-0" src="/shapes/Rectangle (2).png" />
      <img
        className="absolute bottom-6 right-0"
        src="/shapes/Rectangle (1).png"
      />
    </section>
  );
};

export default Home;
