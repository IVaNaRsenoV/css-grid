import React from "react";
import { useArray } from "../../hook/useArray";
import styles from "./main.module.css";
import classNames from "classnames";

export const Main = () => {
  const arr = useArray(12);
  return (
    <ul className={styles.wrapper}>
      {arr.map((el, i) => {
        return (
          <li key={i} className={classNames(styles.item, styles[`item-${i}`])}>
            {el}
          </li>
        );
      })}
    </ul>
  );
};
