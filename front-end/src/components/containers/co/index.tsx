import ButtonsCo from "../../buttons/co";
import CounterForCo from "../../counter";
import LinkBig from "../../links/big";

const ContainerCo = () => {
  return (
    <div className="mx-auto w-[80%] h-fit flex flex-col bg-red-950 max-w-sm md:flex-row md:max-w-none md:gap-20 md:relative">
      {/* Image */}
      <div className=" w-full aspect-[1/1] bg-blue-950 relative md:w-1/2 md:aspect-auto md:h-[600px] 2xl:h-[750px]">
        {/* Image */}
        {/* Text */}
        <h2 className=" absolute bottom-2 left-2 text-xl md:top-1/2 md:-translate-y-1/2 md:h-fit md:left-auto md:-right-[20%] md:text-5xl">
          Co-Founder
        </h2>
      </div>
      {/* Description */}
      <article className="p-2 mt-5 bg-orange-500 md:mt-0 md:h-fit md:self-end md:mb-28">
        Co-Founder, CEO, Web Developer
      </article>

      <div className=" md:absolute md:w-full bg-purple-800 md:-bottom-10 md:h-fit md:flex md:justify-center opacity-40 md:items-center">
        {/* Link for more */}
        <LinkBig title="View More" link="#" />

        {/* Button */}
        <ButtonsCo />
      </div>

      {/* Counter */}
      <CounterForCo />
    </div>
  );
};

export default ContainerCo;
