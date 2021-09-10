import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setCurrentUser,
  getStatus,
  updateStatus,
  updatePhoto,
  updateProfile,
} from "../../store/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";
// import AuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    if (userId) {
      this.props.setCurrentUser(userId);
      this.props.getStatus(userId);
    }
  };
  render() {
    if (!this.props.authorizedUserId && !this.props.match.params.userId) {
      return <Redirect to={"/login"} />;
    }
    return (
      <Profile {...this.props} isOwner={!!!this.props.match.params.userId} />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profilePage.currentUser,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setCurrentUser,
    getStatus,
    updateStatus,
    updatePhoto,
    updateProfile,
  }),
  withRouter
  // AuthRedirect
)(ProfileContainer);
