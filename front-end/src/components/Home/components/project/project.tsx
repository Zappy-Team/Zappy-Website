const HomeProjectSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <header className=" w-[80%] mx-auto p-3 bg-red-300 md:mx-4">
        <h1 className=" text-center text-lg tracking-widest md:text-left md:max-w-[300px]">
          Across all verticals + mediums, we craft impactful experiences for a
          connected world. Explore our web design, branding, & digital marketing
          portfolio.
        </h1>
      </header>
      <footer className=" bg-orange-500 flex justify-center items-center md:justify-end md:pr-20">
        <div className="border border-dotted border-black p-3 flex justify-center items-center relative w-[80%] max-w-md aspect-[2/3] group overflow-hidden">
          {/* BG */}
          <div className="absolute bg-slate-500 top-0 left-0 right-0 bottom-0 p-3">
            <img
              src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/sk-signet-banner-1.jpg?mtime=20230613193724"
              className=" w-full h-full object-cover object-center"
              alt="img"
            />
          </div>
          {/* Filtered */}
          <div className="bg-black relative h-full w-full -translate-x-full group-hover:translate-x-0 group-hover:duration-500 duration-500 opacity-0 group-hover:opacity-50  cursor-pointer"></div>
          {/* absolute top-0 -left-full right-0 bottom-0 */}
          {/* Title */}
          <h2 className="absolute top-14 text-3xl max-w-[90%] text-white">
            title this is amazing and good and cool project
          </h2>

          <h4 className="absolute bottom-4 tex-xl font-bold  text-white">
            Web design | Web Application
          </h4>
        </div>
      </footer>
    </section>
  );
};

export default HomeProjectSection;
