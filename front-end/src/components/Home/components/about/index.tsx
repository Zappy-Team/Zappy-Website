import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ContainerCo from "../../../containers/co";
import SectionTitle from "../../../sectionTitle";
import HomeAboutZappy from "./zappy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import useHomeBgStore from "../../../../store/home/bg";
import BgBlack from "../../../background/black";
const HomeAbout = () => {
  /* State */
  const { bgColor } = useHomeBgStore((state) => state);

  const [t] = useTranslation();
  const boxRef = useRef<HTMLHeadingElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update dimensions when the component mounts
    setWindowWidth(window.innerWidth);

    // Update dimensions when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      gsap.timeline({
        scrollTrigger: {
          trigger: ".bg_filter ",
          start: "top 50%",
          end: "bottom 100px",
          toggleActions: "restart pause complete reverse",
        },
      });

      const aboutZappyBg = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_zappy_bg ",
          start: "top 70%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
        },
      });
      aboutZappyBg.to(".about_zappy_bg ", {
        width: `${windowWidth < 1024 ? "100%" : "50%"}`,
        opacity: 1,
      });
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
        width: `${windowWidth < 1024 ? "100%" : "50%"}`,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      ref={boxRef}
      className={`${
        bgColor ? "bg-black" : "bg-white"
      } w-full min-h-screen bg-black  pb-40 duration-500 relative`}
    >
      <BgBlack />
      {/* Title */}
      <SectionTitle
        styles="text-black bg-white border-none rounded-[6px]"
        title={t("global.home.about.header")}
      />
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
