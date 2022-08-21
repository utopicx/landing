import Image from "next/image";
import ambassadorGif from "../../public/gifs/sonrie_loop.gif";
import { FC, useEffect, useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useGlobal } from "../context/global/Context";
import { useSwiperSlide } from "swiper/react";

let alreadyShow = false;

const Hi: FC = () => {
  const [show, setShow] = useState(false);
  const { state } = useGlobal();
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    if (!alreadyShow && swiperSlide.isActive) {
      setShow(true);
      alreadyShow = true;
    }
  }, [swiperSlide.isActive]);

  return (
    <section
      id="hi"
      className="relative flex min-h-screen flex-col items-center justify-center text-center"
    >
      <h2 className="text-4xl font-bold text-utopicx-magenta lg:text-7xl">
        {state.texts?.global.ProyectTitle}
      </h2>
      <p className="mt-8 w-72 font-redhat text-white lg:mt-4 lg:w-full lg:max-w-lg lg:text-2xl">
        {state.texts?.global.ProyectDescription}
      </p>
      <Transition
        show={show}
        as={Fragment}
        enter="transition-all ease-in-out duration-1000"
        enterFrom="rotate-0 -right-36"
        enterTo="-rotate-[10deg] -right-16"
        leave="transition-all ease-in-out duration-1000"
        leaveFrom="-rotate-[10deg] -right-16"
        leaveTo="rotate-0 -right-52"
      >
        <div className="absolute bottom-2 h-52 w-52">
          <Image
            onLoadingComplete={() => {
              setTimeout(() => {
                setShow(false);
              }, 2000);
            }}
            src={ambassadorGif}
            alt="Embajador"
          />
        </div>
      </Transition>
    </section>
  );
};

export default Hi;
