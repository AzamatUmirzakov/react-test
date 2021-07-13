import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
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
            render={() => (
              <Profile
                profilePage={props.store.getState().profilePage}
                dispatch={props.store.dispatch.bind(props.store)}
              />
            )}
            path="/"
            exact
          />
          <Route
            render={() => (
              <Dialogs
                dialogsPage={props.store.getState().dialogsPage}
                dispatch={props.store.dispatch.bind(props.store)}
              />
            )}
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

store.subcribe(render);

render(store);
