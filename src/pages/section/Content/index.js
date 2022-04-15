import React from "react";
import styles from "./Content.module.scss";
import skillbox from "../../../images/png/content/top-content/skillbox/Rectangle1.png";

const HeaderBtn = ({ text }) => {
  return <button>{text}</button>;
};

const HeaderContent = () => {
  return (
    <section className={styles.head__content}>
      <img src={skillbox} />
      <div>
        <h3>Профессия дизайнер от 0 до PRO</h3>
        <HeaderBtn text={"Photoshop"} />
        <HeaderBtn text={"Дизайн"} />
      </div>
    </section>
  );
};

const Paragraph = () => {
  return (
    <p className={styles.content__p1}>
      Студенты освоят не только hard skills, необходимые для работы
      веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
      взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
      Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня
      middle.
    </p>
  );
};

const advantages = "Преимущества";
const flaw = "Недостатки";

const textAdvanced =
  "Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала";
const textFlaw = "Некоторое темы раскрыты не до конца";

const Quality = ({ quality, text }) => {
  return (
    <>
      <h2>{quality}</h2>
      <p>{text}</p>
    </>
  );
};

export const Content = () => {
  return (
    <content className={styles.content}>
      <div className={styles.skillbox}>
        <HeaderContent />
        <Paragraph />
        <Quality quality={advantages} text={textAdvanced} />
        <Quality quality={flaw} text={textFlaw} />
      </div>
    </content>
  );
};
