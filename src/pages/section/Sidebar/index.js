import React from "react";
import { Navbar } from "../../../components/Components-Sidebar/Navbar";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <sidebar className={styles.sidebar}>
      <Navbar />
    </sidebar>
  );
};
