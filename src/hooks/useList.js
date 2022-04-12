import { useState, useEffect } from "react";
import axios from "axios";

export const useList = (url, method) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    axios({
      method,
      url,
    }).then((res) => setMenu(res.data));
  }, []);
  return menu;
};
