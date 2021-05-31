import { Carousel } from "react-responsive-carousel";
// import { Carousel } from "antd";
import Icon1 from "../../assets/images/Mask-Group.png";
import Icon2 from "../../assets/images/Mask-Group2.png";
import Quotation from "../../assets/images/Group.png";

const Feedbacks = () => {
  return (
    <div className="feedback_container">
      <div className="container mx-auto py-12">
        {/* title */}
        <div className="text-center text-3xl primary_clr py-7 font-bold">
          <h2>What Our Client Say</h2>
        </div>
        {/* box */}
        <Carousel
          className="feedbacks_carousal"
          interval={2000}
          autoPlay={true}
          infiniteLoop={true}
        >
          {/* 1st */}
          <div className="box_below_Carousal py-5 px-5">
            <div className="flex justify-center box_icon_container pb-5">
              <img src={Icon1} alt="" />
            </div>
            <div className="flex justify-center">
              <h2 className="py-5 text-2xl text-black font-normal text-center">
                It was great experience !
              </h2>
              <img className="quotation_img" src={Quotation} alt="" />
            </div>
            <div className="py-12">
              <p className="text-center primary_clr">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
            <div>
              <p className="text-center primary_clr font-semibold">
                Sansa Stark, CEO - GOT
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div className="box_below_Carousal py-5 px-5">
            <div className="flex justify-center box_icon_container pb-5">
              <img src={Icon2} alt="" />
            </div>
            <div className="flex justify-center">
              <h2 className="py-5 text-2xl text-black font-normal text-center">
                It was great experience !
              </h2>
              <img className="quotation_img" src={Quotation} alt="" />
            </div>
            <div className="py-12">
              <p className="text-center primary_clr">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
            <div>
              <p className="text-center primary_clr font-semibold">
                Sansa Stark, CEO - GOT
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className="box_below_Carousal py-5 px-5">
            <div className="flex justify-center box_icon_container pb-5">
              <img src={Icon1} alt="" />
            </div>
            <div className="flex justify-center">
              <h2 className="py-5 text-2xl text-black font-normal text-center">
                It was great experience !
              </h2>
              <img className="quotation_img" src={Quotation} alt="" />
            </div>
            <div className="py-12">
              <p className="text-center primary_clr">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
            <div>
              <p className="text-center primary_clr font-semibold">
                Sansa Stark, CEO - GOT
              </p>
            </div>
          </div>
          {/* 4th */}
          <div className="box_below_Carousal py-5 px-5">
            <div className="flex justify-center box_icon_container pb-5">
              <img src={Icon2} alt="" />
            </div>
            <div className="flex justify-center">
              <h2 className="py-5 text-2xl text-black font-normal text-center">
                It was great experience !
              </h2>
              <img className="quotation_img" src={Quotation} alt="" />
            </div>
            <div className="py-12">
              <p className="text-center primary_clr">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
            <div>
              <p className="text-center primary_clr font-semibold">
                Sansa Stark, CEO - GOT
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Feedbacks;
