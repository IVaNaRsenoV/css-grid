import React from "react";
import { Header, Sidebar, Content, Footer } from "./section";

import styles from "./main.module.scss";

export const Main = () => {
  return (
    <main className={styles.wrapper}>
      <Header />
      <Sidebar className={styles.sidebar} />
      <Content className={styles.content} />
      <Footer className={styles.footer} />
    </main>
  );
};
