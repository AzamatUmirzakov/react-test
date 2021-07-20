import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.profilePage.currentUser,
  };
};

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;
