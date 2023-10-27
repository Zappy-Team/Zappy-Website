import React from "react";
import { Outlet } from "react-router-dom";

import { ScrollRestoration } from "react-router-dom";
import NavigationMain from "../../components/navigation/main";

const RootLayout: React.FC = () => {
  return (
    <>
      {/* <NavigationMain /> */}
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
