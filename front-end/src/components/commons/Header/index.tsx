import { useState } from "react";
import { useTranslation } from "react-i18next";
const Header: React.FC = () => {
	// 	False corresponds to ge and True corresponds to en 
	const [language, setLanguage] = useState<boolean>(false);
	const [t, i18n] = useTranslation();
	const handleLanguageChange = () => {
		setLanguage((prev) => !prev)
		i18n.changeLanguage(!language? "en": "ge");
	};
	return (
		<header className="flex justify-between mt-5 mx-10 items-center h-auto">
			<h1 className="text-4xl font-bold tracking-wider ">Zappy</h1>
			<label className="relative inline-flex items-center cursor-pointer">
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