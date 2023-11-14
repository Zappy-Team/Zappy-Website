import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useHomeBgStore from "../../../store/home/bg";
import Cookie from "js-cookie";
import HackerZappy from "../HackerZappy";

const Header: React.FC = () => {
  /* States */
  const { bgColor } = useHomeBgStore((state) => state);

  const boxRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const headingZappy = gsap.timeline({
        scrollTrigger: {
          trigger: "#zappy_header ",
          start: "top 10px",
          toggleActions: "restart resume resume reverse",
        },
      });
      headingZappy.to("#zappy_header ", {
        opacity: 0,
        duration: 0.5,
        ease: "none",
      });
      headingZappy.to("#zappy_header ", {
        rotate: "90deg",
        top: "50px",
        ease: "back.out(1.7)",
        left: "-22px",
        duration: 0.1,
      });
      headingZappy.to("#zappy_header ", {
        opacity: 1,
        duration: 0.5,
        ease: "none",
      });

      const langZappy = gsap.timeline({
        scrollTrigger: {
          trigger: "#zappy_lang ",
          start: "top 10px",
          toggleActions: "restart resume resume reverse",
        },
      });
      langZappy.to("#zappy_lang", {
        opacity: 0,
        duration: 0.5,
        ease: "none",
      });

      langZappy.to("#zappy_lang", {
        duration: 0.1,
        ease: "none",
        rotate: "90deg",
        top: "200px",
        left: "-10px",
      });

      langZappy.to("#zappy_lang", {
        opacity: 1,
        duration: 0.5,
        ease: "none",
      });
    }, boxRef);
    return () => ctx.revert();
  }, []);
  // 	False corresponds to ge and True corresponds to en
  const [language, setLanguage] = useState<boolean>(
    Cookie.get("lang") ? Cookie.get("lang") === "en" : false
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_t, i18n] = useTranslation();
  const handleLanguageChange = () => {
    if (Cookie.get("lang") === "en") {
      Cookie.set("lang", "ge");
    } else {
      Cookie.set("lang", "en");
    }
    setLanguage(Cookie.get("lang") === "en");
    i18n.changeLanguage(!language ? "en" : "ge");
  };
  return (
    <header
      className="flex mt-5 mx-10 items-center h-auto flex-col"
      ref={boxRef}
    >
      <Link
        to={"/"}
        className={`${
          bgColor ? "text-white" : "text-black"
        } text-4xl font-bold tracking-wider top-5 left-5 w-fit fixed z-50 cursor-pointer`}
        id="zappy_header"
      >
        <HackerZappy text="ZAPPY" />
      </Link>
      <label
        className="inline-flex items-center cursor-pointer self-end w-fit fixed z-50"
        id="zappy_lang"
      >
        <input
          className="sr-only peer"
          onChange={() => handleLanguageChange()}
          type="checkbox"
          checked={language}
        />
        <div
          className={`${
            bgColor
              ? "bg-white after:bg-black after:text-white"
              : "bg-black after:bg-white after:text-black"
          } peer rounded-full outline-none duration-100 after:duration-500 w-24 h-10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500 after:content-['ge'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8  after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-black after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['en'] peer-checked:after:border-white after:text-sm`}
        ></div>
      </label>
    </header>
  );
};

export default Header;
