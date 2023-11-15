import { faGear, faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
FontAwesomeIcon;

const UnderConstruction = () => {
	return (
		<section className="mt-32 mb-[1000px] flex flex-col w-screen items-center gap-y-5 text-center">
			
			<h1 className="font-extrabold text-4xl bg-black text-white w-fit px-5 py-2 rounded-md">
				Coming Soon!
			</h1>
			<p className="max-w-xs text-lg border-t border-black">
				This page is under construction, check again later!
			</p>
			<FontAwesomeIcon className="h-[50px]" icon={faHammer} />
		</section>
	);
};

export default UnderConstruction;
