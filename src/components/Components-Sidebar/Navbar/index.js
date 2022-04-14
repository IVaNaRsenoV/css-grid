import { Menu } from "./Menu";
import { menu } from "./data/data";

export const Navbar = () => {
  return (
    <>
      <input type="text" placeholder="Поиск..." />
      <input type="submit" />
      <Menu items={menu} />
    </>
  );
};
