const HomeAboutZappy = () => {
  return (
    <div className=" w-[90%] h-fit min-h-[400px] mx-auto flex gap-1 p-5 justify-between flex-col md:flex-row">
      {/* Image with Text */}
      <div className="about_zappy_bg bg-gray-600  min-h-[350px] md:max-h-[350px] relative aspect-auto  md:w-1 md:opacity-0 md:flex md:justify-center">
        {/* md:w-1/2 */}
        {/* Image */}
        <img
          src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/company-banner-1200.jpg"
          alt="us"
          className="about_zappy_image w-full h-full object-center object-cover md:w-1 md:opacity-0"
        />
        <div className="about_zappy_zappy p-4 absolute md:top-1/2 md:-translate-y-1/2 md:-right-[15%] bottom-[20px] left-[20px] md:w-[200px] md:h-fit md:left-auto md:opacity-0">
          <p className="sm:text-5xl text-2xl text-center">We Are Zappy</p>
        </div>
      </div>
      {/* Vision */}
      <div className="about_zappy_vision md:w-fit md:min-w-[250px] md:max-w-[30%] flex flex-col md:p-6 lg:p-12 p-2 gap-10 w-full md: opacity-0">
        {/* Line */}
        <div className="about_zappy_line md:w-1/4 w-1/6 h-[3px] bg-red-950 md:translate-x-1/2" />
        <p className="about_zappy_txt tracking-widest md:translate-x-1/2">
          To empower businesses and individuals with innovative technology
          solutions that drive growth, improve efficiency, and enhance user
          experiences
        </p>
      </div>
    </div>
  );
};

export default HomeAboutZappy;
