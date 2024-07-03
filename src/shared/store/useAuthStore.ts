import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IAuthStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (payload: boolean) => void;
}

export const useAuthStore = create<IAuthStore>()(
  devtools(
    immer((set) => ({
      isLoggedIn: !!window.localStorage.getItem("jwt"),
      setIsLoggedIn: (payload) =>
        set((state) => {
          state.isLoggedIn = payload;
        }),
    }))
  )
);

// const useStore = create(subscribeWithSelector((set, get) => ({
//   token: null,
//   setToken: (token: string) => {
//     if (!token) return
//     set((s) => void (s.token = token))
//   },
//   restoreToken: async () => {
//     const token = await localStorage.getToken()
//     if (!token) return
//     get().setToken(token)
//   },
//   logout: () => set((s) => void (s.token = null)),
// })))

// useStore.subscribe(
//   (state) => state.token,
//   async (token) => {
//     token ? await localStorage.setToken(token) : await localStorage.removeToken()
//   }
// )
