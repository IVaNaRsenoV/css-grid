import styles from "./Quality.module.scss";

export const Quality = ({ quality, text }) => {
  return (
    <div className={styles.quality}>
      <h2>{quality}</h2>
      <p>{text}</p>
    </div>
  );
};
