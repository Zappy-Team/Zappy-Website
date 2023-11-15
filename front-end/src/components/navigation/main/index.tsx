import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import useHomeBgStore from "../../../store/home/bg";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faContactBook,
	faFaceLaugh,
	faHome,
	faProjectDiagram,
	faServer,
} from "@fortawesome/free-solid-svg-icons";

function NavigationMain() {
	/* Store */
	const { bgColor } = useHomeBgStore((state) => state);

	const [mouseHovered, setMouseHovered] = useState<boolean>(false);
	const [pageHovered, setPageHovered] = useState<string | null>(null);

	const roundRef = useRef(null);
	const boxRef = useRef(null);

	const handleClickOutside = () => {
		setMouseHovered(false);
	};
	useOnClickOutside(roundRef, handleClickOutside);

	useLayoutEffect(() => {
		if (mouseHovered) {
			const ctx = gsap.context(() => {
				const roundOne = gsap.timeline();
				roundOne.to("#round-1", {
					display: "block",
					top: 0,
					duration: 0.6,
				});
				roundOne.to("#round-1", {
					duration: 0.6,
					//   opacity: 0,
					background: "white",
					yoyo: true,
					repeat: -1,
				});

				const roundTwo = gsap.timeline();
				roundTwo.to("#round-2", {
					display: "block",
					right: 0,
					duration: 0.6,
					opacity: 1,
				});
				roundTwo.to("#round-2", {
					duration: 0.6,
					//   opacity: 0,
					background: "white",
					yoyo: true,
					repeat: -1,
					delay: 0.2,
				});

				const roundThree = gsap.timeline();
				roundThree.to("#round-3", {
					display: "block",
					left: 0,
					duration: 0.6,
					opacity: 1,
				});
				roundThree.to("#round-3", {
					duration: 0.6,
					//   opacity: 0,
					background: "white",
					yoyo: true,
					repeat: -1,
					delay: 0.4,
				});

				const navContainer = gsap.timeline();
				navContainer.to("#nav-container", {
					display: "flex",
					top: "-120px",
					duration: 0.6,
					width: "100px",
					height: "100px",
				});

				const home_ = gsap.timeline();
				home_
					.to("#home_", {
						display: "flex",
						top: "58px",
						left: "58px",
						duration: 0.8,
						ease: "none",
						opacity: 1,
					})
					.delay(0.6);

				const services_ = gsap.timeline();
				services_
					.to("#services_", {
						display: "flex",
						top: "30px",
						left: "50px",
						duration: 0.8,
						ease: "none",
						opacity: 1,
					})
					.delay(0.9);
				services_.to("#services_", {
					display: "flex",
					top: "30px",
					left: "68px",
					duration: 0.8,
					ease: "none",
				});

				const projects_ = gsap.timeline();
				projects_
					.to("#projects_", {
						display: "flex",
						top: "58.5px",
						left: "28.5px",
						duration: 0.8,
						ease: "none",
						opacity: 1,
					})
					.delay(0.9);
				projects_.to("#projects_", {
					display: "flex",
					top: "68px",
					left: "30px",
					duration: 0.8,
					ease: "none",
				});

				const about_ = gsap.timeline();
				about_
					.to("#about_", {
						display: "flex",
						top: "30px",
						left: "20px",
						duration: 0.8,
						ease: "none",
						opacity: 1,
					})
					.delay(0.9);
				about_.to("#about_", {
					display: "flex",
					top: "38.5px",
					left: "36px",
					duration: 0.8,
					ease: "none",
				});

				const contact_ = gsap.timeline();
				contact_
					.to("#contact_", {
						display: "flex",
						top: "17px",
						left: "16px",
						duration: 0.8,
						ease: "none",
						opacity: 1,
					})
					.delay(1.7);
				contact_.to("#contact_", {
					display: "flex",
					top: "12px",
					left: "25px",
					duration: 0.8,
					ease: "none",
				});
				contact_.to("#contact_", {
					display: "flex",
					top: "10px",
					left: "45px",
					duration: 0.8,
					ease: "none",
				});
			}, boxRef);
			return () => ctx.revert();
		}
	}, [mouseHovered]);

	const handleMouseEnter = () => {
		setMouseHovered(true);
		//   const handleMouseLeave = () => {
		//     tlMainLogoRef.current.reverse();
		//   };
	};

	const [scrollTop, setScrollTop] = useState<boolean>(false);
	useEffect(() => {
		const handleScroll = () => {
			// Adjust the scroll threshold as needed
			const scrollThreshold = 100;
			const isTop = window.scrollY < scrollThreshold;

			setScrollTop(isTop);
		};

		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			ref={boxRef}
			className="w-[80px] h-[80px] fixed bottom-[40px] right-1/2 translate-x-1/2 flex justify-center items-center z-[300]"
		>
			<div
				className={`${bgColor ? "bg-white" : "bg-black"} ${
					mouseHovered
						? "opacity-100 scale-[1]"
						: "opacity-50 scale-[0.9]"
				} duration-500 w-[50px] h-[50px] rounded-[50%]  bottom-1 cursor-pointer flex justify-center relative `}
				onMouseEnter={handleMouseEnter}
				onClick={() => setMouseHovered(true)}
				// onMouseLeave={() => setMouseHovered(false)}
				// ref={roundRef}
			>
				<small
					className={`${scrollTop ? "block" : "hidden"} ${
						mouseHovered ? "hidden" : ""
					} absolute -top-10 -right-[1px] w-max  text-base font-semibold after:content-[''] after:w-2 after:h-2 after:absolute after:-bottom-2 after:translate-x-1/2 after:right-1/2 after:rotate-45 after:border-2 after:border-t-0 after:border-l-0 after:border-black opacity-100 pointer-events-none cursor-none `}
					id="tap_"
				>
					Tap Me
				</small>

				{/* <div className="w-[3px] h-[40px] bg-yellow-600 absolute right-1/2 translate-x-1/2 -top-[40px] before:content-[''] before:w-[10px] before:h-[10px] before:bg-green-900 before:absolute before:top-[0] flex justify-center"></div> */}
			</div>
			{/* {mouseHovered && ( */}
			<>
				<div
					id="round-1"
					className="w-[10px] h-[10px] bg-black rounded-[50%] absolute top-[15px] hidden"
				></div>
				<div
					id="round-2"
					className="w-[10px] h-[10px] bg-black rounded-[50%] absolute -top-[15px] opacity-0 right-[50%] hidden"
				></div>
				<div
					id="round-3"
					className="w-[10px] h-[10px] bg-black rounded-[50%] absolute -top-[15px] opacity-0 left-[50%] hidden"
				></div>
				<div
					ref={roundRef}
					id="nav-container"
					className="con w-[20px] h-[20px] absolute  hidden border border-black border-t-transparent border-l-transparent bg-white bg-opacity-50 rounded-full rotate-45"
				>
					{/* Hovered Name */}
					{pageHovered && (
						<div className="p-1 bg-black text-white font-semibold absolute -top-1/4 -left-1/3 -rotate-45">
							{pageHovered}
						</div>
					)}
					{/* Pages */}
					<div
						id="home_"
						className="w-[30px] h-[30px] bg-black rounded-full absolute -top-[70px] -left-[90px] opacity-0 flex items-center justify-center text-white cursor-pointer "
						onMouseEnter={() => setPageHovered("Home")}
						onMouseLeave={() => setPageHovered(null)}
					>
						<FontAwesomeIcon icon={faHome} />
					</div>

					<div
						id="services_"
						className="w-[30px] h-[30px] bg-black rounded-full absolute -top-[70px] -left-[90px]  opacity-0 flex items-center justify-center text-white cursor-pointer"
						onMouseEnter={() => setPageHovered("Services")}
						onMouseLeave={() => setPageHovered(null)}
					>
						<FontAwesomeIcon icon={faServer} />
					</div>
					{/* -left-[90px] -top-[50px] */}
					<div
						id="projects_"
						className="w-[30px] h-[30px] bg-black text-white rounded-full absolute -top-[70px] -left-[90px]  opacity-0 flex items-center justify-center cursor-pointer"
						onMouseEnter={() => setPageHovered("Projects")}
						onMouseLeave={() => setPageHovered(null)}
					>
						<FontAwesomeIcon icon={faProjectDiagram} />
					</div>
					{/* -left-[90px] -top-[60px] */}
					<div
						id="about_"
						className="w-[30px] h-[30px] bg-black text-white rounded-full absolute -top-[70px] -left-[90px]  opacity-0 flex items-center justify-center cursor-pointer"
						onMouseEnter={() => setPageHovered("About")}
						onMouseLeave={() => setPageHovered(null)}
					>
						<FontAwesomeIcon
							icon={faFaceLaugh}
							className="-rotate-45"
						/>
					</div>
					{/* -top-[60px] -left-[90px] */}
					<div
						id="contact_"
						className="w-[30px] h-[30px] bg-black text-white rounded-full absolute -top-[70px] -left-[90px] opacity-0 flex items-center justify-center cursor-pointer"
						onMouseEnter={() => setPageHovered("Contact")}
						onMouseLeave={() => setPageHovered(null)}
					>
						<FontAwesomeIcon
							className="-rotate-90"
							icon={faContactBook}
						/>
					</div>
				</div>
			</>
			{/* )} */}
		</nav>
	);
}

export default NavigationMain;

{
	/* <div
id="round-1"
className="w-[10px] h-[10px] bg-green-800 rounded-[50%] absolute top-[15px] "
></div>
<div
id="round-2"
className="w-[10px] h-[10px] bg-green-800 rounded-[50%] absolute -top-[15px] right-1/4 translate-x-1/2 "
></div>
<div
id="round-3"
className="w-[10px] h-[10px] bg-green-800 rounded-[50%] absolute -top-[30px] right-[70%] translate-x-1/2 "
></div> */
}
