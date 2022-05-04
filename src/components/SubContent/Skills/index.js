import React from "react";
import styles from "./Skills.module.scss";

const Btn = ({ children }) => {
  return <button>{children}</button>;
};

export const Skills = () => {
  return (
    <div className={styles.skills__container}>
      <h4>Получаемые навыки</h4>
      <div style={{ display: "flex" }}>
        <Btn>Работа в Photoshop</Btn>
        <Btn>Подготовка макетов</Btn>
        <Btn>Графический дизайн</Btn>
        <Btn>Web дизайн</Btn>
        <Btn>Дизайн сайтов</Btn>
      </div>
    </div>
  );
};
