import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useTextData = create(
  // persist(
  (set) => ({
    textData: null,
    setTextData: (data) => {
      set({ textData: data });
    },
    // logout: () => set({ user: null }),
  })
  //   {
  //     name: "user-storage",
  //     storage: createJSONStorage(() => localStorage),
  //   }
  // )
);

export default useTextData;
