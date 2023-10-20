import React from "react";
import { Outlet } from "react-router-dom";

import { ScrollRestoration } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
