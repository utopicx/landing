import Image from "next/image";
import fig1Img from "../../public/shapes/fig1.png";
import fig3Img from "../../public/shapes/fig3.png";
import porotoImg from "../../public/shapes/poroto.png";
import slideHandImg from "../../public/images/swipe.png";
import { Fragment, useEffect, useState } from "react";
import { useGlobal } from "../context/global/Context";
import { Transition } from "@headlessui/react";
import ambassadorImg from "../../public/gifs/embajador_inicio.png";

const BgParallax = () => {
  const [show, setShow] = useState(true);
  const [showAmbassador, setShowAmbassador] = useState(false);
  const { state } = useGlobal();

  useEffect(() => {
    if (state.swiperMaster) {
      state.swiperMaster.on("slideChange", () => {
        setTimeout(() => {
          setShow(false);
        }, 1500);
      });
    }
  }, [state.swiperMaster]);

  useEffect(() => {
    setTimeout(() => {
      setShowAmbassador(true);
    }, 500);
  }, []);

  return (
    <>
      <div className="absolute inset-0 h-[140%]" data-swiper-parallax="-180%">
        <Transition
          show={showAmbassador}
          as={Fragment}
          enter="transition-transform ease-out duration-1000"
          enterFrom="-translate-y-14 -translate-x-14"
          enterTo="translate-y-0 translate-x-0"
          leave="transition-transform ease-in-out duration-1000"
          leaveFrom="translate-y-0 translate-x-0"
          leaveTo="-translate-y-20 -translate-x-20"
        >
          <div className="absolute -top-[5rem] -left-[4rem] h-[16rem] w-[16rem] rotate-[120deg] blur-sm md:-top-[3rem] md:-left-[3rem]">
            <Image
              onLoadingComplete={() => {
                setTimeout(() => {
                  setShowAmbassador(false);
                }, 2000);
              }}
              src={ambassadorImg}
              alt="Embajador"
            />
          </div>
        </Transition>
        <div className="absolute -top-[14rem] -left-[16rem] h-[28rem] w-[28rem] md:-left-[14rem]">
          <Image
            layout="fill"
            objectFit="contain"
            className="rotate-[120deg] blur-sm"
            src={fig1Img}
            alt="Figura"
          />
        </div>
      </div>
      <div className="absolute inset-0 h-[140%]" data-swiper-parallax="-180%">
        <div className="absolute -top-[9rem] -right-[17rem] h-[22rem] w-[22rem] md:-top-[6rem] md:-right-[17rem]">
          <Image
            layout="fill"
            objectFit="contain"
            className="-rotate-[70deg] -scale-x-100 blur-sm md:-rotate-[60deg]"
            src={fig3Img}
            alt="Figura"
          />
        </div>
      </div>
      <div className="absolute inset-0 h-full" data-swiper-parallax="-180%">
        <div className="absolute -bottom-[18rem] -left-[22.5rem] h-[32rem] w-[32rem] md:-left-[20rem] md:-bottom-[16rem] md:h-[28rem] md:w-[28rem]">
          <div className="-rotate-90">
            <img
              className="transform-gpu animate-[balance-y_8s_ease-in-out_infinite] blur md:blur-sm"
              src="/shapes/poroto3.png"
              alt="Esfera"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 h-full" data-swiper-parallax="-400%">
        <div className="absolute left-8 bottom-[4rem]">
          <img
            width={64}
            height={64}
            className="transform-gpu animate-[balance-y_3s_ease-in-out_infinite]"
            src="/shapes/esfera3.png"
            alt="Esfera"
          />
        </div>
      </div>
      <div className="absolute inset-0 h-full" data-swiper-parallax="-250%">
        <div className="absolute -bottom-[4rem] -right-[6rem] h-48 w-48 md:-bottom-[5rem]">
          <img
            className="-scale-90 transform-gpu animate-[balance_5s_ease-in-out_infinite] blur-sm md:blur-none"
            src="/shapes/esfera4.png"
            alt="Esfera"
          />
        </div>
      </div>
      <div className="absolute inset-0 h-[200%]" data-swiper-parallax="-120%">
        <div className="absolute -bottom-[20rem] -right-[14rem] h-72 w-72 md:-bottom-[17rem] md:-right-[10rem]">
          <img
            className="animate-spin-slow blur md:blur-sm"
            src="/shapes/esfera2.png"
            alt="Esfera"
          />
        </div>
      </div>
      <div className="absolute inset-0 h-[290%]" data-swiper-parallax="-70%">
        <div className="absolute -bottom-8 -left-[24rem] h-[38rem] w-[38rem] rotate-[95deg] md:-left-[22rem]">
          <Image className="blur" src={porotoImg} alt="Poroto" />
        </div>
      </div>
      <div className="absolute inset-0 h-[520%]" data-swiper-parallax="-80%">
        <div className="absolute -bottom-20 -right-32 h-64 w-64 rotate-[25deg] md:-right-28 md:rotate-[35deg]">
          <img
            className="transform-gpu animate-[balance-rotate_8s_ease-in-out_infinite]"
            src="/shapes/fig2.png"
            alt="Fig"
          />
        </div>
      </div>
      <div className="absolute inset-0 h-full" data-swiper-parallax="0%">
        <Transition
          show={show}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="hidden hover:bg-black/50 lg:absolute lg:bottom-12 lg:right-12 lg:z-10 lg:block lg:h-28 lg:w-28 lg:rounded-full lg:bg-black/10 lg:p-5">
            <Image objectFit="contain" src={slideHandImg} alt="slide hand" />
          </div>
        </Transition>
      </div>
    </>
  );
};

export default BgParallax;
