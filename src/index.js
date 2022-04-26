import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
