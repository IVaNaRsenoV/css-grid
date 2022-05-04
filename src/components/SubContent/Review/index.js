import React from "react";
import { Avatar } from "../../../images/svg/SubContent/Avatar/Avatar";
import { Rating } from "../../Components-Content";
import styles from "./Review.module.scss";

const HeaderLeft = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar />
      <span
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          fontWeight: "bold",
          color: "#3B434E",
          fontSize: "14px",
        }}
      >
        Василий Роганов:
      </span>
      <span style={{ color: "#3B434E", fontSize: "14px" }}>
        Что вас ждёт в этом курсе ?
      </span>
    </div>
  );
};

const HeaderRight = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          paddingRight: "20px",
          color: "#3B434E",
          fontSize: "14px",
        }}
      >
        Оценка:
      </span>
      <Rating nums={5} />
    </div>
  );
};

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "26px 30px 12px 30px",
      }}
    >
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

const Content = () => {
  return (
    <div
      style={{
        padding: "12px 30px 50px 30px",
        lineHeight: "24px",
      }}
    >
      <p
        style={{
          color: "#3B434E",
          fontSize: "14px",
        }}
      >
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим
        непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего
        положения языка как самого популярного в программировании. Выбор мой пал
        на эту профессию еще и потому, что Java-разработчики получают самую
        большую зарплату. Хотя Python начинает догонять Java по многим моментам,
        но вот в крупном екоме разработке Джава все-таки остается главенствующей
        сейчас. Скажу так – полнота программы и интенсивность присуща обоим
        курсам GeekBrains. Хочу отметить, что с первого дня занятий вы
        приступаете к практике и получаете опыт коммерческой разработки уже в
        свое резюме. Скажу вам как прошедший это – реально помогло в
        трудоустройстве!
      </p>
    </div>
  );
};

const Form = () => {
  return (
    <div
      style={{
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Имя"
            style={{
              width: "218px",
              height: "36px",
              borderRadius: "5px",
              background: "#FFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
              border: "none",
              outline: "none",
              fontSize: "16px",
              paddingLeft: "12px",
              marginRight: "30px",
            }}
          />
          <input
            type="text"
            placeholder="Заголовок отзыва"
            style={{
              width: "218px",
              height: "36px",
              borderRadius: "5px",
              background: "#FFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
              border: "none",
              outline: "none",
              fontSize: "16px",
              paddingLeft: "12px",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ paddingRight: "20px" }}>Оценка:</span>
          <Rating nums={5} />
        </div>
      </div>
      <div>
        <textarea
          placeholder="Текст отзыва"
          style={{
            height: "76px",
            width: "100%",
            border: "none",
            outline: "none",
            resize: "none",
            padding: "12px 7px 12px 7px",
            fontSize: "16px",
            color: "#A4A4A4",
            marginTop: "20px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
          }}
        />
      </div>
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
        <button
          style={{
            background: "#7653FC",
            width: "148px",
            height: "35px",
            borderRadius: "5px",
            border: "none",
            fontSize: "14px",
            color: "#FFFFFF",
            cursor: "pointer",
            marginRight: "20px",
          }}
        >
          Отправить
        </button>
        <span
          style={{
            color: "#3B434E",
          }}
        >
          * Перед публикацией отзыв пройдёт предварительную модерацию и проверку
        </span>
      </div>
    </div>
  );
};

export const Review = () => {
  return (
    <div style={{ background: "#F9F8FF" }}>
      <Header />
      <Content />
      <Form />
    </div>
  );
};
