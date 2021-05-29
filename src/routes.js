import { Switch, Route , withRouter} from "react-router-dom";
import Home from "./container/home";
import SignUp from "./container/signup";
import Login from "./container/login";
import Dashboard from './container/dashboard'

const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  );
};
export default withRouter(Routes);
