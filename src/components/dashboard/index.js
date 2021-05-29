import SideNav from "../sidenav/sidenav";
import DashboardHeader from "./header";
import AddCard from "./addCard";
import Overview from "./overview";
import Transactions from "./transactionRecords";
import Recomendation from "./recomendations";
import MissedRewards from "./missedRewards";
import RewardEarn from "./rewardEarn";

const Dashboard = () => {
  return (
    <div className="dashboard_container flex">
      <SideNav />
      <div className="w-full lg:w-11/12 xl:w-11/12 right_side_section_container">
        <div className="py-2 background_clr_sections w-full px-5">
          <DashboardHeader />
          <AddCard />
          <div className="py-3 flex flex-col lg:flex-row xl:flex-row lg:justify-between xl:justify-between">
            <div className="w-full left_side_component_width my-1">
              <Overview />
            </div>
            <div className="right_side_component_width  my-1">
              <div className="mb-3">
                <RewardEarn />
              </div>
              <div>
                <MissedRewards />
              </div>
            </div>
          </div>
          <div className="py-3 flex flex-col lg:flex-row xl:flex-row lg:justify-between xl:justify-between">
            <div className="w-full left_side_component_width my-1">
              <Transactions />
            </div>
            <div className="w-full right_side_component_width my-1">
              <Recomendation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
