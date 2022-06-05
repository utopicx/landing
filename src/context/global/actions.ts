import Swiper from "swiper";

export enum GlobalActionKind {
  SET_SECTION,
  SET_SWIPER_MASTER,
}

export interface SetSection {
  type: GlobalActionKind.SET_SECTION;
  payload: {
    section: string;
  };
}

export interface SetSwiperMaster {
  type: GlobalActionKind.SET_SWIPER_MASTER;
  payload: {
    swiperMaster: Swiper;
  };
}

export type GlobalAction = SetSection | SetSwiperMaster;
