import Swiper from "swiper";

export interface GlobalState {
  section: string;
  swiperMaster?: Swiper;
}

export const initialGlobalState: GlobalState = {
  section: "",
};
