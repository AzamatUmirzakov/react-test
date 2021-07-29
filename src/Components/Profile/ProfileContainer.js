import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = "2";
    this.props.setCurrentUser(userId);
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
  setCurrentUser,
})(withRouter(ProfileContainer));
