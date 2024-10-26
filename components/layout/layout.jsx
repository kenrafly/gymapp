// src/components/Layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
