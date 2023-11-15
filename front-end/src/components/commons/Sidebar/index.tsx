import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAnimate } from "framer-motion";
import Navigation from "./components/Navigation";
import CloseNavigation from "./components/Navigation/components/CloseNavigation";
import useHomeBgStore from "../../../store/home/bg";

type mousePositionState = {
	x: number;
	y: number;
};

const Sidebar: React.FC = () => {
	/* Store */
	const { bgColor } = useHomeBgStore((state) => state);

	const [sidebarToggled, setSidebarToggled] = useState<boolean>(false);
	const [mousePosition, setMousePosition] = useState<mousePositionState>({
		x: 0,
		y: 0,
	});

	const [scope, animate] = useAnimate();

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const changeMenuBarPosition = () => {
		if (
			mousePosition.y + 100 < window.innerHeight &&
			mousePosition.y - 100 > 0
		) {
			animate(
				"#menu-bar",
				{
					top: mousePosition.y,
				},
				{ delay: 0, duration: 0 }
			);
		}
	};

	const handleMouseEnter = () => {
		animate("#menu-bar", { right: 30, opacity: 1 });
		animate(
			"#wave",
			{ right: -800, opacity: 1 },
			{ duration: 0.5, ease: "easeIn" }
		);
	};

	const handleMouseLeave = () => {
		animate("#menu-bar", { right: -30, opacity: 0 });
		animate(
			"#wave",
			{ right: -1200, opacity: 0 },
			{ delay: 0.5, ease: "easeIn" }
		);
	};

	const handleSidebarToggle = () => {
		setSidebarToggled((prev) => !prev);
		sidebarAnimation();
	};
	const sidebarAnimation = () => {
		if (!sidebarToggled) {
			animate(
				"#sidebar",
				{ right: "100vw" },
				{ duration: 0.5, ease: "easeInOut" }
			);
		} else {
			animate(
				"#sidebar",
				{ right: "-100vw" },
				{ duration: 0.5, ease: "easeInOut" }
			);
		}
	};
	return (
		<>
			<aside ref={scope} className="overflow-y-hidden overflow-x-hidden ">
				<div
					id="wave"
					className={`${
						bgColor ? "bg-white" : "bg-black"
					} md:block hidden overflow-y-hidden opacity-0 fixed -right-[1200px] h-[130vh] top-1/2 -translate-y-1/2 w-[1000px] rounded-full z-[1000]`}
				></div>
				<section
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onMouseMove={changeMenuBarPosition}
					className="md:w-[50px] md:h-[100dvh] fixed z-[1000] right-0"
				>
					<FontAwesomeIcon
						id="menu-bar"
						onClick={handleSidebarToggle}
						className={`${
							bgColor
								? "text-black fill-black"
								: "text-white fill-white"
						} h-[30px] -right-[100px] -translate-y-1/2 z-[10001] absolute md:block hidden`}
						icon={faBars}
					/>
					<FontAwesomeIcon
						onClick={handleSidebarToggle}
						className="absolute h-[30px] top-[10px] right-[10px] z-[10001] md:hidden block "
						icon={faBars}
					/>
				</section>
				<section
					id="sidebar"
					className="fixed bg-black w-[100vw] h-[100dvh] right-0 translate-x-full top-0 z-[10000] "
				>
					<div className="w-full  md:w-[60%] h-full flex flex-col items-center md:items-start md:flex-row md:justify-between pl-16 gap-y-10 mt-20">
						<h2 className="text-4xl text-white">Zappy</h2>
						<Navigation enable={sidebarToggled} handleSidebarToggle={handleSidebarToggle} />
						<CloseNavigation handleToggle={handleSidebarToggle} />
					</div>
				</section>
			</aside>
		</>
	);
};

export default Sidebar;
