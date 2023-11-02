import { useRef, useEffect } from "react";

const radius = 20;
type Props = {
	width: number;
	height: number;
};
type position = {
	x: undefined | number;
	y: undefined | number;
};
let mousePosition: position = {
	x: undefined,
	y: undefined,
};

const Canvas: React.FC<Props> = ({ width, height }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	let contextRef = useRef<CanvasRenderingContext2D | null>(null);
	class Circle {
		x: number;
		y: number;
		dx: number;
		dy: number;
		radius: number;
		c: CanvasRenderingContext2D;
		constructor(
			x: number,
			y: number,
			dx: number,
			dy: number,
			radius: number,
			c: CanvasRenderingContext2D
		) {
			this.x = x;
			this.y = y;
			this.dx = dx;
			this.dy = dy;
			this.radius = radius;
			this.c = c;
		}

		draw() {
			this.c.beginPath();
			this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			this.c.stroke();
			this.c.closePath();
		}

		update() {
			if (this.x + this.radius > width || this.x - this.radius < 0) {
				this.dx = -this.dx;
			}
			if (this.y + this.radius > height || this.y - this.radius < 0) {
				this.dy = -this.dy;
			}

			this.x += this.dx;
			this.y += this.dy;

			this.draw();
		}
	}

	useEffect(() => {
		const canvas = canvasRef.current;
		const c = canvas?.getContext("2d");
		if (canvas && c) {
			canvasRef.current.addEventListener("mousemove", (ev) => {
				mousePosition.x = ev.offsetX;
				mousePosition.y = ev.offsetY;
			});
			canvas.width = width;
			canvas.height = height;
			canvas.style.border = "2px solid black";
			contextRef.current = c;
			c.lineWidth = 2;
			let circleArray: Circle[] = [];

			for (let i = 0; i < 5; i++) {
				let posX = Math.floor(Math.random() * width - 50);
				let posY = Math.floor(Math.random() * height - 50);
				let x = Math.random() * (width - radius * 2) + radius;
				let y = Math.random() * (height - radius * 2) + radius;
				let dx = (Math.random() - 0.5) * 1;
				let dy = (Math.random() - 0.5) * 1;

				circleArray.push(new Circle(x, y, dx, dy, radius, c));
				animate(posX, posY);
				function animate(x: number, y: number) {
					c?.clearRect(0, 0, width, height);
					for (const circle of circleArray) {
						circle.update();
					}
					requestAnimationFrame(() => animate(x, y));
				}
			}
		}
	}, []);

	return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
