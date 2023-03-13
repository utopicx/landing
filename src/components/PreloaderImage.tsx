import { FC } from "react";
import MENU_DATA from "../data/menu";
import Image from "next/image";
import menuConnection1Img from "../../public/images/menu_conexion.png";
import menuConnection2Img from "../../public/images/menu_conexion2.png";
import menuConnectionDesktopLeft from "../../public/images/conexion_tablet1.png";
import menuConnectionDesktopRight from "../../public/images/conexion_tablet2.png";

const PreloaderImage: FC = () => {
  return (
    <section className="h-0 w-0 opacity-0">
      {MENU_DATA.map((item) => {
        return <Image key={item.id} src={item.imgSrc} alt={item.name} />;
      })}
      <Image src={menuConnection1Img} alt="menuConnection1Img" />
      <Image src={menuConnection2Img} alt="menuConnection2Img" />
      <Image src={menuConnectionDesktopLeft} alt="menuConnectionDesktopLeft" />
      <Image
        src={menuConnectionDesktopRight}
        alt="menuConnectionDesktopRight"
      />
    </section>
  );
};

export default PreloaderImage;
