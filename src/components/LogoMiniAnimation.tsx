import {useSpring, animated} from "@react-spring/web";
import {useEffect, useRef, useState} from "react";
import {GlobalActionKind} from "../context/global/actions";
import {useGlobal} from "../context/global/Context";
import classNames from "../utils/classNames";
import {ADJUST} from "../data/logoAnimationAjust";
import Swiper from "swiper";
import {PowerGlitch} from "powerglitch";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";

interface Props {
    isReverse?: boolean;
}

const LogoMiniAnimation = ({isReverse}: Props) => {
    const matchesIsTablet = useMediaQuery("(min-width:1024px)");
    const {state, dispatch} = useGlobal();
    const [styles, api] = useSpring(() => ({
        transform: "translate(0px,0px) scaleX(1) scaleY(1)",
    }));
    const [currentAdjust, setCurrentAdjust] = useState({
        xTranslateMustLeft: 0,
        YTranslateMustTop: 0,
        general: 0,
        positionProgress: 0,
    });
    const imgLogoRef = useRef<null | HTMLImageElement>(null);

    useEffect(() => {
        const progressStaticPosition = isReverse ? 1 : 0;
        const animationLogoProgress = (_swiper: Swiper, progress: number) => {
            api.start({
                transform: `translate(${
                    -(progress * currentAdjust.xTranslateMustLeft) * currentAdjust.general
                }px,${
                    -(progress * currentAdjust.YTranslateMustTop) * currentAdjust.general
                }px) scaleX(${
                    matchesIsTablet && progress !== 0 ? 1 - (progress * 10 - 0.3) : 1
                }) scaleY(${
                    matchesIsTablet && progress !== 0 ? 1 - (progress * 10 - 0.3) : 1
                })`,
            });
            if (
                !state.isLogoPositioned &&
                parseFloat(Number(progress).toPrecision(3)) >=
                currentAdjust.positionProgress
            ) {
                dispatch({
                    type: GlobalActionKind.SET_IS_LOGO_POSITIONED,
                    payload: {isLogoPositioned: true},
                });
            } else if (
                state.isLogoPositioned &&
                progress === progressStaticPosition
            ) {
                dispatch({
                    type: GlobalActionKind.SET_IS_LOGO_POSITIONED,
                    payload: {isLogoPositioned: false},
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
        currentAdjust,
        matchesIsTablet,
    ]);

    useEffect(() => {
        if (matchesIsTablet) {
            setCurrentAdjust(ADJUST.tablet.normal);
        } else {
            setCurrentAdjust(ADJUST.mobile.normal);
        }
    }, [matchesIsTablet]);

    useEffect(() => {
        const img = imgLogoRef.current;
        if (img) {
            PowerGlitch.glitch(img);
        }
    }, []);

    return (
        <animated.div
            className={classNames(
                state.isLogoPositioned ? "opacity-0" : "opacity-100",
                "animated-div absolute top-[2.6rem] left-[5.4rem] lg:top-[4.7rem] lg:left-[10.8rem]"
            )}
            style={styles}
        >
            <Image
                ref={imgLogoRef}
                className="h-[3.15rem] w-[3.15rem] lg:h-[6.5rem] lg:w-[6.5rem]"
                src="/images/logo_mini.png"
                alt="Utópicx"
                width={104}
                height={104}
            />
        </animated.div>
    );
};

export default LogoMiniAnimation;
