import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import useFooterBgColorStore from "../../store/footer/bg";

function Footer() {
  const boxRef = useRef<HTMLHeadingElement | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  const { setFooterBgColor } = useFooterBgColorStore((state) => state);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
        scrollTrigger: {
          trigger: ".footer_txt ",
          start: "top 90%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
          markers: true,
          onUpdate: ({ isActive }) => {
            setFooterBgColor(isActive);
          },
        },
      });
      //   headingTitle.to(".heading_title ", { yPercent: 100, opacity: 1 });
    }, boxRef);
    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        } duration-500 text-5xl footer_txt`}
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

export default Footer;
