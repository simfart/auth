import { IUser } from 'shared/api/auth/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type Store = {
  authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: IUser | null) => void;
  // setRequestLoading: (isLoading: boolean) => void;
};

// export const useUserStore = create<Store>((set) => ({
//   authUser: null,
//   requestLoading: false,
//   setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
//   // setRequestLoading: (isLoading) =>
//   //   set((state) => ({ ...state, requestLoading: isLoading })),
// }));

export const useUserStore = create<Store>()(
  devtools(
    immer((set) => ({
      authUser: null,
      requestLoading: false,
      setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
      // setRequestLoading: (isLoading) =>
      //   set((state) => ({ ...state, requestLoading: isLoading })),
    })),
  ),
);
