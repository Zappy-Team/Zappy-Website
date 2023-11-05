import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

function HomeSubscribe() {
  const boxRef = useRef<HTMLHeadingElement | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      //   const headingTitle = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: ".heading_title ",
      //       start: "top 60%",
      //       end: "bottom 200px",
      //       toggleActions: "restart pause complete reverse",
      //     },
      //   });
      //   headingTitle.to(".heading_title ", { yPercent: 100, opacity: 1 });
    }, boxRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={boxRef}
      className={`${
        hovered || focused ? "bg-white" : "bg-black"
      } w-full min-h-[375px] duration-500 pb-40 flex justify-center items-center flex-col gap-5`}
    >
      <h2
        className={`${
          hovered || focused ? "text-black" : "text-white "
        } duration-500 text-5xl`}
      >
        Let's Do This
      </h2>
      <Link
        to={"#"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${
          hovered || focused ? "text-black" : "text-white "
        } duration-500`}
      >
        Start a partnership today ⇨
      </Link>
      <span
        className={`${
          hovered || focused ? "text-black" : "text-white "
        } duration-500 `}
      >
        or
      </span>
      <input
        type="text"
        placeholder="Subscribe now!"
        className={`${
          hovered || focused ? "bg-black" : "bg-white "
        } duration-500  outline-none w-[80%] h-10 max-w-[500px] p-3 rounded-lg text-white`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {/* Partnership */}
    </section>
  );
}

export default HomeSubscribe;
