import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import useHomeBgStore from "../../../store/home/bg";

const BgBlack = () => {
  /* State */
  const { setBgColor } = useHomeBgStore((state) => state);
  const boxRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
        scrollTrigger: {
          trigger: ".bg_filter ",
          start: "top 50%",
          end: "bottom 100px",
          toggleActions: "restart pause complete reverse",
          onUpdate: ({ isActive }) => {
            setBgColor(isActive);
          },
        },
      });
    }, boxRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={boxRef}>
      <div className="bg_filter absolute top-0 bottom-0 right-0 left-0 -z-10" />
    </div>
  );
};

export default BgBlack;
