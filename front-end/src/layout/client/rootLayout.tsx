import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Sidebar from "../../components/commons/Sidebar";
import Header from "../../components/commons/Header";
import global_en from "../../translations/en/global";
import global_ge from "../../translations/ge/global.json";
import { initReactI18next } from "react-i18next/initReactI18next";
import { I18nextProvider } from "react-i18next";
import ii18next from "i18next";
import Footer from "../../components/footer";
import NavigationMain from "../../components/navigation/main";
import Cookie from "js-cookie";

const resources = {
	en: {
		translation: {
			global: global_en,
		},
	},
	ge: {
		translation: {
			global: global_ge,
		},
	},
};

const RootLayout: React.FC = () => {
	ii18next.use(initReactI18next).init({
		resources,
		interpolation: { escapeValue: false },
		lng: Cookie.get("lang") ? Cookie.get("lang") : "ge",
	});
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const { latitude, longitude } = position.coords;

					const apiKey = "29f655a4075b4636be9be135aa13fa9c";
					const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

					const response = await fetch(apiUrl);
					const data = await response.json();
					if (data.results && data.results.length > 0) {
						const country = data.results[0].components.country;
						if (!Cookie.get("lang"))
							Cookie.set(
								"lang",
								country === "Georgia" ? "ge" : "en"
							);
					} else {
						console.log("Unable to determine the country.");
					}
				},
				(err) => {
					console.log(err);
				}
			);
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
	}, []);

	return (
		<I18nextProvider i18n={ii18next}>
			<NavigationMain />
			<Sidebar />
			<Header />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</I18nextProvider>
	);
};

export default RootLayout;
