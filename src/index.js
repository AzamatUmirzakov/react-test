import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
// import News from "./Components/News/News";
// import Music from "./Components/Music/Music";
// import Settings from "./Components/Settings/Settings";
import "./style.css";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route render={() => <Profile />} path="/" exact />
        <Route render={() => <DialogsContainer />} path="/dialogs" />
        <Route render={() => <UsersContainer />} path="/users" />
      </div>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
