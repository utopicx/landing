import type { NextPage } from "next";
import { InView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutUs from "../components/AboutUs";
import Apps from "../components/Apps";
import Cta from "../components/Cta";
import Hi from "../components/Hi";
import Home from "../components/Home";
import Layout from "../components/Layout";
import { GlobalActionKind } from "../context/global/actions";
import { useGlobal } from "../context/global/Context";
import { A11y, Parallax } from "swiper";
import Image from "next/image";
import esfera1Img from "../../public/shapes/esfera1.png";
import esfera2Img from "../../public/shapes/esfera2.png";
import fig2Img from "../../public/shapes/fig2.png";
import porotoImg from "../../public/shapes/poroto.png";
import poroto3Img from "../../public/shapes/poroto3.png";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/a11y";

const Index: NextPage = () => {
  const { dispatch } = useGlobal();

  return (
    <Layout>
      <Swiper
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, A11y]}
        onSwiper={(swiper) =>
          dispatch({
            type: GlobalActionKind.SET_SWIPER_MASTER,
            payload: { swiperMaster: swiper },
          })
        }
        parallax={true}
      >
        <div
          slot="container-start"
          className="absolute inset-0 h-[140%]"
          data-swiper-parallax="-180%"
        >
          <div className="absolute bottom-0 -left-96 h-[32rem] w-[32rem] -rotate-90">
            <Image className="blur-sm" src={poroto3Img} alt="Poroto" />
          </div>
        </div>
        <div
          slot="container-start"
          className="absolute inset-0 h-[140%]"
          data-swiper-parallax="-150%"
        >
          <div className="absolute bottom-72 -right-28 h-48 w-48">
            <Image className="blur-sm" src={esfera2Img} alt="Esfera" />
          </div>
        </div>
        <div
          slot="container-start"
          className="absolute inset-0 h-[140%]"
          data-swiper-parallax="-220%"
        >
          <div className="absolute -top-64 -right-96 h-[32rem] w-[32rem] rotate-[140deg]">
            <Image className="blur-sm" src={fig2Img} alt="Fig" />
          </div>
          <div className="absolute left-2 bottom-[26rem] h-16 w-16">
            <Image src={esfera1Img} alt="Esfera" />
          </div>
        </div>
        <div
          slot="container-start"
          className="absolute inset-0 h-[265%]"
          data-swiper-parallax="-70%"
        >
          <div className="absolute bottom-96 -right-28 h-48 w-48">
            <Image className="blur-sm" src={esfera2Img} alt="Esfera" />
          </div>
        </div>
        <div
          slot="container-start"
          className="absolute inset-0 h-[520%]"
          data-swiper-parallax="-80%"
        >
          <div className="absolute -bottom-12 -right-32 h-64 w-64 rotate-[25deg]">
            <Image src={fig2Img} alt="Fig" />
          </div>
        </div>
        <div
          slot="container-start"
          className="absolute inset-0 h-[220%]"
          data-swiper-parallax="-120%"
        >
          <div className="absolute -bottom-12 -left-60 h-96 w-96 rotate-90">
            <Image className="blur-sm" src={porotoImg} alt="Poroto" />
          </div>
        </div>
        <SwiperSlide>
          <InView
            as="div"
            className="h-screen"
            threshold={0.4}
            onChange={(inView) => {
              inView &&
                dispatch({
                  type: GlobalActionKind.SET_SECTION,
                  payload: { section: "Inicio" },
                });
            }}
          >
            <Home />
          </InView>
        </SwiperSlide>
        <SwiperSlide>
          <InView
            as="div"
            className="h-screen"
            threshold={0.4}
            onChange={(inView) => {
              inView &&
                dispatch({
                  type: GlobalActionKind.SET_SECTION,
                  payload: { section: "Proyecto" },
                });
            }}
          >
            <Hi />
          </InView>
        </SwiperSlide>
        <SwiperSlide>
          <InView
            as="div"
            className="h-screen"
            threshold={0.4}
            onChange={(inView) => {
              inView &&
                dispatch({
                  type: GlobalActionKind.SET_SECTION,
                  payload: { section: "Nosotrxs" },
                });
            }}
          >
            <AboutUs />
          </InView>
        </SwiperSlide>
        <SwiperSlide>
          <InView
            as="div"
            className="h-screen"
            threshold={0.4}
            onChange={(inView) => {
              inView &&
                dispatch({
                  type: GlobalActionKind.SET_SECTION,
                  payload: { section: "Apps" },
                });
            }}
          >
            <Apps />
          </InView>
        </SwiperSlide>
        <SwiperSlide>
          <InView
            as="div"
            className="h-screen"
            threshold={0.4}
            onChange={(inView) => {
              inView &&
                dispatch({
                  type: GlobalActionKind.SET_SECTION,
                  payload: { section: "Contacto" },
                });
            }}
          >
            <Cta />
          </InView>
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
};

export default Index;
