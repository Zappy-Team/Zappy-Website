import Canvas from "./components/Canvas";
import SwipingText from "./components/SwipingText";
import HomeAbout from "./components/about";
import HomeServices from "./components/services";

const Home = () => {
  return (
    <>
      <main className="mt-12 pb-40 text-center">
        <section className="flex justify-center w-[100dvw]">
          {/* <svg
					id="visual"
					viewBox="0 0 900 600"
					width="900"
					height="600"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
				>
					<g transform="translate(445.36458677365385 267.8317948381503)">
						<path
							id="blob-1"
							d="M132 -114.4C168.4 -95.7 193.2 -47.8 191.3 -1.9C189.4 44.1 160.8 88.2 124.5 125.7C88.2 163.2 44.1 194.1 4.9 189.1C-34.2 184.2 -68.4 143.4 -104.7 105.9C-141 68.4 -179.5 34.2 -182 -2.5C-184.5 -39.1 -150.9 -78.3 -114.6 -97C-78.3 -115.8 -39.1 -114.1 4.4 -118.5C47.8 -122.9 95.7 -133.2 132 -114.4"
							fill="#BB004B"
						></path>
						<path
							id="blob-2"
							d="M94.1 -85.4C131.6 -56.6 178.3 -28.3 188.7 10.4C199 49 173.1 98.1 135.6 117.6C98.1 137.1 49 127 11.3 115.8C-26.5 104.5 -53 92 -84.4 72.5C-115.7 53 -151.9 26.5 -156.4 -4.5C-160.9 -35.6 -133.8 -71.2 -102.5 -100C-71.2 -128.8 -35.6 -150.9 -3.7 -147.3C28.3 -143.6 56.6 -114.2 94.1 -85.4"
							fill="#BB004B"
						></path>
						<path
							id="blob-3"
							d="M113.7 -114.6C145.9 -81.6 169.4 -40.8 175.6 6.1C181.7 53 170.4 106.1 138.2 124.8C106.1 143.6 53 128 2.9 125.1C-47.1 122.1 -94.3 131.8 -117.8 113C-141.3 94.3 -141.1 47.1 -131.6 9.5C-122 -28 -103.1 -56.1 -79.6 -89.1C-56.1 -122.1 -28 -160 6.4 -166.4C40.8 -172.8 81.6 -147.6 113.7 -114.6"
							fill="#BB004B"
						></path>
					</g>
				</svg> */}
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
