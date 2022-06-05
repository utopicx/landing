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
          data-swiper-parallax="-23%"
        >
          <img
            className="absolute -top-64 blur-sm rotate-[140deg] -right-96 object-contain max-w-none h-[32rem]"
            src="/shapes/fig2.png"
          />
          <img
            className="absolute blur-sm object-contain max-w-none bottom-0 -left-72 h-[32rem] -rotate-90"
            src="/shapes/poroto3.png"
          />
          <img
            className="absolute object-contain max-w-none left-2 bottom-[26rem] h-16"
            src="/shapes/esfera1.png"
          />
          <img
            className="absolute blur-sm object-contain max-w-none bottom-72 -right-28 h-48"
            src="/shapes/esfera2.png"
          />
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
