import Canvas from "./components/Canvas";
import SwipingText from "./components/SwipingText";
import HomeAbout from "./components/about";
import HomeFeatureProject from "./components/project";
import HomeSubscribe from "./components/subscribe/index.";
import HomeServices from "./components/services";
import HackerTitle from "../commons/HackerTItle";

const Home = () => {
  return (
    <>
      <main className="mt-16 mb-40 text-center">
        <section className="flex justify-center w-[100dvw]">
          <Canvas width={400} height={400} />
        </section>
        <SwipingText />
        <HackerTitle text="WE ARE ZAPPY" intervalTime={40}/>
      </main>
      {/*About Us */}
      <HomeAbout />
      {/* Services */}
      <HomeServices />
      {/* Feature Project */}
      <HomeFeatureProject />

      {/* Subscribe */}
      <HomeSubscribe />
    </>
  );
};

export default Home;
