import React from "react";
import { LeftBlock } from "./LeftBlock";
import styles from "./Left.module.scss";

const obj = [
  { h: "Документ об окончании", p: "Диплом" },
  { h: "Сложность", p: "Начальная" },
  { h: "Длительность", p: "5 месяцев" },
];

export const Left = () => {
  return (
    <div className={styles.left} style={{ flexDirection: "column" }}>
      {obj.map(({ h, p }, i) => (
        <LeftBlock key={i} h={h} p={p} />
      ))}
    </div>
  );
};
