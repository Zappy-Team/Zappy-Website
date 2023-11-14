import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

const ServicesHero = () => {
  const boxRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
        scrollTrigger: {
          trigger: ".filter_1 ",
          start: "top 50%",
          end: "bottom 300px",
          toggleActions: "restart pause complete reverse",
          // onUpdate: ({ progress, direction, isActive }) => {
          onUpdate: ({ progress, isActive }) => {
            if (isActive) {
              // const animationDirection = direction === 1 ? -1 : 1; // Reverse the direction
              // const yPercent = progress * 100 * animationDirection;
              const yPercent = progress * -100;

              gsap.to(".filter_1", { yPercent, opacity: 1, duration: 2 });
            }
          },
        },
      });

      const filter2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".filter_2 ",
          start: "top 20%",
          end: "bottom 100px",
          toggleActions: "play pause complete",
        },
      });
      filter2.to(
        ".filter_2 ",
        { xPercent: 100, opacity: 1, duration: 1.5 },
        "same"
      );
      filter2.to(
        ".filter_3 ",
        { xPercent: -100, opacity: 1, duration: 1.5 },
        "same"
      );
    }, boxRef);
    return () => ctx.revert();
  }, []);
  return (
    <main ref={boxRef}>
      <header className="flex justify-center items-center w-full min-h-screen relative overflow-hidden">
        <section className="text-center w-[90%] max-w-[800px] bg-black relative">
          <h1 className="text-2xl tracking-wider relative z-10 lg:text-4xl text-white p-3">
            As strategic partners, we develop influential brands, cross-device
            experiences, and creative strategy that connects and aligns with
            your audience's ever-changing expectations.
          </h1>

          {/* Filter */}
          <div className="filter_1 absolute w-[200px] h-[200px] bg-black text-white rounded-full -bottom-[100px] -left-[50px] md:hidden" />
        </section>
        {/* Filter 2*/}
        <div className="filter_2 hidden absolute w-[300px] h-[300px] bg-black text-white font-bold rounded-full top-[50px] -left-[350px] md:flex justify-center items-center text-3xl">
          Services
        </div>
        {/* Filter 3 */}
        <div className="filter_3 hidden absolute w-[400px] h-[400px] bg-black text-white rounded-full -bottom-[50px] -right-[450px] 2xl:flex" />
      </header>
    </main>
  );
};

export default ServicesHero;
