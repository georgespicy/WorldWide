import React from "react";
import Sidebar from "../components/Sidebar";
import Styles from "./AppLayout.module.css";
import Map from "../components/Map";

function AppLayout() {
  return (
    <div className={Styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
