import React from "react";
import { Item } from "../Item";
import { Rating } from "../../Rating";
import styles from "./Left.module.scss";

export const Left = () => {
  return (
    <div className={styles.head__content__stars} style={{ paddingTop: "40px" }}>
      <Item data={{ top: "24 000$", bottom: "Цена" }}>
        <button className={styles.btn__star}>-10 000$</button>
      </Item>
      <Item data={{ top: "5000$/мес.", bottom: "В кредит" }} />
      <div style={{ paddingRight: "30px" }}>
        <Rating nums={5} />
        <p className={styles.p__star__inner}>20 отзывов</p>
      </div>
    </div>
  );
};
