import Security from "../../assets/images/Group-27205.png";

const SecurityDetails = () => {
  return (
    <div className="security_detail_container py-12">
      <div className="mx-auto container flex justify-center">
        <div className="lg:w-8/12 xl:w-8/12  security_icon_Detail rounded">
          {/* logo */}
          <div className="w-full flex justify-center items-center lg:w-3/12 xl:w-3/12 flex-col left_icon_container py-5 rounded px-12">
            <img src={Security} alt="" />
            <p className="py-2 font-bold">100% Secure</p>
          </div>
          {/* detail */}
          <div className="w-full w-9/12 py-5 px-4">
            <h4 className="text-2xl py-2 primary_clr font-bold text-center lg:text-left xl:text-left">
              Your Money Stay Safe
            </h4>
            <p className="py-2 lg:text-left xl:text-left ">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </p>
            <p className="py-2">Learn More About Our Security</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecurityDetails;
