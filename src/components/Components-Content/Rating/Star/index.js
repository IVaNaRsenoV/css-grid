import styles from "./Star.module.scss";

export const Star = ({ num }) => {
  return (
    <>
      <input
        type="radio"
        className={styles.star__input}
        id={`${num}`}
        name="rating"
      />
      <label for={`${num}`} className={styles.star__label}>
        ☆
      </label>
    </>
  );
};
