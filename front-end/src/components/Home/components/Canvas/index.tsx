import { useRef, useEffect } from "react";
type Props = {
	width: number;
	height: number;
};

const Canvas: React.FC<Props> = ({ width, height }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const centerX = width / 2;
		const centerY = height / 2;
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");
		if (canvas && context) {
			canvas.style.border = "1px solid black";
            context.fillRect(centerX - 75, centerY - 75, 150, 150);
            
		}
	}, []);

	return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default Canvas;
