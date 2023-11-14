import { create } from "zustand";

interface InitialTypes {
  bgColor: boolean;
  setBgColor: (bg: boolean) => void;
}

const useHomeBgStore = create<InitialTypes>((set) => ({
  bgColor: false,
  setBgColor: (bg) => set({ bgColor: bg }),
}));

export default useHomeBgStore;
