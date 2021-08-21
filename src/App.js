import { Route } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import { initialize } from "./store/app-reducer";
import Preloader from "./common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route render={() => <ProfileContainer />} path="/profile/:userId?" />
          <Route render={() => <DialogsContainer />} path="/dialogs" />
          <Route render={() => <UsersContainer />} path="/users" />
          <Route render={() => <LoginContainer />} path="/login" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, {
  initialize,
})(App);
