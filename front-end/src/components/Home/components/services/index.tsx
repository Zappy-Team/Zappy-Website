import { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../../sectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function HomeServices() {
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
    <section ref={boxRef} className="w-full min-h-screen bg-green-950 pb-40">
      <SectionTitle title="What We Do" />
    </section>
  );
}

export default HomeServices;
