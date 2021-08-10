import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import Header from "./Header";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const HeaderContainer = connect(mapStateToProps, {
  logout,
})(Header);

export default HeaderContainer;
