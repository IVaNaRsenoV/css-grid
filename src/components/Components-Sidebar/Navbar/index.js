import { useState } from "react";
import { Cap, Cloud, Book, Products } from "../../../images/svg/sidebar";
import { courses, services, books, products } from "./data";
import styles from "./Navbar.module.scss";

const data = [
  { svg: <Cap />, item: courses },
  { svg: <Cloud />, item: services },
  { svg: <Book />, item: books },
  { svg: <Products />, item: products },
];

const Node = ({ menu }) => {
  const [isOpen, setOpen] = useState(false);

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
              className={styles.item}
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
  return (
    <ul>
      {data.map((item) => (
        <li className={styles.list}>
          {item.svg}
          <Node menu={item.item} />
        </li>
      ))}
    </ul>
  );
};
