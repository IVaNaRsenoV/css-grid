import React from "react";
import { Left } from "./Left";
import { Right } from "./Right";
import styles from "./Description.module.scss";
import classnames from "classnames";

export const Description = () => {
  return (
    <div className={classnames([styles.description])}>
      <Left />
      <Right />
    </div>
  );
};
