import { withRouter } from "react-router-dom";

const DashboardSideNav = (props) => {
  let { setDashboardSideNav, dashboardSideNav, setHomeSideNav, homeSideNav } =
    props;
  return (
    <div className="dashboard_sidenav_links">
      {dashboardSideNav && (
        <div
          class="das_sidenav cursor-pointer"
          style={{ width: `${dashboardSideNav ? "250px" : "0px"}` }}
        >
          <h6 class="closebtn" onClick={() => setDashboardSideNav(false)}>
            &times;
          </h6>
          <h6>Dashboard</h6>
          <h6>Profile</h6>
          <h6>Setting</h6>
          <h6>Logout</h6>
        </div>
      )}
      {homeSideNav && (
        <div
          class="das_sidenav cursor-pointer"
          style={{ width: `${homeSideNav ? "250px" : "0px"}` }}
        >
          <h6 class="closebtn" onClick={() => setHomeSideNav(false)}>
            &times;
          </h6>
          <h6>Home</h6>
          <h6>About Us</h6>
          <h6>Contact Us</h6>
          <h6>Login</h6>
          <h6>Signup</h6>
        </div>
      )}
    </div>
  );
};
export default withRouter(DashboardSideNav);
