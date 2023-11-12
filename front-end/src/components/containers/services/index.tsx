interface PropTypes {
	data: {
		title: string;
		description: string;
	};
	styles?: string;
}

const ContainerServices: React.FC<PropTypes> = ({ data, styles }) => {
	return (
		<div
			className={`${styles} w-80% lg:w-auto p-2 flex flex-col gap-2 border border-black rounded-md
        first:-translate-x-full last:translate-y-full opacity-0 `}
		>
			<h2 className="text-center text-3xl font-bold py-2">{data.title}</h2>
			<hr className="md:w-[70%] md:mx-auto" />
			<aside>
				<p className="text-right text-base tracking-wide">
					{data.description}
				</p>
			</aside>
		</div>
	);
};

export default ContainerServices;
