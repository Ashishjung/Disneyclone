import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
// store.subscribe = (store) => {
//   console.log(store.getState());
// };
ReactDOM.render(<App />, document.getElementById("root"));
