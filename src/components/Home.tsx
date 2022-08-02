import { useGlobal } from "../context/global/Context";
import LogoHorizontalDark from "./svgs/LogoHorizontalDark";
import arrowTopImg from "../../public/images/flecha.png";
import Image from "next/image";
import LogoMiniAnimation from "./LogoMiniAnimation";
import PatchLogo from "./PatchLogo";

const Home: React.FC = () => {
  const { state } = useGlobal();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center"
    >
      <div className="relative">
        <LogoHorizontalDark className="h-32 lg:h-64" />
        <PatchLogo />
        <LogoMiniAnimation />
      </div>
      <h1 className="sr-only">Utópicx</h1>
      <p className="w-52 text-center text-white lg:-mt-10 lg:w-80 lg:text-2xl">
        Slogan o pequeño texto con la personalidad de marca
      </p>
      <button
        type="button"
        className="z-10 mt-20 h-10 w-10 border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-yellow focus:ring-offset-1 focus:ring-offset-transparent lg:mt-16 lg:h-16 lg:w-16"
        onClick={() => state.swiperMaster?.slideTo(1)}
      >
        <p className="sr-only">Siguiente pantalla</p>
        <Image
          className="rotate-180"
          objectFit="contain"
          height="100%"
          width="100%"
          src={arrowTopImg}
          alt="Flecha hacia abajo"
        />
      </button>
    </section>
  );
};

export default Home;
