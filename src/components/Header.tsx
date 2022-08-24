import { FC, useEffect, useRef, useState } from "react";
import { useGlobal } from "../context/global/Context";
import ModalMenu from "./modals/ModalMenu";
import LogoMini from "./svgs/LogoMini";
import BurgerImg from "../../public/images/btn_menu.png";
import Image from "next/image";
import classNames from "../utils/classNames";

const Header: FC = () => {
  const { state } = useGlobal();
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const { current } = subtitleRef;
    if (state.section && current) {
      current.classList.remove("wordGlitch");
      void current.offsetWidth;
      current.classList.add("wordGlitch");
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
    <header className="fixed top-0 z-20 flex w-screen items-center justify-between px-4 pt-2 lg:pt-6">
      <button
        type="button"
        onClick={() => state.swiperMaster?.slideTo(0)}
        className="rounded-md border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-yellow focus:ring-offset-1 focus:ring-offset-transparent"
      >
        <span className="sr-only">Ir al inicio</span>
        <div
          className={classNames(
            state.isLogoPositioned ? "opacity-100" : "opacity-0",
            "transition-opacity"
          )}
        >
          <LogoMini
            ref={logoRef}
            title="Utópicx"
            className="h-12 w-12 rotate-0 transform-gpu transition-transform duration-700 lg:h-16 lg:w-16"
          />
        </div>
      </button>
      <h2
        ref={subtitleRef}
        id="title"
        className="wordGlitch text-3xl font-bold text-utopicx-cyan lg:h-14 lg:text-5xl"
      >
        {state.section}
      </h2>
      <button
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-magenta focus:ring-offset-1 focus:ring-offset-transparent lg:h-14 lg:w-14"
        type="button"
        onClick={() => setShowMenu(true)}
      >
        <p className="sr-only">Abrir menu</p>
        <Image objectFit="contain" layout="fill" src={BurgerImg} alt="Menu" />
      </button>
      <ModalMenu show={showMenu} closeModal={() => setShowMenu(false)} />
    </header>
  );
};

export default Header;
