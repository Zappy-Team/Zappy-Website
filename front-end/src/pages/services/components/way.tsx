import { useLayoutEffect, useRef, useState } from "react";
import ListChooseComponent from "../../../components/lists/list";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import useHomeBgStore from "../../../store/home/bg";
import { useTranslation } from "react-i18next";

function ServiceWay() {
	const [t] = useTranslation();
	const listData = t("global.services", { returnObjects: true });
	const listKeys = Object.keys(listData);
	const [listChecked, setListChecked] = useState<string>("Ongoing Support");
	const boxRef = useRef<HTMLHeadingElement | null>(null);
	/* States */
	const { setBgColor, bgColor } = useHomeBgStore((state) => state);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger);

			gsap.timeline({
				scrollTrigger: {
					trigger: ".service_way_",
					start: "top 50%",
					end: "bottom 100px",
					toggleActions: "restart pause complete reverse",
					onUpdate: ({ isActive }) => {
						setBgColor(isActive);
					},
				},
			});
		}, boxRef);
		return () => ctx.revert();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section
			className={`${
				bgColor ? "bg-black" : "bg-white"
			} _service_way_ flex flex-col min-h-screen py-10 pt-12 relative duration-500`}
			ref={boxRef}
		>
			{/* Filter */}
			<div className="service_way_ absolute top-0 bottom-0 right-0 left-0 bg-slate-600 -z-10" />
			{/* Title */}
			<header className="service_way_header mx-auto">
				<h2
					className={`${
						bgColor ? "text-white" : "text-black"
					} duration-500 text-4xl text-center font-bold`}
				>
					Three ways you can work with us
				</h2>
			</header>

			{/* Lists */}
			<ul className="flex gap-5 md:gap-8 my-24 items-center justify-center flex-wrap px-2">
				{listKeys.map((data, idx) => (
					<ListChooseComponent
						key={idx}
						name={data}
						changeFn={(e) => setListChecked(e)}
						checked={data === listChecked ? true : false}
						bg={bgColor}
					/>
				))}
			</ul>

			{/* Description */}
			<div>
				<p
					className={`${
						bgColor ? "text-white" : "text-black"
					} duration-500 max-w-[400px] mx-auto tracking-wider text-center px-7 pb-7 text-xl`}
				>
					{listData[listChecked]}
				</p>
			</div>

			{/* Link */}
			<Link
				to={"/contact"}
				className="mx-auto my-14 text-lg font-bold underline flex gap-2 duration-300 hover:gap-4 hover:duration-300 text-white"
			>
				Work with Us <span>↦</span>
			</Link>
		</section>
	);
}

export default ServiceWay;
