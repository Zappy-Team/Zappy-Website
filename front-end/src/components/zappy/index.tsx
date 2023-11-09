import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

function ZappyAnimation() {
  //   const letters = ["Z", "A", "P", "P", "Y"];
  const boxRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const headingTitle = gsap.timeline({
        scrollTrigger: {
          trigger: "#animation_z ",
          start: "top 75%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
          scrub: 2,
        },
        // defaults: {
        //   duration: 2,
        // },
      });
      headingTitle.to(
        "#animation_z ",
        { ease: "none", x: "0px", y: "0px", rotate: "0deg", color: "blue" },
        "same"
      );
      headingTitle.to(
        "#animation_a ",
        { ease: "none", x: "0px", y: "0px", rotate: "0deg", color: "green" },
        "same"
      );
      headingTitle.to(
        "#animation_p_one ",
        { ease: "none", y: "0px", color: "red" },
        "same"
      );
      headingTitle.to(
        "#animation_p_two ",
        { ease: "none", x: "0px", y: "0px", rotate: "0deg", color: "green" },
        "same"
      );
      headingTitle.to(
        "#animation_y ",
        { ease: "none", x: "0px", y: "0px", rotate: "0deg", color: "blue" },
        "same"
      );
    }, boxRef);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={boxRef} className="h-screen bg-green-950 flex">
      <div className="bg-red-800 self-end w-full flex justify-between h-fit">
        {/* {letters.map((val, i) => (
          <span key={i} className="text-[15rem] leading-none">
            {val}
          </span>
        ))} */}
        <span
          className="text-[15rem] leading-none -translate-y-[300px] -translate-x-16 -rotate-[70deg]"
          id="animation_z"
        >
          Z
        </span>
        <span
          className="text-[15rem] leading-none -translate-y-[100px] rotate-[90deg]"
          id="animation_a"
        >
          A
        </span>
        <span
          className="text-[15rem] leading-none -translate-y-[300px]"
          id="animation_p_one"
        >
          P
        </span>
        <span
          className="text-[15rem] leading-none -translate-y-[100px] -rotate-[90deg]"
          id="animation_p_two"
        >
          P
        </span>
        <span
          className="text-[15rem] leading-none -translate-y-[300px] translate-x-16 rotate-[70deg]"
          id="animation_y"
        >
          Y
        </span>
      </div>
    </section>
  );
}

export default ZappyAnimation;
