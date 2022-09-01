import { FC, useState } from "react";
import { useGlobal } from "../context/global/Context";
import ModalCta from "./modals/ModalCta";
import LogoHorizontalDark from "./svgs/LogoHorizontalDark";
import Image from "next/image";
import arrowTopImg from "../../public/images/flecha.png";
import btnSendImg from "../../public/images/btn_enviar.png";
import LogoMiniAnimation from "./LogoMiniAnimation";
import PatchLogo from "./PatchLogo";

const Cta: FC = () => {
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
      <h3 className="-mt-2 mb-2 font-redhat text-2xl font-medium text-white lg:-mt-10 lg:mb-4 lg:text-4xl">
        {state.texts?.global.ContactDescription}
      </h3>
      <button
        type="button"
        onClick={() => setShowModalCta(true)}
        className="inline-flex w-64 items-center rounded-bl-2xl rounded-tl rounded-tr-2xl rounded-br border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-cyan focus:ring-offset-1 focus:ring-offset-transparent lg:w-80"
      >
        <div className="relative h-12 w-64 lg:h-14 lg:w-80">
          <Image src={btnSendImg} alt="Enviar" layout="fill" />
        </div>
      </button>
      <a
        className="mt-1 rounded-md font-redhat text-white focus:outline-none focus:ring-1 focus:ring-utopicx-cyan focus:ring-offset-1 focus:ring-offset-transparent lg:text-2xl"
        href="mailto:equipo@utópicx.com"
      >
        equipo@utópicx.com
      </a>
      <button
        type="button"
        onClick={() => state.swiperMaster?.slideTo(0, 750)}
        className="mt-10 h-10 w-10 rounded-md border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-yellow focus:ring-offset-1 focus:ring-offset-transparent lg:h-16 lg:w-16"
      >
        <p className="sr-only">Volver al comienzo</p>
        <div className="relative h-[1.4rem] w-10 lg:h-9 lg:w-16">
          <Image layout="fill" src={arrowTopImg} alt="Flecha hacia arriba" />
        </div>
      </button>
      <ModalCta show={showModalCta} closeModal={() => setShowModalCta(false)} />
    </section>
  );
};

export default Cta;
