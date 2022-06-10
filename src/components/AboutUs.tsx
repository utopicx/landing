import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import usBorderImg from "../../public/images/nosotrxs_marco.png";

import "swiper/css";
import "swiper/css/navigation";

const AboutUs: React.FC = () => {
  return (
    <section
      id="aboutUs"
      className="min-h-screen pt-16 lg:flex lg:items-center"
    >
      <h2 className="sr-only text-center text-4xl font-bold text-utopicx-cyan">
        Nosotrxs
      </h2>
      <Swiper className="swiper-us" navigation modules={[Navigation]}>
        <SwiperSlide>
          <div className="lg:flex lg:justify-center lg:gap-x-4 lg:py-4">
            <div className="relative mx-auto mt-8 h-80 w-56 rounded-md lg:mx-0 lg:mt-0 lg:h-96 lg:w-72">
              <div className="absolute inset-0">
                <Image layout="fill" src={usBorderImg} alt="Borde " />
              </div>
              <div className="absolute top-4 right-4 h-full w-full rounded-bl-2xl rounded-tr-2xl rounded-br-md rounded-tl-md bg-gray-500" />
            </div>
            <div className="px-14 lg:flex lg:flex-col lg:justify-center lg:px-0">
              <h3 className="relative z-10 -mt-3 text-4xl font-bold text-utopicx-magenta lg:mt-0 lg:text-7xl">
                Apodo
              </h3>
              <p className="my-3 font-bold italic text-white lg:text-3xl">
                Mega rol
              </p>
              <p className="w-52 font-light text-white lg:text-lg">
                Super mega descripción de cada unx, que somos super geniales y
                sexys.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex lg:justify-center lg:gap-x-4 lg:py-4">
            <div className="relative mx-auto mt-8 h-80 w-56 rounded-md lg:mx-0 lg:mt-0 lg:h-96 lg:w-72">
              <div className="absolute inset-0">
                <Image layout="fill" src={usBorderImg} alt="Borde " />
              </div>
              <div className="absolute top-4 right-4 h-full w-full rounded-bl-2xl rounded-tr-2xl rounded-br-md rounded-tl-md bg-gray-500" />
            </div>
            <div className="px-14 lg:flex lg:flex-col lg:justify-center lg:px-0">
              <h3 className="relative z-10 -mt-3 text-4xl font-bold text-utopicx-magenta lg:mt-0 lg:text-7xl">
                Apodo
              </h3>
              <p className="my-3 font-bold italic text-white lg:text-3xl">
                Mega rol
              </p>
              <p className="w-52 font-light text-white lg:text-lg">
                Super mega descripción de cada unx, que somos super geniales y
                sexys.
              </p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="lg:flex lg:justify-center lg:gap-x-4 lg:py-4">
            <div className="relative mx-auto mt-8 h-80 w-56 rounded-md lg:mx-0 lg:mt-0 lg:h-96 lg:w-72">
              <div className="absolute inset-0">
                <Image layout="fill" src={usBorderImg} alt="Borde " />
              </div>
              <div className="absolute top-4 right-4 h-full w-full rounded-bl-2xl rounded-tr-2xl rounded-br-md rounded-tl-md bg-gray-500" />
            </div>
            <div className="px-14 lg:flex lg:flex-col lg:justify-center lg:px-0">
              <h3 className="relative z-10 -mt-3 text-4xl font-bold text-utopicx-magenta lg:mt-0 lg:text-7xl">
                Apodo
              </h3>
              <p className="my-3 font-bold italic text-white lg:text-3xl">
                Mega rol
              </p>
              <p className="w-52 font-light text-white lg:text-lg">
                Super mega descripción de cada unx, que somos super geniales y
                sexys.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex lg:justify-center lg:gap-x-4 lg:py-4">
            <div className="relative mx-auto mt-8 h-80 w-56 rounded-md lg:mx-0 lg:mt-0 lg:h-96 lg:w-72">
              <div className="absolute inset-0">
                <Image layout="fill" src={usBorderImg} alt="Borde " />
              </div>
              <div className="absolute top-4 right-4 h-full w-full rounded-bl-2xl rounded-tr-2xl rounded-br-md rounded-tl-md bg-gray-500" />
            </div>
            <div className="px-14 lg:flex lg:flex-col lg:justify-center lg:px-0">
              <h3 className="relative z-10 -mt-3 text-4xl font-bold text-utopicx-magenta lg:mt-0 lg:text-7xl">
                Apodo
              </h3>
              <p className="my-3 font-bold italic text-white lg:text-3xl">
                Mega rol
              </p>
              <p className="w-52 font-light text-white lg:text-lg">
                Super mega descripción de cada unx, que somos super geniales y
                sexys.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default AboutUs;
