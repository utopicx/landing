import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { GlobalActionKind } from "../context/global/actions";
import { useGlobal } from "../context/global/Context";
import classNames from "../utils/classNames";
import LogoMini from "./svgs/LogoMini";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AJUST } from "../data/logoAnimationAjust";
import Swiper from "swiper";
import { PowerGlitch } from "powerglitch";

interface Props {
  isReverse?: boolean;
}

const LogoMiniAnimation = ({ isReverse }: Props) => {
  const matchesIsTablet = useMediaQuery("(min-width:1024px)");
  const { state, dispatch } = useGlobal();
  const [styles, api] = useSpring(() => ({
    transform: "translate(0px,0px) scaleX(1) scaleY(1)",
  }));
  const [currentAjust, setCurrentAjust] = useState({
    xTraslateMustLeft: 0,
    YTraslateMustTop: 0,
    general: 0,
    positionProgress: 0,
  });

  useEffect(() => {
    const progressStaticPosition = isReverse ? 1 : 0;
    const animationLogoProgress = (_swiper: Swiper, progress: number) => {
      api.start({
        transform: `translate(${
          -(progress * currentAjust.xTraslateMustLeft) * currentAjust.general
        }px,${
          -(progress * currentAjust.YTraslateMustTop) * currentAjust.general
        }px) scaleX(${
          matchesIsTablet && progress !== 0 ? 1 - (progress * 10 - 0.3) : 1
        }) scaleY(${
          matchesIsTablet && progress !== 0 ? 1 - (progress * 10 - 0.3) : 1
        })`,
      });
      if (
        !state.isLogoPositioned &&
        parseFloat(new Number(progress).toPrecision(3)) >=
          currentAjust.positionProgress
      ) {
        dispatch({
          type: GlobalActionKind.SET_IS_LOGO_POSITIONED,
          payload: { isLogoPositioned: true },
        });
      } else if (
        state.isLogoPositioned &&
        progress === progressStaticPosition
      ) {
        dispatch({
          type: GlobalActionKind.SET_IS_LOGO_POSITIONED,
          payload: { isLogoPositioned: false },
        });
        api.start({
          transform: "translate(0px,0px) scaleX(1) scaleY(1)",
        });
      }
    };
    if (state.swiperMaster) {
      state.swiperMaster.on("progress", animationLogoProgress);
    }

    return () => {
      state.swiperMaster &&
        state.swiperMaster.off("progress", animationLogoProgress);
    };
  }, [
    state.swiperMaster,
    state.isLogoPositioned,
    currentAjust,
    matchesIsTablet,
  ]);

  useEffect(() => {
    if (matchesIsTablet) {
      setCurrentAjust(AJUST.tablet.normal);
    } else {
      setCurrentAjust(AJUST.mobile.normal);
    }
  }, [matchesIsTablet]);

  useEffect(() => {
    PowerGlitch.glitch(".glitch");
  }, []);

  return (
    <animated.div
      className={classNames(
        state.isLogoPositioned ? "opacity-0" : "opacity-100",
        "absolute top-[2.6rem] left-[5.4rem] lg:top-[4.7rem] lg:left-[10.8rem]"
      )}
      style={styles}
    >
      {/*<LogoMini*/}
      {/*  title="Utópicx"*/}
      {/*  className="h-[3.15rem] w-[3.15rem] lg:h-[6.5rem] lg:w-[6.5rem]"*/}
      {/*/>*/}
      <img
        className="glitch h-[3.15rem] w-[3.15rem] lg:h-[6.5rem] lg:w-[6.5rem]"
        src="/images/logo_mini.png"
        alt="Utópicx"
      />
    </animated.div>
  );
};

export default LogoMiniAnimation;
