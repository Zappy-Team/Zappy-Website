import { useLayoutEffect, useRef } from "react";
import ContainerCo from "../../../containers/co";
import SectionTitle from "../../../sectionTitle";
import HomeAboutZappy from "./zappy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HomeAbout = () => {
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

      const aboutZappyBg = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_zappy_bg ",
          start: "top 70%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
        },
      });
      aboutZappyBg.to(".about_zappy_bg ", { width: "50%", opacity: 1 });
      aboutZappyBg.to(
        ".about_zappy_image ",
        { width: "100%", opacity: 1 },
        "some-label"
      );
      aboutZappyBg.to(
        ".about_zappy_zappy",
        { opacity: 1, delay: 0.2 },
        "some-label"
      );
      aboutZappyBg.to(".about_zappy_vision", { opacity: 1 }, "some-label");
      aboutZappyBg.to(".about_zappy_line", { x: "0px" }, "some-label");
      aboutZappyBg.to(".about_zappy_txt", { x: "0px" }, "some-label");

      const aboutZappySlide = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_zappy_slide ",
          start: "top 70%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
        },
      });
      aboutZappySlide.to(".about_zappy_slide_bg", {
        opacity: 1,
        width: "50%",
        height: "600px",
        borderRadius: 0,
      });
      aboutZappySlide.to(
        ".about_zappy_slide_image",
        {
          width: "100%",
          opacity: 1,
        },
        "same-label"
      );
      aboutZappySlide.to(
        ".about_zappy_slide_title",
        {
          opacity: 1,
          delay: 0.3,
        },
        "same-label"
      );

      const aboutZappySlideDesc = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_zappy_slide_desc ",
          start: "top 70%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
        },
      });
      aboutZappySlideDesc.to(".about_zappy_slide_desc", {
        opacity: 1,
        x: 0,
      });
    }, boxRef);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={boxRef} className="w-full min-h-screen bg-blue-950 pb-40">
      {/* Title */}
      <SectionTitle title="Who We Are" />
      {/* We Are Zappy */}
      <HomeAboutZappy />

      <br />
      <br />
      <br />

      {/* CO-Founders */}
      <ContainerCo />
    </section>
  );
};

export default HomeAbout;
