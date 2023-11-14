import useHomeBgStore from "../../store/home/bg";
import Canvas from "./components/Canvas";
import SwipingText from "./components/SwipingText";
import HomeAbout from "./components/about";
import HomeFeatureProject from "./components/project";
import HomeServices from "./components/services";

const Home = () => {
  const { bgColor } = useHomeBgStore((state) => state);

  return (
    <>
      <main
        className={`${
          bgColor ? "bg-black" : "bg-white"
        } mt-16 pb-40 text-center duration-500`}
      >
        <section className="flex justify-center  w-[100dvw] mb-12">
          <Canvas width={400} height={400} />
        </section>
        <SwipingText />
      </main>
      {/*About Us */}
      <HomeAbout />

      {/* Services */}
      <HomeServices />
      {/* Feature Project */}
      <HomeFeatureProject />
    </>
  );
};

export default Home;
