import { Loop } from "../../../images/svg/sidebar";
import styles from "./Form.module.scss";

export const Form = () => {
  return (
    <div className={styles.form}>
      <input type="text" placeholder="Поиск..." />
      <div>
        <Loop />
      </div>
    </div>
  );
};
