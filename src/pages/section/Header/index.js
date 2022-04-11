import React from "react";
import { Owl } from "../../../images/svg/header";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Owl />
      </header>
      <div className={styles.h1}>
        <h1>Курсы по Photoshop</h1>
        <span className={styles.h1_btn}>10</span>
      </div>
    </>
  );
};
