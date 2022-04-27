import { Right } from "./Right";
import { Left } from "./Left";
import styles from "./HeaderContent.module.scss";

export const HeaderContent = ({ skillbox }) => {
  return (
    <section className={styles.head__content}>
      <Right skillbox={skillbox} />
      <Left />
    </section>
  );
};
