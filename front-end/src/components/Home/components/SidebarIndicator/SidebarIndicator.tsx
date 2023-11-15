import "./style.css";
import { useRef, useEffect } from "react";
const SidebarIndicator = () => {
  const arrowRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (arrowRef.current) {
        arrowRef.current.style.display = "none";
      }
    }, 10000);
  }, [arrowRef]);
  return (
    <div ref={arrowRef} className="sidebar-indicator-container hidden md:block">
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