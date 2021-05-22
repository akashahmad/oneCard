import { Switch, Route } from "react-router-dom";
import Home from "./container/home";
import SignUp from "./container/signup";
import Login from "./container/login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  );
};
export default Routes;
