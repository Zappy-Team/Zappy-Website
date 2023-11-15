import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagramSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";
type Props = {
	enable: boolean;
	handleSidebarToggle: () => void;
};
const Navigation: React.FC<Props> = ({ enable, handleSidebarToggle }) => {
	return (
		<nav className="text-white">
			<RemoveScroll enabled={enable}>
				<ul className="w-full flex gap-y-10 flex-col items-center text-6xl">
					<li>
						<NavLink
							className="relative opacity-50 hover:opacity-100 group transition-all duration-200"
							onClick={handleSidebarToggle}
							to="/events"
						>
							<span className="mr-3 inline-block group-hover:rotate-[-15deg] transition-all duration-500 group-hover:translate-y-1/3">
								E
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[5deg] transition-all duration-500 group-hover:translate-y-[-15%]">
								v
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[27deg] transition-all duration-500 group-hover:translate-y-[25%]">
								e
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[-15deg] transition-all duration-500 group-hover:translate-y-[-10%]">
								n
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[20deg] transition-all duration-500 group-hover:translate-y-[20%]">
								t
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[-19deg] transition-all duration-500 group-hover:translate-y-[15%]">
								s
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className="relative opacity-50 hover:opacity-100 group transition-all duration-200"
							onClick={handleSidebarToggle}
							to="/blogs"
						>
							<span className="mr-3 inline-block group-hover:rotate-[-12deg] transition-all duration-500 group-hover:translate-y-[20%]">
								B
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[15deg] transition-all duration-500 -group-hover:translate-y-[15%]">
								l
							</span>
							<span className="mr-3 inline-block  transition-all duration-500 group-hover:translate-y-[10%] group-hover:rotate-[20deg]">
								o
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[12deg] transition-all duration-500 group-hover:translate-y-[-10%]">
								g
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[15deg] transition-all duration-500 group-hover:translate-y-[-15%]">
								s
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className="relative opacity-50 hover:opacity-100 group transition-all duration-200"
							onClick={handleSidebarToggle}
							to="/career"
						>
							<span className="mr-3 inline-block group-hover:rotate-[-15deg] transition-all duration-500 group-hover:translate-y-[20%]">
								C
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[-10deg] transition-all duration-500 group-hover:translate-y-[-17%]">
								a
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[15deg] transition-all duration-500 group-hover:translate-y-[20%]">
								r
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[-15deg] transition-all duration-500 group-hover:translate-y-[-30%]">
								e
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[20deg] transition-all duration-500 group-hover:translate-y-[30%]">
								e
							</span>
							<span className="mr-3 inline-block group-hover:rotate-[-21deg] transition-all duration-500 group-hover:translate-y-[-10%]">
								r
							</span>
						</NavLink>
					</li>
					<article className="flex gap-x-3">
						<Link
							target="_blank"
							to="https://www.facebook.com/profile.php?id=61551932435741"
						>
							<FontAwesomeIcon
								className="text-gray-400 hover:text-white transition-colors duration-200 h-[30px]"
								icon={faFacebookSquare}
							/>
						</Link>
						<Link target="_blank" to="#">
							<FontAwesomeIcon
								className="text-gray-400 hover:text-white transition-colors duration-200 h-[30px]"
								icon={faInstagramSquare}
							/>
						</Link>
						<Link
							target="_blank"
							to="https://www.linkedin.com/company/%E1%83%96%E1%83%90%E1%83%9E%E1%83%98-%E2%80%A2-zappy"
						>
							<FontAwesomeIcon
								className="text-gray-400 hover:text-white transition-colors duration-200 h-[30px]"
								icon={faLinkedin}
							/>
						</Link>
					</article>
				</ul>
			</RemoveScroll>
		</nav>
	);
};

export default Navigation;
