import { IUser } from "shared/api/auth/types";
import { create } from "zustand";

type Store = {
  authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: IUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  isVerifyToken: boolean;
  setVerifyToken: (token: string | null) => void;
};

export const useUserStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading })),
  isVerifyToken: false,
  setVerifyToken: (token) => set((state) => ({ ...state, verifyToken: token })),
}));
