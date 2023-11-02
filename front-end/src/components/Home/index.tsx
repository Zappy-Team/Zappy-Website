import Canvas from "./components/Canvas";
import SwipingText from "./components/SwipingText";
import HomeAbout from "./components/about";
import HomeServices from "./components/services";

const Home = () => {
  return (
    <>
      <main className="mt-16 mb-40 text-center">
        <section className="flex justify-center w-[100dvw]">
          <Canvas width={400} height={400} />
        </section>
        <SwipingText />
      </main>
      {/*About Us */}
      <HomeAbout />
      {/* Services */}
      <HomeServices />
    </>
  );
};

export default Home;
