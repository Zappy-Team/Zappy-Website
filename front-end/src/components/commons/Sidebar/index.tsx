import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useAnimate } from "framer-motion";

type mousePositionState = {
	x: number;
	y: number;
};

const Sidebar: React.FC = () => {
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
			{ duration: .5, ease: "easeIn" }
		)
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
			animate("#sidebar", { right: "300px" }).then(() => {
				animate(
					"#close",
					{ opacity: 1, left: "-50px" },
					{ delay: 0.5 }
				);
			});
		} else {
			animate("#close", { opacity: 0, left: "120px" }).then(() => {
				animate("#sidebar", { right: "-100px" });
			});
		}
	};
	return (
		<>
			<aside ref={scope} className="overflow-y-hidden">
				<div
					id="wave"
					className=" overflow-y-hidden opacity-0 fixed -right-[1200px] h-[1000px] top-1/2 -translate-y-1/2 w-[1000px] rounded-full bg-black "
				></div>
				<section
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onMouseMove={changeMenuBarPosition}
					className="md:w-[50px] md:h-[100dvh] fixed right-0 "
				>
					<FontAwesomeIcon
						id="menu-bar"
						onClick={handleSidebarToggle}
						className="h-[30px] -right-[100px] -translate-y-1/2 absolute md:block hidden text-white fill-white "
						icon={faBars}
					/>
					<FontAwesomeIcon
						onClick={handleSidebarToggle}
						className="absolute h-[30px] top-[10px] right-[10px] md:hidden block "
						icon={faBars}
					/>
				</section>
				<section
					id="sidebar"
					className="fixed bg-black w-[400px] h-[100dvh] right-0 translate-x-full top-0 z-10"
				>
					<FontAwesomeIcon
						id="close"
						className="absolute opacity-0 top-1/2 -translate-y-1/2 h-[50px] -z-20"
						icon={faX}
						onClick={handleSidebarToggle}
					/>
				</section>
			</aside>
		</>
	);
};

export default Sidebar;
