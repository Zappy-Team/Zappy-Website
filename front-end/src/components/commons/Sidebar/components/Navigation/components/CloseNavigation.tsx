import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
type Props = {
	handleToggle: () => void;
};

const CloseNavigation: React.FC<Props> = ({ handleToggle }) => {
	return (
		<>
			<FontAwesomeIcon
				className="md:hidden block text-white absolute cursor-pointer h-[30px] top-16 right-16"
				icon={faX}
				onClick={handleToggle}
			/>
			<div className="absolute md:block hidden -right-[1130px]  top-1/2 -translate-y-1/2 rounded-full bg-white h-[160dvh]  w-[1200px]">
				<FontAwesomeIcon
					className="text-black absolute left-5 top-1/2 h-[30px] -translate-y-1/2 cursor-pointer"
					icon={faX}
					onClick={handleToggle}
				/>
			</div>
		</>
	);
};

export default CloseNavigation;
