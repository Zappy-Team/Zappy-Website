import { useState } from "react";
interface PropTypes {
	img: string;
	name: string;
	title: string;
	about: string;
}

const TeamContainer: React.FC<PropTypes> = ({ img, name, title, about }) => {
	const [open, setOpen] = useState<boolean>(false);

	const memberDescriptionStyles = {
		WebkitLineClamp: 4,
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
	};
	return (
		<div className="flex flex-col gap-4">
			<header className="rounded-xl overflow-hidden">
				<img src={img} alt={name} />
			</header>
			<p className="text-center text-2xl">{name}</p>
			<span className="text-center text-xl font-bold">{title}</span>
			<p
				style={open? undefined: memberDescriptionStyles!}
				className="text-sm"
			>
				{about}
			</p>
			<button onClick={() => setOpen((prev) => !prev)}>
				{open ? "Read less" : "Read more..."}
			</button>
		</div>
	);
};

export default TeamContainer;
