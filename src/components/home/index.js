import ManagingCreditCard from "./managingCreditCard";
import FeaturesComponent from "./features";
import PayInfo from "./payInfo";
import Feedbacks from "./feedbacks";
import SecurityDetail from "./securityDetail";
import {withRouter} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home_container">
      <ManagingCreditCard />
      <FeaturesComponent />
      <PayInfo />
      <Feedbacks />
      <SecurityDetail />
    </div>
  );
};
export default withRouter(Home);
