import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setCurrentUser,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
// import AuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 18471;
    this.props.setCurrentUser(userId);
    this.props.getStatus(userId);
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
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    setCurrentUser,
    getStatus,
    updateStatus,
  }),
  withRouter
  // AuthRedirect
)(ProfileContainer);
