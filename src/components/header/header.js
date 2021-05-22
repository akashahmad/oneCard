import BlackLogo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="header_container py-4">
      <div className="container mx-auto flex justify-center">
        <div className="w-10/12 px-0 flex">
          {/* left side */}
          <div className="w-8/12 px-0 flex items-center">
            {/* logo */}
            <div className="w-4/12">
              <img src={BlackLogo} alt="" />
            </div>
            {/* links */}
            <div className="w-8/12 hidden lg:block xl:block">
              <ul className="list-none flex text-1xl">
                <li className="px-2">Home</li>
                <li className="px-4">About Us</li>
                <li className="px-2">Contact Us</li>
              </ul>
            </div>
          </div>
          {/* right side */}
          <div className="w-4/12 flex justify-end">
            <div className="hidden lg:block xl:block">
              <button className="primary_bg_dark_clr py-2 flex justify-center text-base text-white items-center px-10">
                Login/Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
