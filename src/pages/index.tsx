import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
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
import BgParallax from "../components/BgParallax";
import authService from "../services/auth";
import appService from "../services/app";
import teamService from "../services/team";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/a11y";
import globalService from "../services/global";

export const getStaticProps = async () => {
  const ONE_DAY = 60 * 60 * 24;
  if (!process.env.EMAIL || !process.env.PASSWORD || !process.env.API_URL) {
    throw new Error("Missing environment variables");
  }
  const auth = await authService.signIn({
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  });
  global.jwt = auth.jwt;
  const [apps, teams, globalData] = await Promise.all([
    appService.getAll(),
    teamService.getAll(),
    globalService.getAll(),
  ]);
  return {
    props: {
      apps: apps.data,
      teams: teams.data,
      globalData: globalData.data,
    },
    revalidate: ONE_DAY,
  };
};

const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  apps,
  teams,
}) => {
  const { dispatch } = useGlobal();
  console.log({ apps, teams });
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
        parallax
        grabCursor
      >
        <BgParallax />
        <SwiperSlide>
          <InView
            as="div"
            className="h-screen"
            threshold={0.6}
            onChange={(inView) => {
              inView &&
                dispatch({
                  type: GlobalActionKind.SET_SECTION,
                  payload: { section: "" },
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
            threshold={0.6}
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
            threshold={0.6}
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
            threshold={0.6}
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
            threshold={0.6}
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
