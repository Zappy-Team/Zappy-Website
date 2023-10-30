import ContainerCo from "../containers/co";
import SectionTitle from "../sectionTitle";
import Canvas from "./components/Canvas";
import SwipingText from "./components/SwipingText";

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
			<section className="w-full min-h-screen bg-violet-900 pb-20">
				{/* Title */}
				<SectionTitle title="Who We Are" />
				{/* We Are Zappy */}
				<div className=" w-[90%] bg-red-500 h-fit min-h-[400px] mx-auto flex gap-1 p-5 justify-between flex-col md:flex-row">
					{/* Image with Text */}
					<div className=" bg-gray-600  min-h-[350px] relative aspect-auto md:w-1/2 ">
						<div className=" p-4 bg-yellow-950 absolute md:top-1/2 md:-translate-y-1/2 md:-right-[15%] bottom-[20px] left-[20px] md:w-[200px] md:h-fit md:left-auto">
							<p className="sm:text-5xl text-2xl text-center">
								We Are Zappy
							</p>
						</div>
					</div>
					{/* Vision */}
					<div className=" bg-green-950 md:w-fit md:min-w-[250px] md:max-w-[30%] flex flex-col md:p-6 lg:p-12 p-2 gap-10 w-full">
						{/* Line */}
						<div className=" md:w-1/4 w-1/6 h-[3px] bg-red-950"></div>
						<p className=" tracking-widest">
							To empower businesses and individuals with
							innovative technology solutions that drive growth,
							improve efficiency, and enhance user experiences
						</p>
					</div>
				</div>

				<br />
				<br />
				<br />
				{/* CO-Founders */}
				<ContainerCo />
			</section>
		</>
	);
};

export default Home;
