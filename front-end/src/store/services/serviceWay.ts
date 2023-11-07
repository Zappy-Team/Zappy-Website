import { create } from "zustand";

interface InitialTypes {
  serviceBg: boolean;
  setServiceBg: (bg: boolean) => void;
}

const useServiceBgStore = create<InitialTypes>((set) => ({
  serviceBg: false,
  setServiceBg: (bg) => set({ serviceBg: bg }),
}));

export default useServiceBgStore;
