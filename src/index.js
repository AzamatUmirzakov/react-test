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

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route component={Profile} path="/profile" />
          <Route component={Dialogs} path="/dialogs" />
        </div>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
