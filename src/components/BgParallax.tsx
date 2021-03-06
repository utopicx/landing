import Image from "next/image";
import esfera1Img from "../../public/shapes/esfera1.png";
import esfera2Img from "../../public/shapes/esfera2.png";
import esfera3Img from "../../public/shapes/esfera3.png";
import esfera4Img from "../../public/shapes/esfera4.png";
import fig2Img from "../../public/shapes/fig2.png";
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
        <div className="absolute -top-[19rem] -left-[22rem] h-[32rem] w-[32rem] rotate-[120deg]">
          <Image className="blur-sm" src={fig2Img} alt="Figura" />
        </div>
      </div>
        <div
            slot="container-start"
            className="absolute inset-0 h-[140%]"
            data-swiper-parallax="-180%"
        >
            <div className="absolute -bottom-8 -left-64 h-[32rem] w-[32rem] -rotate-90">
                <Image className="blur-sm" src={poroto3Img} alt="Esfera" />
            </div>
        </div>
      <div
        slot="container-start"
        className="absolute inset-0 h-[140%]"
        data-swiper-parallax="-150%"
      >
        <div className="absolute bottom-72 -right-28 h-48 w-48">
          <Image className="blur-sm" src={esfera4Img} alt="Esfera" />
        </div>
      </div>
      <div
        slot="container-start"
        className="absolute inset-0 h-[140%]"
        data-swiper-parallax="-220%"
      >
        <div className="absolute left-8 bottom-80 h-16 w-16">
          <Image src={esfera3Img} alt="Esfera" />
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
    </>
  );
};

export default BgParallax;
