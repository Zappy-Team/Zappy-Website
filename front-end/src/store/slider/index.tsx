import { create } from "zustand";

interface InitialTypes {
  slidePos: number;
  setSlidePos: (pos: number) => void;
}

const useSliderCoStore = create<InitialTypes>((set) => ({
  slidePos: 0,
  setSlidePos: (pos) => set({ slidePos: pos }),
}));

export default useSliderCoStore;
