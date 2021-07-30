import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRedirect = (Component) => {
  const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });
  const wrapper = (props) => {
    if (!props.isAuth) {
      return <Redirect to={"/login"} />;
    } else return <Component {...props} />;
  };
  return connect(mapStateToProps)(wrapper);
};

export default AuthRedirect;
