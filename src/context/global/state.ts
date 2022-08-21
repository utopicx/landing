import Swiper from "swiper";

export interface Texts {
  global: GlobalEntity;
  apps: Array<App & { id: number }>;
  seo: Seo;
  teams: Array<Team & { id: number }>;
}

export interface GlobalState {
  section: string;
  isLogoPositioned: boolean;
  swiperMaster?: Swiper;
  texts?: Texts;
}

export const initialGlobalState: GlobalState = {
  section: "",
  isLogoPositioned: false,
};
