import React from "react";
import styles from "./Content.module.scss";
import skillbox from "../../../images/png/content/top-content/skillbox/Rectangle1.png";
import {
  Paragraph,
  HeaderContent,
  Description,
  ShowReviews,
} from "../../../components/Components-Content";

export const Content = () => {
  return (
    <content className={styles.content}>
      <div className={styles.skillbox}>
        <HeaderContent skillbox={skillbox} />
        <Paragraph />
        <Description />
        <div
          style={{
            width: "96%",
            border: "1px solid #EBEBEB",
            margin: "0 auto",
          }}
        ></div>
        <ShowReviews />
      </div>
    </content>
  );
};
