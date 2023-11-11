import React from "react";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
// import NavigationMain from "../../components/navigation/main";
import Sidebar from "../../components/commons/Sidebar";
import Header from "../../components/commons/Header";
<<<<<<< Updated upstream
=======
import Footer from "../../components/footer";
import global_en from "../../translations/en/global.json";
import global_ge from "../../translations/ge/global.json";
import { initReactI18next } from "react-i18next/initReactI18next";
import { I18nextProvider } from "react-i18next";
import ii18next from "i18next";
>>>>>>> Stashed changes

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

ii18next.use(initReactI18next).init({
	resources,
	interpolation: { escapeValue: false },
	lng: "ge",
});
const RootLayout: React.FC = () => {
<<<<<<< Updated upstream
  return (
    <>
      {/* <NavigationMain /> */}
      <Sidebar />
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  );
=======
	return (
		<I18nextProvider i18n={ii18next}>
			{/* <NavigationMain /> */}
			<Sidebar />
			<Header />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</I18nextProvider>
	);
>>>>>>> Stashed changes
};

export default RootLayout;
