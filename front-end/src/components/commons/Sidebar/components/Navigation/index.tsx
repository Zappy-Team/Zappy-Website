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
    handleSidebarToggle: () => void

}
const Navigation: React.FC<Props> = ({ enable, handleSidebarToggle }) => {
	return (
		<nav className="text-white">
			<RemoveScroll enabled={enable}>
				<ul className="w-full flex gap-y-10 flex-col items-center text-6xl">
					<li>
						<NavLink onClick={handleSidebarToggle} to="/events">Events</NavLink>
					</li>
					<li>
						<NavLink onClick={handleSidebarToggle} to="/blogs">Blogs</NavLink>
					</li>
					<li>
						<NavLink onClick={handleSidebarToggle} to="/careers">Career</NavLink>
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
