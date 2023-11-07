import React from "react";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
// import NavigationMain from "../../components/navigation/main";
import Sidebar from "../../components/commons/Sidebar";
import Header from "../../components/commons/Header";
import Footer from "../../components/footer";

const RootLayout: React.FC = () => {
  return (
    <>
      {/* <NavigationMain /> */}
      <Sidebar />
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
