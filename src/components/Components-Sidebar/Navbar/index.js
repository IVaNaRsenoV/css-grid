import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withNavbar } from "../../../hoc/withNavbar";

const Navbar = ({ list, fn, menu }) => {
  const [name, setName] = useState("courses");
  const selector = useSelector((state) => state[`${name}`]);
  // debugger;

  const getList = (e) => {
    console.log(e.target.innerText);
    setName(e.target.innerText);
  };

  if (name === "Курсы") setName("courses");
  if (name === "Книги") setName("books");
  if (name === "Сервисы") setName("services");
  if (name === "Товары") setName("products");

  return (
    <nav>
      <ul>
        {list.map((element, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                e.preventDefault();
                getList(e);
                fn(element.key);
              }}
            >
              ========================{element.value}========================
              <ul>
                {selector
                  ? selector.map((el, i) => <li key={i}>{el}</li>)
                  : null}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withNavbar(Navbar);
