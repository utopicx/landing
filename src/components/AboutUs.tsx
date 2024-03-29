import Image from "next/image";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { Navigation } from "swiper/modules";
import arrowTop from "../../public/images/flecha.png";
import { FC, Fragment, useEffect, useState } from "react";
import ambassadorImg from "../../public/gifs/spray_loop.gif";
import { Transition } from "@headlessui/react";
import Team from "./Team";

import "swiper/css";
import "swiper/css/navigation";

let alreadyShow = false;

interface Props {
  teams: Array<Team & { id: number }>;
}

const AboutUs: FC<Props> = ({ teams }) => {
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
      className="relative"
    >
      <div className="container mx-auto flex min-h-screen flex-col pt-16 lg:flex-row lg:items-center">
        <h2 className="sr-only text-center text-4xl font-bold text-utopicx-cyan">
          Nosotrxs
        </h2>
        <Transition
            show={showAmbassador}
            as={Fragment}
            enter="transition-all ease-out duration-1000"
            enterFrom="-left-60"
            enterTo="left-10"
            leave="transition-all ease-in-out duration-1000"
            leaveFrom="left-10 opacity-100"
            leaveTo="-left-60 opacity-0"
        >
          <div className="absolute left-10 bottom-32 z-10 h-[16rem] w-[16rem]">
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
              <Image src={arrowTop} alt="Arrow"/>
            </div>
          </button>
        </div>
        <div className="hidden lg:flex lg:h-full lg:items-center">
          <button
              className="absolute right-2 z-20 h-14 w-14 disabled:opacity-50"
              disabled={
                  Array.isArray(teams) &&
                  stateSwiper?.currentSlide === teams.length - 2
              }
              onClick={() => stateSwiper?.swiper?.slideNext()}
          >
            <div className="relative h-8 w-14 rotate-90">
              <Image src={arrowTop} alt="Arrow"/>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
