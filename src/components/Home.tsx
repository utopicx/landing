import { useGlobal } from "../context/global/Context";
import LogoHorizontalDark from "./svgs/LogoHorizontalDark";
import arrowDownImg from "../../public/images/arrowDown.png";
import Image from "next/image";

const Home: React.FC = () => {
  const { state } = useGlobal();

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center relative min-h-screen"
    >
      <LogoHorizontalDark className="h-32 md:h-64" />
      <h1 className="sr-only">Utópicx</h1>
      <p className="text-white text-center w-52 md:w-80 md:text-2xl md:-mt-10">
        Slogan o pequeño texto con la personalidad de marca
      </p>
      <button
        type="button"
        className="mt-20 md:mt-16 border border-transparent w-10 h-10 md:w-16 md:h-16 z-10 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-yellow focus:ring-offset-transparent"
        onClick={() => state.swiperMaster?.slideTo(1)}
      >
        <p className="sr-only">Siguiente pantalla</p>
        <Image
          objectFit="contain"
          height="100%"
          width="100%"
          src={arrowDownImg}
          alt="Flecha hacia abajo"
        />
      </button>
    </section>
  );
};

export default Home;
