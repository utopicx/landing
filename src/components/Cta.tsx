import { useState } from "react";
import { useGlobal } from "../context/global/Context";
import ModalCta from "./modals/ModalCta";
import LogoHorizontalDark from "./svgs/LogoHorizontalDark";
import Image from "next/image";
import arrowDownImg from "../../public/images/arrowDown.png";
import btnContactoImg from "../../public/images/btn_contacto.png";
import LogoMiniAnimation from "./LogoMiniAnimation";
import PatchLogo from "./PatchLogo";

const Cta: React.FC = () => {
  const { state } = useGlobal();
  const [showModalCta, setShowModalCta] = useState(false);
  return (
    <section
      id="cta"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div className="relative">
        <LogoHorizontalDark className="h-32 lg:h-64" />
        <PatchLogo />
        <LogoMiniAnimation isReverse />
      </div>
      <h3 className="-mt-2 mb-2 text-2xl font-medium text-white lg:-mt-10 lg:mb-4 lg:text-4xl">
        Comunicate con nosotrxs
      </h3>
      <button
        type="button"
        onClick={() => setShowModalCta(true)}
        className="w-64 focus:outline-none focus:ring-1 focus:ring-utopicx-cyan focus:ring-offset-1 focus:ring-offset-transparent lg:w-80"
      >
        <Image src={btnContactoImg} alt="Comunicate" />
      </button>
      <a
        className="mt-1 text-white lg:text-2xl"
        href="mailto:equipo@utópicx.com"
      >
        equipo@utópicx.com
      </a>
      <button
        type="button"
        onClick={() => state.swiperMaster?.slideTo(0)}
        className="mt-10 h-10 w-10 border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-yellow focus:ring-offset-1 focus:ring-offset-transparent lg:h-16 lg:w-16"
      >
        <p className="sr-only">Volver al comienzo</p>
        <Image
          className="rotate-180"
          objectFit="contain"
          height="100%"
          width="100%"
          src={arrowDownImg}
          alt="Flecha hacia arriba"
        />
      </button>
      <ModalCta show={showModalCta} closeModal={() => setShowModalCta(false)} />
    </section>
  );
};

export default Cta;
