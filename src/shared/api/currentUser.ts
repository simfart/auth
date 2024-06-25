import { createContext } from "react";
import { User } from "./models";

export const CurrentUser = createContext<User | null>(null);
