import { createContext, useContext } from "react";
import { IUser } from "./backend";

export interface IAuth {
  user: IUser;
  onSignOut: () => void;
}

export const authContext = createContext<IAuth>({
  user: {
    nome: "anon",
    email: "",
  },
  onSignOut: () => {},
});


export function useAuthContext() {
  return useContext(authContext);
}
