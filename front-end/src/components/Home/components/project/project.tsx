import useHomeBgStore from "../../../../store/home/bg";
import { ProjectsTypes } from "../../../../@types/project/project";
import { Link, useLoaderData } from "react-router-dom";

const HomeProjectSection = () => {
  const { bgColor } = useHomeBgStore((state) => state);
  const projectData = useLoaderData() as ProjectsTypes;

  return (
    <section
      className={`${
        bgColor ? "bg-black" : "bg-white"
      } flex flex-col gap-10 w-[90%] mx-auto`}
    >
      <header className=" w-[80%] mx-auto p-3 text-white md:mx-4">
        <h1 className=" text-center text-lg tracking-widest md:text-left md:max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          aperiam amet iste quibusdam nobis porro veniam est non! Enim quia
          porro facilis. Itaque aut tenetur, voluptatum repellendus obcaecati
          culpa ea.
        </h1>
      </header>
      {projectData && projectData.result > 0 && (
        <footer className="pb-14 flex justify-center items-center md:justify-end md:pr-20">
          <div className="border border-dotted border-black p-3 flex justify-center items-center relative w-[80%] max-w-md aspect-[2/3] group overflow-hidden">
            {/* BG */}
            <div className="absolute bg-slate-500 top-0 left-0 right-0 bottom-0 p-3">
              <img
                src={projectData.data[0].image.url}
                className="w-full h-full object-cover object-center"
                alt="img"
              />
            </div>
            {/* Filtered */}
            <Link
              to={projectData.data[0].link}
              target="_blank"
              className="bg-black relative h-full w-full -translate-x-full group-hover:translate-x-0 group-hover:duration-500 duration-500 opacity-0 group-hover:opacity-50  cursor-pointer flex justify-center items-center p-4"
            >
              <p className="text-white text-center">
                {projectData.data[0].description}
              </p>
            </Link>
            {/* Title */}
            <h2 className="absolute top-14 text-3xl max-w-[90%] text-white">
              {projectData.data[0].title}
            </h2>
            <h4 className="absolute bottom-4 tex-xl font-bold  text-white">
              {projectData.data[0].categories}
            </h4>
          </div>
        </footer>
      )}
    </section>
  );
};

export default HomeProjectSection;
