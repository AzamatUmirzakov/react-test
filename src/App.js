import { Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
// import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
// import News from "./Components/News/News";
// import Music from "./Components/Music/Music";
// import Settings from "./Components/Settings/Settings";
function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route render={() => <ProfileContainer />} path="/profile/:userId?" />
        <Route render={() => <DialogsContainer />} path="/dialogs" />
        <Route render={() => <UsersContainer />} path="/users" />
      </div>
    </div>
  );
}

export default App;
