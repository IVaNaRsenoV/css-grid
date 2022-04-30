import styles from "./Right.module.scss";
import classnames from "classnames";

const obj = [
  {
    h: "Преимущества",
    p: "Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала",
  },
  { h: "Недостатки", p: "Некоторое темы раскрыты не до конца" },
];

const RightBlock = ({ h, p }) => {
  return (
    <>
      <h3>{h}</h3>
      <p>{p}</p>
    </>
  );
};

export const Right = () => {
  return (
    <div className={styles.right}>
      <div className={classnames([styles.quality, styles.border__green])}>
        <RightBlock h={obj[0].h} p={obj[0].p} />
      </div>
      <div className={classnames([styles.quality, styles.border__red])}>
        <RightBlock h={obj[1].h} p={obj[1].p} />
      </div>
    </div>
  );
};
