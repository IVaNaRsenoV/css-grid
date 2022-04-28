import withRating from "../../../hoc/withRating";
import styles from "./Rating.module.scss";

export const Rating = withRating(({ children }) => {
  return (
    <form action="#">
      <div>
        <div className={styles.simple_rating}>
          <div className={styles.simple_rating__items}>{children}</div>
        </div>
      </div>
    </form>
  );
});
