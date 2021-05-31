import RoundedImg from "../../assets/images/Group-27225.png";
import CardsImage from "../../assets/images/Group-27250.png";

const ManagingCreditCard = () => {
  return (
    <div className="managing_creditCard_container">
      <div className="container mx-auto flex justify-center px-2 py-12 lg:px-5 xl:px-5">
        {/* content */}
        <div className="w-12/12 lg:w-10/12 xl:w-10/12 py-12 flex justify-center lg:justify-start xl:justify-start">
          {/* title , paragraph and button */}
          <div className="w-8/12 lg:w-8/12 xl:w-6/12 flex-col py-2 flex items-center lg:items-start xl:items-start text-center lg:text-left xl:text-left">
            <div>
              <h2 className="text-4xl primary_clr font-bold">
                Managing Credit Cards Made Stress Free!
              </h2>
              <p className="py-8 primary_clr font-normal text-2xl">
                We automate the tedious task of managing all your credit cards
                and help you save money, get more rewards and spend smartly all
                in one place!
              </p>
              <div className="hidden lg:block xl:block">
                <button className="primary_bg_dark_clr py-2 flex justify-center text-base text-white items-center px-12 text-1xl">
                  Get Started
                </button>
              </div>
            </div>
            {/* left side rounded image */}
            <div className="rounded_img_container hidden lg:block xl:block">
              <img src={RoundedImg} alt="" />
            </div>
            <div className="right_side_cardsImg">
              <img src={CardsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* bottom bar*/}
      <div className="bottom_bar_container py-12 w-full ">
        <div className="block lg:hidden xl:hidden pt-5">
          <div className="flex justify-center pt-12">
            <button className="primary_bg_dark_clr py-2 flex justify-center text-base text-white items-center px-12 text-1xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManagingCreditCard;
