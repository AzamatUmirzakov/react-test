import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setCurrentUserActionCreator } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount = async () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = "2";
    const url = new URL(
      userId,
      "https://social-network.samuraijs.com/api/1.0/profile/"
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
})(withRouter(ProfileContainer));
