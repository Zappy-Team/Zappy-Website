import { useState } from "react";
import LinkBig from "../../links/big";
import ButtonsCo from "../../buttons/co";
import CounterForCo from "../../counter";

import nika from "../../../assets/team/Nika.jpg";
import gio from "../../../assets/team/Gio.jpg";

const JsonData = [
  {
    id: 1,
    image: nika,
    title: "Co-Founder",
    description: "Co-Founder, CEO, Web Developer, Mobile Developer",
  },
  {
    id: 2,
    image: gio,
    title: "Co-Founder",
    description: "Co-Founder, CEO, Web Developer, WordPress Developer",
  },
];

const ContainerCo = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    if (currentSlide < JsonData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(JsonData.length - 1);
    }
  };

  return (
    <div className="about_zappy_slide mx-auto w-[80%] h-fit flex flex-col max-w-sm md:flex-row md:max-w-none md:gap-20 md:relative">
      {/* Image */}
      <div className="about_zappy_slide_bg aspect-square w-full bg-gray-500 relative  md:aspect-auto  2xl:h-[750px] md:opacity-0 md:w-2 md:h-[600px] md:rounded">
        {/*   md:w-1/2   */}
        {JsonData.map((data, i) => (
          <div
            key={data.id}
            style={{
              display: i === currentSlide ? "block" : "none",
            }}
          >
            {/* Image */}
            <img
              src={data.image}
              alt="us"
              className="about_zappy_slide_image w-2 opacity-0 h-full object-center object-cover absolute"
              id={`co_image_${i}`}
            />

            {/* Text */}
            <h2 className="about_zappy_slide_title opacity-0 absolute bottom-2 left-2 text-xl md:top-1/2 md:-translate-y-1/2 md:h-fit md:left-auto md:-right-[20%] md:text-5xl z-50 text-white">
              {data.title}
            </h2>
          </div>
        ))}
      </div>
      {/* Description */}
      {JsonData.map((data, i) => (
        <article
          key={i}
          style={{ display: i === currentSlide ? "block" : "none" }}
          className="about_zappy_slide_desc p-2 mt-5 md:mt-0 md:h-fit md:self-end md:mb-28 text-white md:-translate-x-full md:opacity-0 md:max-w-[300px]"
        >
          {data.description}
        </article>
      ))}

      <div className=" md:absolute md:w-full md:-bottom-10 md:h-fit md:flex md:justify-center md:items-center">
        {/* Link for more */}
        <LinkBig title="View More" link="/about-us" />

        {/* Button */}
        <ButtonsCo nextFun={nextSlide} prevFun={prevSlide} />
      </div>

      {/* Counter */}
      <CounterForCo current={currentSlide + 1} length={JsonData.length} />
    </div>
  );
};

export default ContainerCo;
