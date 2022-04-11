import React from "react";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <sidebar className={styles.sidebar}>
      <input type="text" placeholder="Поиск..." />
      <input type="submit" />
    </sidebar>
  );
};
