import ManagingCreditCard from "./managingCreditCard";
import SideNav from "../sidenav/sidenav";
import FeaturesComponent from "./features";
import PayInfo from "./payInfo";
import Feedbacks from "./feedbacks";
import SecurityDetail from "./securityDetail";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  let { homeSideNav, setHomeSideNav } = props;

  return (
    <div className="home_container">
      {homeSideNav && <SideNav setHomeSideNav={setHomeSideNav} homeSideNav={homeSideNav} />}
      <ManagingCreditCard />
      <FeaturesComponent />
      <PayInfo />
      <Feedbacks />
      <SecurityDetail />
    </div>
  );
};
export default withRouter(Home);
