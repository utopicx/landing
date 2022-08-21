import { GlobalAction, GlobalActionKind } from "./actions";
import { GlobalState } from "./state";

export const GlobalReducer = (
  state: GlobalState,
  action: GlobalAction
): GlobalState => {
  switch (action.type) {
    case GlobalActionKind.SET_SECTION:
    case GlobalActionKind.SET_SWIPER_MASTER:
    case GlobalActionKind.SET_IS_LOGO_POSITIONED:
    case GlobalActionKind.SET_TEXTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
