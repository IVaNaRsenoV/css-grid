import React from "react";
import withRating from "../../../hoc/withRating";
import styles from "./Rating.module.scss";

export const Rating = withRating(({ children }) => {
  return <div className={styles.rating}>{children}</div>;
});
