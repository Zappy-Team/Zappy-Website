// import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/all";
import {
	//  useLayoutEffect,
	useRef,
} from "react";
import { useTranslation } from "react-i18next";

function AboutHero() {
	const boxRef = useRef<HTMLHeadingElement | null>(null);
	const [t] = useTranslation();
	//   useLayoutEffect(() => {
	//     const ctx = gsap.context(() => {
	//       gsap.registerPlugin(MotionPathPlugin);

	//       gsap.to("#rect", {
	//         motionPath: {
	//           path: "#path",
	//           autoRotate: true,
	//         },
	//         duration: 5,
	//       });
	//     }, boxRef);
	//     return () => ctx.revert();
	//   }, []);
	return (
		<main
			ref={boxRef}
			className="min-h-screen flex flex-col px-4 md:w-[90%] md:mx-auto"
		>
			<h1 className="text-5xl text-center mt-24 md:text-7xl xl:text-8xl md:text-left">
				We are Zappy
			</h1>
			<p className=" text-2xl mt-24 md:3xl md:self-end md:max-w-lg">
				{t("global.about.about_us.description")}
			</p>
		</main>
	);
}

export default AboutHero;
