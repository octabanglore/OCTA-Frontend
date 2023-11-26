import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useLogin = create(
  persist(
    (set) => ({
      user: null,
      login: async (data) => {
        await set({ user: data });
      },
      logout: () => set({ user: null }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLogin;
