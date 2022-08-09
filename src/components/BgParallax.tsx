import Image from "next/image";
import esfera1Img from "../../public/shapes/esfera1.png";
import esfera2Img from "../../public/shapes/esfera2.png";
import esfera3Img from "../../public/shapes/esfera3.png";
import esfera4Img from "../../public/shapes/esfera4.png";
import fig1Img from "../../public/shapes/fig1.png";
import fig2Img from "../../public/shapes/fig2.png";
import fig3Img from "../../public/shapes/fig3.png";
import porotoImg from "../../public/shapes/poroto.png";
import poroto3Img from "../../public/shapes/poroto3.png";

const BgParallax = () => {
  return (
    <>
      <div
        slot="container-start"
        className="absolute inset-0 h-[140%]"
        data-swiper-parallax="-180%"
      >
        <div className="absolute -top-[14rem] -left-[16rem] h-[28rem] w-[28rem] md:-left-[14rem]">
          <Image
            layout="fill"
            objectFit="contain"
            className="rotate-[120deg] blur-sm"
            src={fig1Img}
            alt="Figura"
          />
        </div>
      </div>
      <div
        slot="container-start"
        className="absolute inset-0 h-[140%]"
        data-swiper-parallax="-180%"
      >
        <div className="absolute -top-[9rem] -right-[17rem] h-[22rem] w-[22rem] md:-top-[6rem] md:-right-[17rem]">
          <Image
            layout="fill"
            objectFit="contain"
            className="-rotate-[70deg] -scale-x-100 blur-sm md:-rotate-[60deg]"
            src={fig3Img}
            alt="Figura"
          />
        </div>
      </div>
      <div
        slot="container-start"
        className="absolute inset-0 h-[100%]"
        data-swiper-parallax="-180%"
      >
        <div className="absolute -bottom-[18rem] -left-[22.5rem] h-[32rem] w-[32rem] md:-left-[20rem] md:-bottom-[16rem] md:h-[28rem] md:w-[28rem]">
          <Image
            layout="fill"
            objectFit="contain"
            className="-rotate-90 blur md:blur-sm"
            src={poroto3Img}
            alt="Esfera"
          />
        </div>
      </div>
      <div
        slot="container-start"
        className="absolute inset-0 h-[100%]"
        data-swiper-parallax="-400%"
      >
        <div className="absolute left-8 bottom-[4rem] h-16 w-16">
          <Image src={esfera3Img} alt="Esfera" />
        </div>
      </div>
      <div
        slot="container-start"
        className="absolute inset-0 h-[160%]"
        data-swiper-parallax="-150%"
      >
        <div className="absolute bottom-[22rem] -right-24 h-48 w-48 md:bottom-[20rem]">
          <Image
            layout="fill"
            objectFit="cover"
            className="-scale-90 blur-sm md:blur-none"
            src={esfera4Img}
            alt="Esfera"
          />
        </div>
      </div>
      <div
        slot="container-start"
        className="absolute inset-0 h-[200%]"
        data-swiper-parallax="-120%"
      >
        <div className="absolute -bottom-[20rem] -right-[14rem] h-80 w-80 md:-bottom-[17rem] md:-right-[10rem]">
          <Image
            className="-scale-[0.85] blur md:blur-sm"
            src={esfera2Img}
            alt="Esfera"
          />
        </div>
      </div>
      <div
        slot="container-start"
        className="absolute inset-0 h-[290%]"
        data-swiper-parallax="-70%"
      >
        <div className="absolute -bottom-8 -left-[24rem] h-[38rem] w-[38rem] rotate-[95deg] md:-left-[22rem]">
          <Image className="blur" src={porotoImg} alt="Poroto" />
        </div>
      </div>
      <div
        slot="container-start"
        className="absolute inset-0 h-[520%]"
        data-swiper-parallax="-80%"
      >
        <div className="absolute -bottom-20 -right-32 h-64 w-64 rotate-[25deg] md:-right-28 md:rotate-[35deg]">
          <Image src={fig2Img} alt="Fig" />
        </div>
      </div>
    </>
  );
};

export default BgParallax;
