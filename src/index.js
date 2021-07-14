import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// import News from "./Components/News/News";
// import Music from "./Components/Music/Music";
// import Settings from "./Components/Settings/Settings";
import "./style.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.store.getState().sidebar} />
        <div className="app-wrapper-content">
          <Route
            render={() => <Profile store={props.store} />}
            path="/"
            exact
          />
          <Route
            render={() => <DialogsContainer store={props.store} />}
            path="/dialogs"
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

let render = (store) => {
  ReactDOM.render(<App store={store} />, document.querySelector("#root"));
};

store.subscribe(() => render(store));

render(store);
