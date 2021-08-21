import { connect } from "react-redux";
import { logout } from "../../store/auth-reducer";
import Header from "./Header";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const HeaderContainer = connect(mapStateToProps, {
  logout,
})(Header);

export default HeaderContainer;
