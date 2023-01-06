import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Layout.scss" 

const Layout = () => {
  return (
    <div className="layout-contiainer">
      <div><Header /></div>
      <div><Outlet /></div>
      <div><Footer /></div>
    </div>
  );
};

export default Layout;
