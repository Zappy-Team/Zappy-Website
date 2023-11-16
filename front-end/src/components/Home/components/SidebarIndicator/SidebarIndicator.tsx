import "./style.css";
const SidebarIndicator = () => {
	return (
		<div className="sidebar-indicator-container cursor-none pointer-events-none hidden md:block">
			<small className="hover-text">HOVER THE EDGE</small>
			<div className="arrow">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default SidebarIndicator;
