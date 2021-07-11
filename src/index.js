import { subscribe } from "./redux/state";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import "./style.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.store.getState().sidebar} />
        <div className="app-wrapper-content">
          <Route render={() => <Profile store={store} />} path="/profile" />
          <Route render={() => <Dialogs store={store} />} path="/dialogs" />
        </div>
      </div>
    </BrowserRouter>
  );
}

let render = (store) => {
  ReactDOM.render(<App store={store} />, document.querySelector("#root"));
};

subscribe(render);

render(store);
