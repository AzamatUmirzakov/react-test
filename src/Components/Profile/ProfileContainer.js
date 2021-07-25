import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setCurrentUserActionCreator } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount = async () => {
    const url = new URL(
      "api/1.0/profile/2",
      "https://social-network.samuraijs.com/"
    );
    const response = await fetch(url);
    const data = await response.json();
    this.props.setCurrentUser(data);
  };
  render() {
    return (
      <>
        <Profile {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profilePage.currentUser,
});

export default connect(mapStateToProps, {
  setCurrentUser: setCurrentUserActionCreator,
})(ProfileContainer);
