import React from "react";
import styles from "./Item.module.scss";

export const Item = ({ children, data }) => {
  return (
    <div>
      <div style={{ display: "flex", paddingRight: "50px" }}>
        <p className={styles.p__star__top}>{data.top}</p>
        {children}
      </div>
      <p className={styles.p__star__inner}>{data.bottom}</p>
    </div>
  );
};
