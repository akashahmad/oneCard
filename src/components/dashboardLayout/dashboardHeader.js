import Logo from "../../assets/images/Logo.png";
import WhiteLogo from "../../assets/images/Logo_White.png";
import Hamburger from "../../assets/images/hamburger.png";

const Header = (props) => {
  let { setDashboardSideNav } = props;
  return (
    <>
      {/* desktop  */}
      <div className="hidden lg:block xl:block">
        <div className="flex justify-center pt-2 pb-3">
          <img src={Logo} alt="" />
        </div>
      </div>
      {/* reponsive */}
      <div className="block lg:hidden xl:hidden">
        <div className="flex responsive_dashboard_container">
          <div
            className="hamburger_container"
            onClick={() => setDashboardSideNav(true)}
          >
            <img src={Hamburger} alt="" />
          </div>
          <div className="logo_container">
            <img src={WhiteLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
