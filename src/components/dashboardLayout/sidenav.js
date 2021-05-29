import ProfileImage from "../../assets/images/avatar.png";
import Dashboard from "../../assets/images/home.svg";
import Profile from "../../assets/images/Group-27202.png";
import Feedback from "../../assets/images/calendar.png";
import Setting from "../../assets/images/Group27257.png";
import Logout from "../../assets/images/power.png";
import { withRouter } from "react-router-dom";

const SideNav = (props) => {
  let { history } = props;
  return (
    <div className="hidden lg:block xl:block w-1/12">
      <div className="w-full side_nav_container w-1/12 primary_bg_dark_clr py-8 h-full">
        {/* profile name and image */}
        <div className="flex flex-col items-center justify-center profile_info_container pb-10 cursor-pointer">
          <img src={ProfileImage} alt="" />
          <h5 className="text-1xl text-white py-3 font-normal">Anna Doe</h5>
        </div>
        {/* links */}
        <div className="flex flex-col items-center justify-center sidenav_links_info_container py-12">
          {/* dashboard */}
          <div className="flex flex-col items-center justify-center py-2 cursor-pointer">
            <div className="active_link px-3 py-3">
              <img src={Dashboard} alt="" />
            </div>
            <div>
              <h5 className="text-sm text-white py-4 font-normal">Dashboard</h5>
            </div>
          </div>
          {/* USer */}
          <div className="flex flex-col items-center justify-center py-2 cursor-pointer sideNav_InActive_links">
            <div className="inActive_link px-3 py-3">
              <img src={Profile} alt="" />
            </div>
            <div className="links_text_container">
              <h5 className="text-sm text-white py-4 font-normal">Profile</h5>
            </div>
          </div>
          {/* feedback */}
          <div className="flex flex-col items-center justify-center py-2 cursor-pointer">
            <div className="inActive_link px-3 py-3">
              <img src={Feedback} alt="" />
            </div>
            <div>
              <h5 className="text-sm text-white py-4 font-normal">Profile</h5>
            </div>
          </div>
          {/* setting */}
          <div className="flex flex-col items-center justify-center py-2 cursor-pointer">
            <div className="inActive_link px-3 py-3">
              <img src={Setting} alt="" />
            </div>
            <div>
              <h5 className="text-sm text-white py-4 font-normal">Setting</h5>
            </div>
          </div>
        </div>
        {/* logout */}
        <div
          className="flex flex-col items-center justify-center py-2 sidenav_links_info_container cursor-pointer"
          onClick={() => {
            history.push("/");
          }}
        >
          <div className="inActive_link px-3 py-3">
            <img src={Logout} alt="" />
          </div>
          <div>
            <h5 className="text-sm text-white py-4 font-normal">Logout</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SideNav);
