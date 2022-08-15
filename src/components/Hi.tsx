import Image from "next/image";
import ambassadorGif from "../../public/gifs/sonrie.gif";
import { FC, useEffect, useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useGlobal } from "../context/global/Context";

const Hi: FC = () => {
  const [show, setShow] = useState(false);
  const { state } = useGlobal();

  useEffect(() => {
    if (state.swiperMaster) {
      let timeout: NodeJS.Timeout | undefined = undefined;
      state.swiperMaster.on("slideChange", ({ realIndex }) => {
        timeout && clearTimeout(timeout);
        if (realIndex === 1) {
          setShow(true);
          timeout = setTimeout(() => {
            setShow(false);
          }, 2500);
        } else {
          setShow(false);
        }
      });
    }
  }, [state.swiperMaster]);

  return (
    <section
      id="hi"
      className="relative flex min-h-screen flex-col items-center justify-center text-center"
    >
      <h2 className="text-4xl font-bold text-utopicx-magenta lg:text-7xl">
        Saludo
      </h2>
      <p className="mt-8 w-72 font-redhat text-white lg:mt-4 lg:w-full lg:max-w-lg lg:text-2xl">
        Somos una empresa innovadora que busca estar a la vanguardia en las
        tendencias tecnológicas.
      </p>
      <Transition
        show={show}
        as={Fragment}
        enter="transition ease-in-out duration-1000"
        enterFrom="rotate-0 opacity-0 -right-16"
        enterTo="-rotate-[10deg] opacity-100 -right-16"
        leave="transition-all ease-in-out duration-1000"
        leaveFrom="-rotate-[10deg] opacity-100 -right-16"
        leaveTo="rotate-0 opacity-0 -right-24"
      >
        <div className="absolute bottom-2 h-40 w-40">
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
