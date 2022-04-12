import { useList } from "../hooks/useList";
import { useDispatch } from "react-redux";

const list = [
  {
    key: "Courses",
    value: <a href="#">Курсы</a>,
  },
  {
    key: "Services",
    value: <a href="#">Сервисы</a>,
  },
  {
    key: "Books",
    value: <a href="#">Книги</a>,
  },
  {
    key: "Products",
    value: <a href="#">Товары</a>,
  },
];

export function withNavbar(Component) {
  return function (props) {
    const menu = useList("/post", "POST");
    const dispatch = useDispatch();
    const fn = (key) => {
      console.log(menu[`${key}`]);
      dispatch({ type: "COURSES", payload: menu["Courses"] });
    };
    return <Component {...props} menu={menu} fn={fn} list={list} />;
  };
}
