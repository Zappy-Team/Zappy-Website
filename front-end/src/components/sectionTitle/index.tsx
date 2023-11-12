interface PropTypes {
	title: string;
	styles?: string;
}

const SectionTitle: React.FC<PropTypes> = ({ title, styles }) => {
	return (
		<header
			className={`heading_title max-w-fit w-10/12 min-h-16 p-9 mx-auto text-center -translate-y-[150%] border border-black opacity-0 ${styles}`}
		>
			<h1 className=" text-5xl">{title}</h1>
		</header>
	);
};

export default SectionTitle;
