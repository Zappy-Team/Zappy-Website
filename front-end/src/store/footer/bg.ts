import { create } from "zustand";

interface InitialTypes {
  footerBgColor: boolean;
  setFooterBgColor: (bg: boolean) => void;
}

const useFooterBgColorStore = create<InitialTypes>((set) => ({
  footerBgColor: false,
  setFooterBgColor: (bg) => set({ footerBgColor: bg }),
}));

export default useFooterBgColorStore;
