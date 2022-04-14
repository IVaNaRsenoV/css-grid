import { useState } from "react";
import { useList } from "../../../hooks/useList";

const Menu = ({ items }) => {
  const [displayChildren, setDisplayChildren] = useState({});

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.title}>
            {item.title}{" "}
            {item.children && (
              <button
                onClick={() => {
                  setDisplayChildren({
                    ...displayChildren,
                    [item.title]: !displayChildren[item.title],
                  });
                }}
              >
                {displayChildren[item.title] ? "-" : "+"}
              </button>
            )}
            {displayChildren[item.title] && item.children && (
              <Menu items={item.children} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export const Navbar = () => {
  const data = useList("/post", "POST");
  console.log(data);
  return <Menu items={data} />;
};
