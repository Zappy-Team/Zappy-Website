import { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../../sectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ContainerServices from "../../../containers/services";

const data = [
  {
    id: 1,
    title: "Web",
    description:
      "Zappy has design and built next-level websites for everyone from Indie  Studios, to Game Publishers, to the biggest AAA studios in the world.",
  },
  {
    id: 2,
    title: "Mob",
    description:
      "Zappy has design and built next-level websites for everyone from Indie  Studios, to Game Publishers, to the biggest AAA studios in the world.",
  },
  {
    id: 3,
    title: "Fix",
    description:
      "Zappy has design and built next-level websites for everyone from Indie  Studios, to Game Publishers, to the biggest AAA studios in the world.",
  },
];

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

      const serviceTitle = gsap.timeline({
        scrollTrigger: {
          trigger: ".services_ ",
          start: "top 60%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
        },
      });
      serviceTitle.to(".service_1 ", { xPercent: 100, opacity: 1 }, "same");
      serviceTitle.to(".service_2 ", { xPercent: -100, opacity: 1 }, "same");
      serviceTitle.to(".service_3 ", { yPercent: -100, opacity: 1 }, "same");
    }, boxRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={boxRef} className="w-full min-h-screen bg-red-950 pb-40">
      <SectionTitle title="What We Do" />

      {/* Services */}
      <section className="services_ flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-1 w-[90%] mt-20 mx-auto [&>*:nth-child(2)]:translate-x-full">
        {data.map((data, index) => (
          <ContainerServices
            key={data.id}
            style={`lg:col-span-${index === 2 ? "2" : "1"} service_${
              index + 1
            }`}
            data={data}
          />
        ))}
      </section>
    </section>
  );
}

export default HomeServices;
