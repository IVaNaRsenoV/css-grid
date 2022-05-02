import { HeaderBtn } from "../../HeaderBtn";
import { Chalice } from "../../../../images/svg/content";
import styles from "./Right.module.scss";

export const Right = ({ skillbox }) => {
  return (
    <div className={styles.head__content__skillbox}>
      <div className={styles.img_skillbox}>
        <img src={skillbox} />
      </div>
      <div className={styles.head__text}>
        <h3 className={styles.proffesion}>
          Профессия дизайнер от 0 до PRO <Chalice className={styles.chalice} />
        </h3>
        <div style={{ display: "flex" }}>
          <HeaderBtn text={"Photoshop"} />
          <HeaderBtn text={"Дизайн"} />
        </div>
      </div>
    </div>
  );
};
