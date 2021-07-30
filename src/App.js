import { Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
// import News from "./Components/News/News";
// import Music from "./Components/Music/Music";
// import Settings from "./Components/Settings/Settings";
import Login from "./Components/Login/Login";
function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route render={() => <ProfileContainer />} path="/profile/:userId?" />
        <Route render={() => <DialogsContainer />} path="/dialogs" />
        <Route render={() => <UsersContainer />} path="/users" />
        <Route render={() => <Login />} path="/login" />
      </div>
    </div>
  );
}

export default App;
