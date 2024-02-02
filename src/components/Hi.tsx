import Image from "next/image";
import ambassadorGif from "../../public/gifs/sonrie_loop.gif";
import { FC, useEffect, useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useSwiperSlide } from "swiper/react";

let alreadyShow = false;

interface Props {
  title: string;
  description: string;
  quote: string;
}

const Hi: FC<Props> = ({ title, quote, description }) => {
  const [show, setShow] = useState(false);
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
        {title}
      </h2>
      <p className="mt-8 w-72 font-redhat text-white lg:mt-4 lg:w-full lg:max-w-lg lg:text-2xl">
        {description}
      </p>
      <span className="mx-auto mt-2 w-72 text-right font-light italic text-white lg:w-full lg:max-w-lg">
        {quote}
      </span>
      <Transition
        show={show}
        as={Fragment}
        enter="transition-all ease-in-out duration-1000"
        enterFrom="rotate-0 -right-36"
        enterTo="-rotate-[10deg] -right-16 opacity-100"
        leave="transition-all ease-in-out duration-1000"
        leaveFrom="-rotate-[10deg] -right-16"
        leaveTo="rotate-0 -right-52 opacity-0"
      >
        <div className="absolute -rotate-[10deg] -right-16 bottom-2 h-44 w-52">
          <Image
            onLoadingComplete={() => {
              setTimeout(() => {
                setShow(false);
              }, 2000);
            }}
            src={ambassadorGif}
            alt="Uxi"
          />
        </div>
      </Transition>
    </section>
  );
};

export default Hi;
