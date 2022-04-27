import styles from "./HeaderBtn.module.scss";

export const HeaderBtn = ({ text }) => {
  return <button className={styles.headerBtn}>{text}</button>;
};
