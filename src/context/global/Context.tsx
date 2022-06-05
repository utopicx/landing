import { createContext, Dispatch, useContext, useReducer } from "react";
import { GlobalAction, GlobalActionKind } from "./actions";
import { GlobalReducer } from "./reducer";
import { GlobalState, initialGlobalState } from "./state";

const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: Dispatch<GlobalAction>;
}>({
  state: initialGlobalState,
  dispatch: () => undefined,
});

const GlobalProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialGlobalState);
  const value = { state, dispatch };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }

  return { state: context.state, dispatch: context.dispatch };
};

export { GlobalProvider, useGlobal };
