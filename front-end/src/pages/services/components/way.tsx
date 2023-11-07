import { useLayoutEffect, useRef, useState } from "react";
import ListChooseComponent from "../../../components/lists/list";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import useServiceBgStore from "../../../store/services/serviceWay";

const listData = [
  {
    id: 1,
    name: "Ongoing Support",
  },
  {
    id: 2,
    name: "Project-Based",
  },
  {
    id: 3,
    name: "Consulting",
  },
];

function ServiceWay() {
  const [listChecked, setListChecked] = useState<string>("Ongoing Support");
  const boxRef = useRef<HTMLHeadingElement | null>(null);

  /* States */
  const { serviceBg, setServiceBg } = useServiceBgStore((state) => state);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
        scrollTrigger: {
          trigger: ".service_way_",
          start: "top 50%",
          end: "bottom 100px",
          toggleActions: "restart pause complete reverse",
          onUpdate: ({ isActive }) => {
            setServiceBg(isActive);
          },
        },
      });
    }, boxRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      className={`${
        serviceBg ? "bg-black" : "bg-white"
      } _service_way_ flex flex-col min-h-screen py-10 pt-12 relative duration-500`}
      ref={boxRef}
    >
      {/* Filter */}
      <div className="service_way_ absolute top-0 bottom-0 right-0 left-0 bg-slate-600 -z-10" />
      {/* Title */}
      <header className="service_way_header mx-auto">
        <h2
          className={`${
            serviceBg ? "text-white" : "text-black"
          } duration-500 text-4xl text-center font-bold`}
        >
          Three ways you can work with us
        </h2>
      </header>

      {/* Lists */}
      <ul className="flex gap-5 md:gap-8 my-24 items-center justify-center flex-wrap px-2">
        {listData.map((data) => (
          <ListChooseComponent
            key={data.id}
            name={data.name}
            changeFn={(e) => setListChecked(e)}
            checked={data.name === listChecked ? true : false}
            bg={serviceBg}
          />
        ))}
      </ul>

      {/* Description */}
      <div>
        {listChecked === "Ongoing Support" && (
          <p
            className={`${
              serviceBg ? "text-white" : "text-black"
            } duration-500 max-w-[400px] mx-auto tracking-wider text-center px-7 pb-7 text-xl`}
          >
            A business&#44;s evolution is never complete. For this reason, most
            of our clients choose to take advantage of an ongoing partnership.
          </p>
        )}
        {listChecked === "Project-Based" && (
          <p
            className={`${
              serviceBg ? "text-white" : "text-black"
            } duration-500 max-w-[400px] mx-auto tracking-wider text-center px-7 pb-7 text-xl`}
          >
            When the tasks at hand are short-term and the services required are
            well-defined, clients can work with us on a project-based
            partnership.
          </p>
        )}
        {listChecked === "Consulting" && (
          <p
            className={`${
              serviceBg ? "text-white" : "text-black"
            } duration-500 max-w-[400px] mx-auto tracking-wider text-center px-7 pb-7 text-xl`}
          >
            Whether clients require a one-time consultation or ongoing strategic
            support, our core objective is to partner for measurable success.
          </p>
        )}
      </div>

      {/* Link */}
      <Link
        to={"/contact"}
        className="mx-auto my-14 text-lg font-bold underline flex gap-2 duration-300 hover:gap-4 hover:duration-300 text-white"
      >
        Work with Us <span>↦</span>
      </Link>
    </section>
  );
}

export default ServiceWay;
