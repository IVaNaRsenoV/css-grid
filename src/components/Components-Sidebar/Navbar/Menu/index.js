import React, { useState } from "react";

export const Menu = ({ items }) => {
  const [displayChildren, setDisplayChildren] = useState({});

  const toggle = (item) => {
    setDisplayChildren({
      ...displayChildren,
      [item.title]: !displayChildren[item.title],
    });
  };

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.title}>
            {item.title}{" "}
            {item.children && (
              <button onClick={() => toggle(item)}>
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
