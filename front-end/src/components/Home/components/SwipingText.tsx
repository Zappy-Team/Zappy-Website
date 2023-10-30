import { motion } from "framer-motion";


const SwipingText: React.FC = () => {
    const words = ["Creative", "Innovative"];

	const WordElements = words.map((word, idx) => {
		return (
			<motion.span
				key={idx}
				initial={{ top: -80 }}
				animate={{
					top: [null, 0, 100],
					transition: {
						duration: 3,
						delay: 1.5 * (idx + 1),
						repeat: Infinity,
					},
				}}
				className="absolute"
			>
				{word}
			</motion.span>
		);
	});
    return (
        <section className="flex flex-col gap-y-5 text-center mx-auto">
        <h1 className="text-5xl">We are</h1>
        <div className="relative text-6xl overflow-hidden h-[60px] flex justify-center">
            {WordElements}
        </div>
    </section>
    );
}
 
export default SwipingText;