import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserDataActionCreator } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  async componentDidMount() {
    let url = new URL(
      "auth/me/",
      "https://social-network.samuraijs.com/api/1.0/"
    );

    let response = await fetch(url, {
      credentials: "include",
    });
    let json = await response.json();
    if (json.resultCode === 0)
      this.props.setUserData(json.data.id, json.data.email, json.data.login);
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  setUserData: setUserDataActionCreator,
})(HeaderContainer);
