import btnMenuHomeImg from "../../public/images/btn_menu_inicio_1.png";
import btnMenuUsImg from "../../public/images/btn_menu_nosotrxs_1.png";
import btnMenuProjectImg from "../../public/images/btn_menu_proyecto_1.png";
import btnMenuContactImg from "../../public/images/btn_menu_contacto_1.png";
import btnMenuAppsImg from "../../public/images/btn_menu_apps_1.png";

const MENU_DATA = [
  {
    name: "Inicio",
    id: "home",
    imgSrc: btnMenuHomeImg,
    order: 0,
  },
  {
    name: "Proyecto",
    id: "hi",
    imgSrc: btnMenuProjectImg,
    order: 1,
  },
  {
    name: "Nosotrxs",
    id: "aboutUs",
    imgSrc: btnMenuUsImg,
    order: 2,
  },
  {
    name: "Apps",
    id: "apps",
    imgSrc: btnMenuAppsImg,
    order: 3,
  },
  {
    name: "Contacto",
    id: "cta",
    imgSrc: btnMenuContactImg,
    order: 4,
  },
];

export default MENU_DATA;
