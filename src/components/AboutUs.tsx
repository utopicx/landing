import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { Navigation } from "swiper";
import usBorderImg from "../../public/images/nosotrxs_marco.png";
import arrowTop from "../../public/images/flecha.png";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const PERSONS = Array.from(Array(6).keys());

const AboutUs: React.FC = () => {
  const [stateSwiper, setStateSwiper] = useState<{
    currentSlide: number;
    swiper: SwiperType;
  }>();

  useEffect(() => {
    stateSwiper?.swiper?.on("slideChange", (swiper) => {
      setStateSwiper({
        ...stateSwiper,
        currentSlide: swiper.activeIndex + 1,
      });
    });
  }, [stateSwiper?.swiper]);

  return (
    <section
      id="aboutUs"
      className="min-h-screen pt-16 lg:flex lg:items-center"
    >
      <h2 className="sr-only text-center text-4xl font-bold text-utopicx-cyan">
        Nosotrxs
      </h2>
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
        {PERSONS.map((i) => (
          <SwiperSlide key={`aboutUs-${i}`}>
            <div className="md:flex md:items-center md:gap-x-4 md:pb-8 lg:block lg:pb-0">
              <div className="relative mx-auto mt-8 h-80 w-56 rounded-md md:mr-0 lg:mr-auto lg:h-80 lg:w-64">
                <div className="absolute inset-0">
                  <Image layout="fill" src={usBorderImg} alt="Borde " />
                </div>
                <div className="absolute top-4 right-4 h-full w-full rounded-bl-2xl rounded-tr-2xl rounded-br-md rounded-tl-md bg-gray-500" />
              </div>
              <div className="mx-auto -mt-1 px-14 md:ml-0 md:px-0 lg:ml-auto lg:-mt-2 lg:w-64">
                <div className="lg:-ml-4">
                  <h3 className="relative z-10 text-4xl font-bold text-utopicx-magenta lg:text-6xl">
                    Apodo
                  </h3>
                  <p className="my-3 font-bold italic text-white lg:my-1 lg:text-2xl">
                    Mega rol
                  </p>
                  <p className="w-52 font-light text-white lg:w-full lg:pr-6 lg:text-lg">
                    Super mega descripción de cada unx, que somos super geniales
                    y sexys.
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
          disabled={stateSwiper?.currentSlide === PERSONS.length - 2}
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
