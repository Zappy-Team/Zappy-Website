import { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../../sectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HomeProjectSection from "./project";
import BgBlack from "../../../background/black";
import useHomeBgStore from "../../../../store/home/bg";

function HomeFeatureProject() {
  /* States */
  const { bgColor } = useHomeBgStore((state) => state);

  const boxRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const headingTitle = gsap.timeline({
        scrollTrigger: {
          trigger: ".heading_title ",
          start: "top 60%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
        },
      });
      headingTitle.to(".heading_title ", { yPercent: 100, opacity: 1 });
    }, boxRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={boxRef}
      className={`${
        bgColor ? "bg-black" : "bg-white"
      } w-full relative duration-500`}
    >
      <BgBlack />
      <SectionTitle
        title="Feature Project"
        styles="text-black bg-white rounded-[6px] border-none"
      />

      {/* Project */}
      <HomeProjectSection />
    </section>
  );
}

export default HomeFeatureProject;
