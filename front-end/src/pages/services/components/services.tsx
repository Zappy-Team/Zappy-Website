import ContainerServicesAll from "../../../components/containers/services/all";
import useHomeBgStore from "../../../store/home/bg";
import { useTranslation } from "react-i18next";

function ServicesAll() {
	/* States */
	const [t] = useTranslation();
	const { bgColor } = useHomeBgStore((state) => state);
	const services = t("global.home.whatWeDo", { returnObjects: true });
	return (
		<section
			className={`${
				bgColor ? "bg-black" : "bg-white"
			} duration-500 min-h-screen `}
		>
			<div className="flex flex-col gap-10 md:flex-row max-w-[90%] mx-auto">
				<aside className="text-center md:p-5">
					<h2
						className={`${
							bgColor ? "text-white" : "text-black"
						} duration-500 text-4xl sticky top-5`}
					>
						Products
					</h2>
				</aside>

				{/* Services */}
				<aside className=" flex flex-col gap-6 justify-center items-center p-5 md:w-full">
					{services.map(
						(
							data: { title: string; description: string },
							idx: number
						) => (
							<ContainerServicesAll
								key={idx}
								title={data.title}
								description={data.description}
								bg={bgColor}
							/>
						)
					)}
				</aside>
			</div>
		</section>
	);
}

export default ServicesAll;
