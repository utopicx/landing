import { useEffect, useRef, useState } from "react";
import { useGlobal } from "../context/global/Context";
import ModalMenu from "./modals/ModalMenu";
import LogoMini from "./svgs/LogoMini";
import styles from "./Header.module.css";
import classNames from "../utils/classNames";
import BurgerImg from "../../public/images/burger.png";
import Image from "next/image";

const Header: React.FC = () => {
  const { state } = useGlobal();
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const { current } = subtitleRef;
    if (state.section && current) {
      current.classList.remove(styles.wordGlitch);
      void current.offsetWidth;
      current.classList.add(styles.wordGlitch);
    }
  }, [state.section]);

  useEffect(() => {
    const { current } = logoRef;
    if (current && state.swiperMaster) {
      let currentClass = "rotate-0";
      state.swiperMaster.on("slideChange", (swiper) => {
        let rotate = "rotate-0";

        switch (swiper.realIndex) {
          case 0:
            rotate = "rotate-0";
            break;
          case 1:
            rotate = "rotate-120";
            break;

          case 2:
            rotate = "rotate-240";
            break;

          case 3:
            rotate = "rotate-360";
            break;

          case 4:
            rotate = "rotate-[480deg]";
            break;
          default:
            break;
        }
        current.classList.add(rotate);
        current.classList.remove(currentClass);
        currentClass = rotate;
      });
    }
  }, [state.swiperMaster]);

  return (
    <header className="flex justify-between items-center px-4 py-2 fixed z-20 top-0 w-screen">
      <button
        type="button"
        onClick={() => state.swiperMaster?.slideTo(0)}
        className="border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-yellow focus:ring-offset-transparent"
      >
        <span>Inicio</span>
        <LogoMini
          ref={logoRef}
          title="Utópicx"
          className="w-12 h-12 duration-700 rotate-0 transition-transform transform-gpu"
        />
      </button>
      <h2
        ref={subtitleRef}
        className={classNames(
          styles.wordGlitch,
          "text-2xl text-utopicx-magenta font-bold"
        )}
      >
        {state.section}
      </h2>
      <button
        className="border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
        type="button"
        onClick={() => setShowMenu(true)}
      >
        <p className="sr-only">Abrir menu</p>
        <Image src={BurgerImg} alt="Menu" className="w-10 h-10" />
      </button>
      <ModalMenu show={showMenu} closeModal={() => setShowMenu(false)} />
    </header>
  );
};

export default Header;
