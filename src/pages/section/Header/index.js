import React from "react";
import { Owl } from "../../../images/svg/header";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header
        className={styles.header}
        style={{ paddingTop: "40px", paddingBottom: "20px" }}
      >
        <Owl />
      </header>
      <div className={styles.h1}>
        <h1
          style={{
            color: "#3B434E",
            fontSize: "26px",
            paddingTop: "40px",
            paddingBottom: "20px",
          }}
        >
          Курсы по Photoshop
        </h1>
        <span className={styles.h1_btn} style={{ marginTop: "25px" }}>
          10
        </span>
      </div>
      <div
        style={{
          justifySelf: "end",
          paddingTop: "58px",
          gridArea: "1/11/2/14",
        }}
      >
        <span
          style={{
            paddingLeft: "40px",
            fontSize: "16px",
            color: "#00000",
            fontFamily: "Noto Sans",
            lineHeight: "22px",
          }}
        >
          По цене
        </span>
        <span
          style={{
            paddingLeft: "40px",
            fontSize: "16px",
            color: "#00000",
            fontFamily: "Noto Sans",
            lineHeight: "22px",
          }}
        >
          По рейтингу
        </span>
      </div>
    </>
  );
};
