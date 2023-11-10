import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
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
        rotate: "90deg",
        top: "50px",
        ease: "back.out(1.7)",
        left: "-10px",
        duration: 1,
      });
    }, boxRef);
    return () => ctx.revert();
  }, []);
  // 	False corresponds to ge and True corresponds to en
  const [language, setLanguage] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_t, i18n] = useTranslation();
  const handleLanguageChange = () => {
    setLanguage((prev) => !prev);
    i18n.changeLanguage(!language ? "en" : "ge");
  };
  return (
    <header
      className="flex mt-5 mx-10 items-center h-auto flex-col"
      ref={boxRef}
    >
      <h1
        className="text-4xl font-bold tracking-wider top-5 left-5 w-fit fixed z-50"
        id="zappy_header"
      >
        Zappy
      </h1>
      <label className="relative inline-flex items-center cursor-pointer self-end w-fit">
        <input
          className="sr-only peer"
          onChange={() => handleLanguageChange()}
          type="checkbox"
          checked={language}
        />
        <div className="peer rounded-full outline-none duration-100 after:duration-500 w-28 h-14 bg-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['ge'] after:absolute after:outline-none after:rounded-full after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-black after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['en'] peer-checked:after:border-white"></div>
      </label>
    </header>
  );
};

export default Header;
