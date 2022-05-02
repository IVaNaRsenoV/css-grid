import React from "react";
import styles from "./ShowReviews.module.scss";

export const ShowReviews = () => {
  return (
    <div className={styles.showReviews__container}>
      <button>Узнать подробнее</button>
      <button>
        Читать отзывы
        <span className={styles.arrow}>&#62;</span>
      </button>
    </div>
  );
};
