import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/reduxStore";
import App from "./App";

const AppContainer = (props) => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

export default AppContainer;
