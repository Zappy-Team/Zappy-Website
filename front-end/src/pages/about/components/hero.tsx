// import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/all";
import {
  //  useLayoutEffect,
  useRef,
} from "react";

function AboutHero() {
  const boxRef = useRef<HTMLHeadingElement | null>(null);

  //   useLayoutEffect(() => {
  //     const ctx = gsap.context(() => {
  //       gsap.registerPlugin(MotionPathPlugin);

  //       gsap.to("#rect", {
  //         motionPath: {
  //           path: "#path",
  //           autoRotate: true,
  //         },
  //         duration: 5,
  //       });
  //     }, boxRef);
  //     return () => ctx.revert();
  //   }, []);
  return (
    <main
      ref={boxRef}
      className="min-h-screen flex flex-col px-4 md:w-[90%] md:mx-auto"
    >
      <h1 className=" text-5xl text-center mt-24 md:text-7xl xl:text-8xl md:text-left">
        <span className="" id="rocket_one">
          🚀
        </span>{" "}
        We Are Zappy{" "}
        <span className="" id="rocket_two">
          🚀
        </span>
      </h1>
      <p className=" text-2xl mt-24 md:3xl md:self-end md:max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facere
        quam itaque dicta assumenda laudantium, accusantium ex repudiandae
        commodi sunt, ea quidem incidunt voluptatum labore, suscipit ipsum? Eos
        quos tempore inventore at labore dolore dolor ratione id odio unde neque
        numquam autem facilis nulla blanditiis enim quaerat obcaecati, eum
        debitis?
      </p>
    </main>
  );
}

export default AboutHero;
