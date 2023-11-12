import { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../../sectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HomeProjectSection from "./project";

function HomeFeatureProject() {
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

      const serviceTitle = gsap.timeline({
        scrollTrigger: {
          trigger: ".services_ ",
          start: "top 60%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
        },
      });
      serviceTitle.to(".service_1 ", { xPercent: 100, opacity: 1 }, "same");
      serviceTitle.to(".service_2 ", { xPercent: -100, opacity: 1 }, "same");
      serviceTitle.to(".service_3 ", { yPercent: -100, opacity: 1 }, "same");
    }, boxRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={boxRef} className="w-full bg-black ">
      <SectionTitle title="Feature Project" styles="text-black bg-white rounded-[6px] border-none" />

      {/* Project */}
      <HomeProjectSection />
    </section>
  );
}

export default HomeFeatureProject;
