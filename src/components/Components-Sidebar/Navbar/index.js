import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cap, Cloud, Book, Products } from "../../../images/svg/sidebar";
import { courses, services, books, products } from "./data";
import styles from "./Navbar.module.scss";
import classnames from "classnames";

const Node = ({ menu }) => {
  const [isOpen, setOpen] = useState(false);
  const [isToggle, setToggle] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <ul className={styles.navbar}>
      {menu.map((item) => {
        return (
          <>
            <li
              key={item.id}
              className={classnames([styles.item, "itemList"])}
              onClick={toggle}
              style={{ paddingTop: "0px" }}
            >
              {item.item}
            </li>
            {isOpen && item.children && <Node menu={item.children} />}
          </>
        );
      })}
    </ul>
  );
};

export const Navbar = () => {
  const data = [
    { svg: <Cap className={styles.svg} />, item: courses },
    {
      svg: <Cloud className={styles.svg} />,
      item: services,
    },
    { svg: <Book className={styles.svg} />, item: books },
    {
      svg: <Products className={styles.svg} />,
      item: products,
    },
  ];

  return (
    <ul>
      {data.map((item) => (
        <li className={classnames([styles.list, "testListItem"])}>
          <div className={styles.test}>
            {item.svg}
            <Node menu={item.item} />
          </div>
        </li>
      ))}
    </ul>
  );
};
