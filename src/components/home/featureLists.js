import { Carousel } from "react-responsive-carousel";
import CarousalImg1 from "../../assets/images/Group27251.png";
import CarousalImg2 from "../../assets/images/Group27252.png";
import CarousalImg3 from "../../assets/images/Group27253.png";
import Carousal1Logo from "../../assets/images/loan.png";
import Carousal2Logo from "../../assets/images/reward.png";
import Carousal3Logo from "../../assets/images/credit-card-2.png";

const Carousal = () => {
  return (
    <>
      <Carousel axis="vertical" autoPlay={true} infiniteLoop interval={2000}>
        {/* 1st carousal */}
        <div className="px-3 featured_list_container">
          {/* left side */}
          <div className="lg:w-4/12 xl:w-4/12 w-full icon_container">
            <img src={CarousalImg1} alt="" />
          </div>
          {/* right side */}
          <div className="flex flex-col items-start lg:w-6/12 xl:w-6/12 px-2 justify-center w-full">
            <div className="small_icon_container">
              <img src={Carousal1Logo} alt="" />
            </div>
            <div className="w-full lg:w-9/12 xl:w-9/12 lg:py-0 xl:py-0">
              <h4 className="text-2xl primary_clr font-bold lg:text-left xl:text-left pt-4">
                Smartly Manage your Debt.
              </h4>
              <p className="primary_clr py-3 lg:text-left xl:text-left">
                OneCard smartly pays off your bills, so you avoid late fees and
                keep that credit score climbing!?
              </p>
            </div>
          </div>
        </div>
        {/* 2nd carousal */}
        <div className="featured_list_container px-3">
          {/* left side */}
          <div className="flex flex-col items-start w-6/12 px-2 justify-center">
            <div className="small_icon_container">
              <img src={Carousal2Logo} alt="" />
            </div>
            <div className="w-full lg:w-9/12 xl:w-9/12">
              <h4 className="text-2xl primary_clr font-bold lg:text-left xl:text-left pt-4">
                Never Miss A Reward
              </h4>
              <p className="primary_clr py-3 lg:text-left xl:text-left">
                Know what card to use where to earn maximum rewards
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="w-4/12 icon_container lg:py-0 xl:py-0">
            <img src={CarousalImg2} alt="" />
          </div>
        </div>
        {/* 3rd carousal */}
        <div className="featured_list_container px-3">
          {/* left side */}
          <div className="w-4/12 icon_container">
            <img src={CarousalImg3} alt="" />
          </div>
          {/* right side */}
          <div className="flex flex-col items-start w-6/12 px-2 justify-center py-3 lg:py-0 xl:py-0">
            <div className="small_icon_container">
              <img src={Carousal3Logo} alt="" />
            </div>
            <div className="w-full lg:w-9/12 xl:w-9/12">
              <h4 className="text-2xl primary_clr font-bold lg:text-left xl:text-left pt-4 ">
                Always Pay With The Right Card
              </h4>
              <p className="primary_clr py-3 lg:text-left xl:text-left">
                Know what card to use where to earn maximum rewards
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};
export default Carousal;
