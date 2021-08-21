import { connect } from "react-redux";
import { login, logout } from "../../store/auth-reducer";
import Login from "./Login";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const LoginContainer = connect(mapStateToProps, {
  login,
  logout,
})(Login);

export default LoginContainer;
