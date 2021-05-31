import PayAndSaveImg from "../../assets/images/piggy-bank.png";
import SmartPhone from "../../assets/images/smartphone1.png";
import PaymentMethodImg from "../../assets/images/payment-method.png";

const PayInfo = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="payInfo_cards_container py-12">
        {/* left side */}
        <div className="w-full w-3/12 flex flex-col items-center px-4">
          <div className="ml-5">
            <img src={SmartPhone} alt="" />
          </div>
          <h4 className="text-lg primary_clr font-bold lg:text-left xl:text-left py-2">
            Connect
          </h4>
          <p className="text-center py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
          </p>
        </div>
        {/* center */}
        <div className="w-full w-3/12 flex flex-col items-center px-4">
          <div className="ml-5">
            <img src={PaymentMethodImg} alt="" />
          </div>
          <h4 className="text-lg primary_clr font-bold lg:text-left xl:text-left py-2">
            Pay
          </h4>
          <p className="text-center py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
          </p>
        </div>
        {/* right side */}
        <div className="w-full w-3/12 flex flex-col items-center px-4">
          <img src={PayAndSaveImg} alt="" />
          <h4 className="text-lg primary_clr font-bold lg:text-left xl:text-left py-2">
            Save
          </h4>
          <p className="text-center py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button className="primary_bg_dark_clr py-2 flex justify-center text-base text-white items-center px-12 text-1xl">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default PayInfo;
