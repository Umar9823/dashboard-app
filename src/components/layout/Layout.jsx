import React from "react";
import SidebarLeft from "../sidebar/SidebarLeft";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <SidebarLeft />
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Header />
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
