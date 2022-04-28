import styles from "./Star.module.scss";
import classnames from "classnames";

export const Star = ({ num }) => {
  return (
    <>
      <input
        id={classnames(`simple_rating__${num}`)}
        type="radio"
        className={styles.simple_rating__item}
        name="simple-rating"
        value="5"
      />
      <label
        for={`simple-rating__${num}`}
        className={styles.simple_rating__label}
      ></label>
    </>
  );
};
