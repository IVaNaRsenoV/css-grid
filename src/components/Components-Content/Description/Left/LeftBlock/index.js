import React from "react";
import styles from "./LeftBlock.module.scss";

export const LeftBlock = ({ h, p }) => {
  return (
    <div className={styles.left__block}>
      <h4>{h}</h4>
      <span style={{ flexGrow: "1", borderBottom: "1px dotted black" }}></span>
      <p>{p}</p>
    </div>
  );
};
