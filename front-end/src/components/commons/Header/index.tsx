import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

const Header: React.FC = () => {
  const boxRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const headingZappy = gsap.timeline({
        scrollTrigger: {
          trigger: "#zappy_header ",
          start: "top 10px",
          toggleActions: "restart resume resume reverse",
        },
      });
      headingZappy.to("#zappy_header ", {
        rotate: "90deg",
        top: "50px",
        ease: "back.out(1.7)",
        left: "-10px",
        duration: 1,
      });
    }, boxRef);
    return () => ctx.revert();
  }, []);
  return (
    <header ref={boxRef}>
      <h1
        className="text-4xl font-bold tracking-wider top-5 left-5 w-fit fixed z-50"
        id="zappy_header"
      >
        Zappy
      </h1>
    </header>
  );
};

export default Header;
