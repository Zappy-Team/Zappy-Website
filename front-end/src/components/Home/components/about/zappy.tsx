import { useTranslation } from "react-i18next";
import TeamImage from "../../../../assets/team/Team.jpg";
const HomeAboutZappy = () => {
  const [t] = useTranslation();
  return (
    <div className=" w-[90%] h-fit min-h-[400px] mx-auto flex gap-1 p-5 justify-between flex-col lg:flex-row text-white">
      {/* Image with Text */}
      <div className="about_zappy_bg bg-gray-600  min-h-[350px] lg:max-h-[350px] relative aspect-auto  w-1 opacity-0 flex justify-center h-0">
        {/* md:w-1/2 */}
        {/* Image */}
        <img
          src={TeamImage}
          alt="us"
          className="about_zappy_image w-0 h-full object-center object-cover lg:w-1 opacity-0"
        />
        <div className="about_zappy_zappy p-4 absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-[15%] bottom-[20px] left-[20px] lg:w-[200px] lg:h-fit lg:left-auto lg:opacity-0">
          <p className="sm:text-5xl text-2xl text-center">We are zappy</p>
        </div>
      </div>
      {/* Vision */}
      <div className="about_zappy_vision lg:w-fit lg:min-w-[250px] lg:max-w-[30%] flex flex-col md:p-6 lg:p-12 p-2 gap-10 w-full lg: opacity-0">
        {/* Line */}
        <div className="about_zappy_line lg:w-1/4 w-1/6 h-[3px] bg-white lg:translate-x-1/2" />
        <p className="about_zappy_txt tracking-wider lg:translate-x-1/2">
          {t("global.home.about.main_content")}
        </p>
        <p className="about_zappy_txt tracking-wider lg:translate-x-1/2">
          {t("global.home.about.general_content")}
        </p>
      </div>
    </div>
  );
};

export default HomeAboutZappy;
