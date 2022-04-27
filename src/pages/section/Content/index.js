import React from "react";
import styles from "./Content.module.scss";
import skillbox from "../../../images/png/content/top-content/skillbox/Rectangle1.png";
import {
  Paragraph,
  HeaderContent,
  Quality,
} from "../../../components/Components-Content";

const advantages = "Преимущества";
const flaw = "Недостатки";

const textAdvanced =
  "Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала";
const textFlaw = "Некоторое темы раскрыты не до конца";

export const Content = () => {
  return (
    <content className={styles.content}>
      <div className={styles.skillbox}>
        <HeaderContent skillbox={skillbox} />
        <Paragraph />
        <Quality quality={advantages} text={textAdvanced} />
        <Quality quality={flaw} text={textFlaw} />
      </div>
    </content>
  );
};
