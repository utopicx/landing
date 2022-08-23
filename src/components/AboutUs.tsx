import Image from "next/image";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { Navigation } from "swiper";
import usBorderImg from "../../public/images/nosotrxs_marco.png";
import arrowTop from "../../public/images/flecha.png";
import { FC, Fragment, useEffect, useState } from "react";
import ambassadorImg from "../../public/gifs/spray_loop.gif";
import { Transition } from "@headlessui/react";
import { useGlobal } from "../context/global/Context";

import "swiper/css";
import "swiper/css/navigation";

let alreadyShow = false;

const AboutUs: FC = () => {
  const { state } = useGlobal();
  const [stateSwiper, setStateSwiper] = useState<{
    currentSlide: number;
    swiper: SwiperType;
  }>();
  const swiperSlide = useSwiperSlide();
  const [showAmbassador, setShowAmbassador] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    stateSwiper?.swiper?.on("slideChange", (swiper) => {
      setStateSwiper({
        ...stateSwiper,
        currentSlide: swiper.activeIndex + 1,
      });
    });
  }, [stateSwiper?.swiper]);

  useEffect(() => {
    if (!alreadyShow && swiperSlide.isActive) {
      setShowAmbassador(true);
      alreadyShow = true;
    }
  }, [swiperSlide.isActive]);

  return (
    <section
      id="aboutUs"
      className="container relative mx-auto min-h-screen pt-16 lg:flex lg:items-center"
    >
      <h2 className="sr-only text-center text-4xl font-bold text-utopicx-cyan">
        Nosotrxs
      </h2>
      <Transition
        show={showAmbassador}
        as={Fragment}
        enter="transition-transform ease-out duration-1000"
        enterFrom="-translate-x-28"
        enterTo="translate-x-0"
        leave="transition-transform ease-in-out duration-1000"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-28"
      >
        <div className="absolute bottom-32 -left-28 z-10 h-[16rem] w-[16rem]">
          <Image
            onLoadingComplete={() => {
              setTimeout(() => {
                setShowVideo(true);
              }, 2000);
              setTimeout(() => {
                setShowAmbassador(false);
              }, 4000);
            }}
            src={ambassadorImg}
            alt="Embajador"
          />
        </div>
      </Transition>
      <Swiper
        className="swiper-us lg:!mx-14"
        navigation
        modules={[Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiperLocal) =>
          setStateSwiper({
            currentSlide: 0,
            swiper: swiperLocal,
          })
        }
      >
        {state.texts?.teams.map((team) => (
          <SwiperSlide key={`aboutUs-${team.id}`}>
            <div className="md:flex md:items-center md:gap-x-4 md:pb-8 lg:block lg:pb-0">
              <div className="relative mx-auto mt-8 h-80 w-56 rounded-md md:mr-0 lg:mr-auto lg:h-80 lg:w-64">
                <div className="absolute inset-0">
                  <Image layout="fill" src={usBorderImg} alt="Borde" />
                </div>
                <div className="absolute top-4 right-4 h-full w-full">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="aspect-[7/10] rounded-bl-2xl rounded-tr-2xl rounded-br rounded-tl"
                    src={team.image.data.attributes.url}
                    alt={team.name}
                  />
                </div>
                <Transition
                  show={showVideo}
                  as={Fragment}
                  enter="ease-out"
                  enterFrom="blur-xl"
                  enterTo="blur-none"
                  leave="ease-in-out"
                  leaveFrom="blur-none"
                  leaveTo="blur-xl"
                >
                  <div className="absolute top-4 right-4 z-10 h-full w-full transition-all duration-1000 hover:opacity-0">
                    <video
                      className="h-full w-full rounded-bl-2xl rounded-tr-2xl rounded-br rounded-tl object-cover object-top"
                      autoPlay
                      loop
                      muted
                    >
                      <source src={team.imageModified.data[0].attributes.url} />
                    </video>
                  </div>
                </Transition>
              </div>
              <div className="mx-auto -mt-1 px-14 md:ml-0 md:px-0 lg:ml-auto lg:-mt-2 lg:w-64">
                <div className="lg:-ml-4">
                  <h3 className="relative z-10 text-4xl font-bold text-utopicx-magenta lg:text-6xl">
                    {team.name}
                  </h3>
                  <p className="my-3 font-redhat font-bold italic text-white lg:my-1 lg:text-xl">
                    {team.role}
                  </p>
                  <p className="w-52 font-redhat font-light text-white lg:w-full lg:pr-6 lg:text-lg lg:leading-6  ">
                    {team.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:flex lg:h-full lg:items-center">
        <button
          className="z-16 absolute left-2 h-14 w-14 disabled:opacity-50"
          disabled={
            stateSwiper?.currentSlide === 1 || stateSwiper?.currentSlide === 0
          }
          onClick={() => stateSwiper?.swiper?.slidePrev()}
        >
          <Image
            width="100%"
            height="100%"
            objectFit="contain"
            className="-rotate-90"
            src={arrowTop}
            alt="Arrow"
          />
        </button>
      </div>
      <div className="hidden lg:flex lg:h-full lg:items-center">
        <button
          className="absolute right-2 z-20 h-14 w-14 disabled:opacity-50"
          disabled={
            !!state.texts?.teams &&
            stateSwiper?.currentSlide === state.texts.teams.length - 2
          }
          onClick={() => stateSwiper?.swiper?.slideNext()}
        >
          <Image
            width="100%"
            height="100%"
            objectFit="contain"
            className="rotate-90"
            src={arrowTop}
          />
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
