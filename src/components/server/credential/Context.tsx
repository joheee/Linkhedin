import { createContext } from "react";
import { LoginRegisterInterface } from "./Interface";

export const LoginRegisterContext = createContext<LoginRegisterInterface | null>(null)
export const AllUserContext = createContext(null)