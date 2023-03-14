import Image from "next/image";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { Navigation } from "swiper";
import arrowTop from "../../public/images/flecha.png";
import { FC, Fragment, useEffect, useState } from "react";
import ambassadorImg from "../../public/gifs/spray_loop.gif";
import { Transition } from "@headlessui/react";
import { useGlobal } from "../context/global/Context";
import Team from "./Team";

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
  const { teams } = state?.texts || { teams: [] };

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
      className="container relative mx-auto flex min-h-screen flex-col pt-16 lg:flex-row lg:items-center"
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
            alt="Uxi"
          />
        </div>
      </Transition>
      <Swiper
        className="swiper-us flex flex-grow items-center lg:!mx-14  "
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
        {teams.length
          ? teams.map((team) => {
              if (!team) {
                return null;
              }
              return (
                <SwiperSlide key={`aboutUs-${team.id}`}>
                  <Team
                    name={team.name}
                    video={team.imageModified.data[0].attributes.url}
                    description={team.description}
                    image={team.image.data.attributes.url}
                    showVideo={showVideo}
                    role={team.role}
                  />
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
      <div className="hidden lg:flex lg:h-full lg:items-center">
        <button
          className="z-16 absolute left-2 inline-flex h-14 w-14 items-center justify-center disabled:opacity-50"
          disabled={
            stateSwiper?.currentSlide === 1 || stateSwiper?.currentSlide === 0
          }
          onClick={() => stateSwiper?.swiper?.slidePrev()}
        >
          <div className="relative h-8 w-14 -rotate-90">
            <Image src={arrowTop} alt="Arrow" />
          </div>
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
          <div className="relative h-8 w-14 rotate-90">
            <Image src={arrowTop} alt="Arrow" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
