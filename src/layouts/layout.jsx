import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "../components/NavBars/NavBar";
import Sidebar from "../components/SideBar/SideBar";
import HeaderStats from "../components/Headers/HeaderStats";
import Footer from "../components/Footer/Footer";

// views
// import Dashboard from "views/app/Dashboard.js";
// import Maps from "views/app/Maps.js";
// import Settings from "views/app/Settings.js";
// import Tables from "views/app/Tables.js";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="relative flex flex-col flex-1 md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <HeaderStats />
        <div className="flex flex-col flex-grow px-4 md:px-10 mx-auto w-full">
          <Routes>
            {/* <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/maps" element={<Maps />} />
          <Route path="/app/settings" element={<Settings />} />
          <Route path="/app/tables" element={<Tables />} /> */}
            <Route
              path="/app"
              element={<Navigate replace to="/app/dashboard" />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}
