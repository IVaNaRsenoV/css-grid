import React from "react";
import { Form, Navbar } from "../../../components/Components-Sidebar";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <sidebar className={styles.sidebar}>
      <Form />
      <Navbar />
    </sidebar>
  );
};
