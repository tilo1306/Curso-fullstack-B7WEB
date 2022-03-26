import { createContext, useReducer } from "react";
import {
  UserType,
  userInitialState,
  userReducer,
} from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

type initialStateType = {
  user: UserType;
};

const initialState = {
  user: userInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
