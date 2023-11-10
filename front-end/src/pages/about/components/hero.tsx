// import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/all";
import {
  //  useLayoutEffect,
  useRef,
} from "react";
import HackerTitle from "../../../components/commons/HackerTItle";

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
      <HackerTitle text="WE ARE ZAPPY" intervalTime={40} />
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
