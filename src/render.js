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
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route
            render={() => (
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
              />
            )}
            path="/profile"
          />
          <Route
            render={() => <Dialogs state={props.state.dialogsPage} />}
            path="/dialogs"
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

let render = (state, addPost) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} />,
    document.querySelector("#root")
  );
};

export default render;
