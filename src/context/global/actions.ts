import Swiper from "swiper";

export enum GlobalActionKind {
  SET_SECTION,
  SET_SWIPER_MASTER,
  SET_IS_LOGO_POSITIONED,
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

export interface SetIsLogoPositioned {
  type: GlobalActionKind.SET_IS_LOGO_POSITIONED;
  payload: {
    isLogoPositioned: boolean;
  };
}

export type GlobalAction = SetSection | SetSwiperMaster | SetIsLogoPositioned;
