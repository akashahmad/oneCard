import SideNav from "./sidenav";
import DashboardHeader from "./header";

const Dashboard = () => {
  return (
    <div className="dashboard_container flex">
      <SideNav />
      <div className="w-11/12 right_side_section_container">
        <div className="py-2 background_clr_sections">
          <DashboardHeader />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
