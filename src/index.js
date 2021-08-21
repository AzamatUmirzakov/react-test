import store from "./store/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";
import "./style.css";

ReactDOM.render(<AppContainer />, document.querySelector("#root"));
