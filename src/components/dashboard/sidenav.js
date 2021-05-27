import ProfileImage from "../../assets/images/avatar.png";

const SideNav = () => {
  return (
    <div className="side_nav_container w-1/12 primary_bg_dark_clr py-8">
      {/* profile name and image */}
      <div className="flex flex-col items-center justify-center profile_info_container pb-10">
        <img src={ProfileImage} alt="" />
        <h5 className="text-1xl text-white py-3 font-normal">Anna Doe</h5>
      </div>
      {/* links */}
      <div className="flex flex-col items-center justify-center profile_info_container py-12">
        <div className="flex flex-col items-center justify-center py-2">
          <img src={ProfileImage} alt="" />
          <h5 className="text-1xl text-white py-4 font-normal">Dashboard</h5>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <img src={ProfileImage} alt="" />
          <h5 className="text-1xl text-white py-4 font-normal">Profile</h5>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <img src={ProfileImage} alt="" />
          <h5 className="text-1xl text-white py-4 font-normal">Feedback</h5>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <img src={ProfileImage} alt="" />
          <h5 className="text-1xl text-white py-4 font-normal">Setting</h5>
        </div>
      </div>
      {/* logout */}
      <div className="flex flex-col items-center justify-center profile_info_container py-10">
        <img src={ProfileImage} alt="" />
        <h5 className="text-1xl text-white py-3 font-normal">Logout</h5>
      </div>
    </div>
  );
};
export default SideNav;
