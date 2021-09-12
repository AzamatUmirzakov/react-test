import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import { initialize } from "./store/app-reducer";
import Preloader from "./common/Preloader/Preloader";
const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./Components/Profile/ProfileContainer")
);

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
          <React.Suspense fallback={<p>loading...</p>}>
            <Switch>
              <Redirect exact from={"/"} to={"/profile"} />
              <Route
                render={() => <ProfileContainer />}
                path="/profile/:userId?"
              />
              <Route render={() => <DialogsContainer />} path="/dialogs" />
              <Route render={() => <UsersContainer />} path="/users" />
              <Route render={() => <LoginContainer />} path="/login" />
              <Route render={() => <div>error 404</div>} path={"*"} />
            </Switch>
          </React.Suspense>
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
