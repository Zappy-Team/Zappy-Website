import { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../../sectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ContainerServices from "../../../containers/services";
import useHomeBgStore from "../../../../store/home/bg";
import BgWhite from "../../../background/white";
import { useTranslation } from "react-i18next";

function HomeServices() {
  /* States */
  const { bgColor } = useHomeBgStore((state) => state);
  const [t] = useTranslation();

  const serviceData = t("global.home.whatWeDo", { returnObjects: true });

  const boxRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      if (serviceData) {
        const headingTitle = gsap.timeline({
          scrollTrigger: {
            trigger: ".heading_title ",
            start: "top 60%",
            end: "bottom 200px",
            toggleActions: "restart pause complete reverse",
          },
        });
        headingTitle.to(".heading_title ", {
          yPercent: 100,
          opacity: 1,
        });

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
      }
    }, boxRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={boxRef}
      className={`${
        bgColor ? "bg-black" : "bg-white"
      } w-full min-h-screen  pb-40 relative duration-500`}
    >
      <BgWhite />
      <SectionTitle
        title="What We Do"
        styles="text-black bg-white rounded-[6px] border-none"
      />

      {/* Services */}
      <section className="services_ flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-6 lg:gap-x w-[80%] mt-20 mx-auto [&>*:nth-child(2)]:translate-x-full">
        {serviceData.map(
          ({
            data,
            index,
          }: {
            data: { id: string; title: string; description: string };
            index: number;
          }) => (
            <ContainerServices
              key={data.id}
              styles={` service_${index + 1} lg:col-span-${
                index === 2 ? "12" : "1"
              } ${index === 1 && "lg:ml-5"}`}
              data={data}
            />
          )
        )}
      </section>
    </section>
  );
}

export default HomeServices;
