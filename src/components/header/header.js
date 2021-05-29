import BlackLogo from "../../assets/images/Logo.png";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  let { history } = props;
  return (
    <div className="header_container py-4">
      <div className="container mx-auto flex justify-center">
        <div className="w-10/12 px-0 flex">
          {/* left side */}
          <div className="w-12/12 lg:w-8/12 xl:w-8/12 px-0 flex items-center w-full">
            {/* logo */}
            <div className="w-12/12 lg:w-4/12 xl:w-4/12 flex justify-center lg:justify-start xl:justify-start w-full">
              <img src={BlackLogo} alt="" />
            </div>
            {/* links */}
            <div className="lg:w-8/12 xl:w-8/12 hidden lg:block xl:block">
              <ul className="list-none flex text-1xl">
                <li
                  className="px-2"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Home
                </li>
                <li className="px-4">About Us</li>
                <li className="px-2">Contact Us</li>
              </ul>
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-4/12 xl:w-4/12 flex justify-end">
            <div className="hidden lg:block xl:block">
              <div className="h-full flex items-center">
                <button
                  className="primary_bg_dark_clr py-2 flex justify-center text-base text-white items-center px-10"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="bg-white primary_signup_btn py-2 flex justify-center text-base text-white items-center px-10 mx-4"
                  onClick={() => {
                    history.push("/sign-up");
                  }}
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
