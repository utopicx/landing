import type { InferGetStaticPropsType, NextPage } from "next";
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
import { A11y, Parallax } from "swiper/modules";
import BgParallax from "../components/BgParallax";
import authService from "../services/auth";
import appService from "../services/app";
import teamService from "../services/team";
import globalService from "../services/global";
import seoService from "../services/seo";
import { shuffle } from "../utils/array";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/a11y";

const ONE_DAY = 60 * 60 * 24;

export const getStaticProps = async () => {
  if (
    !process.env.EMAIL ||
    !process.env.PASSWORD ||
    !process.env.NEXT_PUBLIC_API_URL ||
    !process.env.API_URL
  ) {
    throw new Error("Missing environment variables");
  }
  const auth = await authService.signIn({
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  });

  global.jwt = auth.jwt;
  const [apps, teams, globalData, seo] = await Promise.all([
    appService.getAll(),
    teamService.getAll(),
    globalService.getAll(),
    seoService.getAll(),
  ]);

  const shuffledTeams = [...shuffle(teams.data)];

  const indexUxi = shuffledTeams.findIndex(
    (team) => team.attributes.name.toLowerCase() === "uxi",
  );
  const indexDavid = shuffledTeams.findIndex(
    (team) => team.attributes.name.toLowerCase() === "david",
  );

  const newTeamsList = shuffledTeams.filter((_, i) => {
    return !(i === indexUxi || i === indexDavid);
  });

  newTeamsList.push(shuffledTeams[indexUxi]);
  newTeamsList.push(shuffledTeams[indexDavid]);

  return {
    props: {
      apps: apps.data,
      teams: newTeamsList,
      globalData: globalData.data,
      seo: seo.data,
    },
    revalidate: ONE_DAY,
  };
};

const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const { dispatch } = useGlobal();

  return (
    <Layout
      seo={{
        url: props.seo?.attributes?.URL,
        description: props.seo?.attributes?.Description,
        title: props.seo?.attributes?.Title,
      }}
    >
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
            <Home description={props.globalData.attributes.HomeDescription} />
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
            <Hi
              title={props.globalData.attributes.ProjectTitle}
              description={props.globalData.attributes.ProjectDescription}
              quote={props.globalData.attributes.Quote}
            />
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
            <AboutUs
              teams={
                props.teams.map((team) => ({
                  id: team.id,
                  ...team.attributes,
                })) || []
              }
            />
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
            <Apps
              data={props.apps.map((app) => ({
                id: app.id,
                ...app.attributes,
              }))}
            />
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
            <Cta
              description={props.globalData.attributes.ContactDescription}
              modalCta={{
                title: props.globalData.attributes.ContactFormTitle,
                description: props.globalData.attributes.ContactFormDescription,
              }}
            />
          </InView>
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
};

export default Index;
