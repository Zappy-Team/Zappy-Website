import Canvas from "./components/Canvas";
import SwipingText from "./components/SwipingText";
import HomeAbout from "./components/about";
import HomeFeatureProject from "./components/project";
import HomeSubscribe from "./components/subscribe/index.";
import HomeServices from "./components/services";

const Home = () => {
<<<<<<< Updated upstream
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
=======
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
			{/* Feature Project */}
			<HomeFeatureProject />
		</>
	);
>>>>>>> Stashed changes
};

export default Home;
