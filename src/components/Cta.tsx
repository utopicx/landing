import { useState } from "react";
import ModalCta from "./modals/ModalCta";
import LogoHorizontalDark from "./svgs/LogoHorizontalDark";

const Cta: React.FC = () => {
  const [showModalCta, setShowModalCta] = useState(false);

  return (
    <section
      id="cta"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <LogoHorizontalDark className="h-32" />
      <button
        type="button"
        onClick={() => setShowModalCta(true)}
        className="text-utopicx-cyan text-lg rounded-bl-lg rounded-tr-lg border-2 border-utopicx-cyan px-6"
      >
        Comunicate con nosotrxs
      </button>
      <a className="text-white mt-2" href="mailto:equipo@utópicx.com">
        equipo@utópicx.com
      </a>
      <a
        href="#home"
        className="mt-16 border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-yellow focus:ring-offset-transparent"
      >
        <p className="sr-only">Volver al comienzo</p>
        <img
          className="rotate-180"
          src="/arrowDown.png"
          alt="Flecha hacia abajo"
        />
      </a>
      <ModalCta show={showModalCta} closeModal={() => setShowModalCta(false)} />
    </section>
  );
};

export default Cta;
