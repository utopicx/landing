import Swiper from "swiper";

export interface GlobalState {
  section: string;
  isLogoPositioned: boolean;
  swiperMaster?: Swiper;
}

export const initialGlobalState: GlobalState = {
  section: "",
  isLogoPositioned: false,
};
