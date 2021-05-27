import Logo from "../../assets/images/Logo.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
import Facebook from "../../assets/images/instagram.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="container mx-auto">
        <div className="flex justify-center py-10">
          <div className="w-full w-3/12 flex flex-col items-center px-4">
            <img src={Logo} alt="" />
            <div className="flex py-7">
              <div>
                <img src={Twitter} alt="" />
              </div>
              <div className="px-5">
                <img src={Facebook} alt="" />
              </div>
              <div>
                <img src={Instagram} alt="" />
              </div>
            </div>
            <p className="text-center py-3">
              © Copyright Onecard, All Rights Reserved | Privacy Policy | Terms
              & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
