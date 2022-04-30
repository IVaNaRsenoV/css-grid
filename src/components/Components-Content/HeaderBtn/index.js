import styles from "./HeaderBtn.module.scss";

export const HeaderBtn = (props) => {
  return (
    <button className={styles.headerBtn} {...props}>
      {props.text}
    </button>
  );
};
