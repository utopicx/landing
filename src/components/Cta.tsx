import { useState } from "react";
import { useGlobal } from "../context/global/Context";
import ModalCta from "./modals/ModalCta";
import LogoHorizontalDark from "./svgs/LogoHorizontalDark";
import Image from "next/image";
import arrowDownImg from "../../public/images/arrowDown.png";
import btnContactoImg from "../../public/images/btn_contacto.png";

const Cta: React.FC = () => {
  const { state } = useGlobal();
  const [showModalCta, setShowModalCta] = useState(false);
  return (
    <section
      id="cta"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <LogoHorizontalDark className="h-32 md:h-64" />
      <h3 className="-mt-2 mb-2 text-white font-medium text-2xl md:text-4xl md:-mt-10 md:mb-4">
        Comunicate con nosotrxs
      </h3>
      <button
        type="button"
        onClick={() => setShowModalCta(true)}
        className="w-64 md:w-80 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-cyan focus:ring-offset-transparent"
      >
        <Image src={btnContactoImg} alt="Comunicate" />
      </button>
      <a
        className="text-white mt-1 md:text-2xl"
        href="mailto:equipo@utópicx.com"
      >
        equipo@utópicx.com
      </a>
      <button
        type="button"
        onClick={() => state.swiperMaster?.slideTo(0)}
        className="mt-10 border border-transparent w-10 h-10 md:w-16 md:h-16 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-yellow focus:ring-offset-transparent"
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
