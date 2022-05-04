import React from "react";
import styles from "./Content.module.scss";
import skillbox from "../../../images/png/content/top-content/skillbox/Rectangle1.png";
import {
  Paragraph,
  HeaderContent,
  Description,
  ShowReviews,
} from "../../../components/Components-Content";

import { SubContent } from "../../../components/SubContent";

export const Content = () => {
  return (
    <content className={styles.content}>
      <div
        className={styles.skillbox}
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
          borderRadius: "5px",
        }}
      >
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
      <SubContent />
    </content>
  );
};
