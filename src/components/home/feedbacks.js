import Carousel from "react-multi-carousel";
import Icon1 from "../../assets/images/Mask-Group.png";
import Icon2 from "../../assets/images/Mask-Group2.png";
import Quotation from "../../assets/images/Group.png";

const Feedbacks = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      //   breakpoint: { max: 3000, min: 1024000 },
      //   items: 5,
      breakpoint: { max: 1000, min: 464 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="feedback_container">
      <div className="container mx-auto py-12">
        {/* title */}
        <div className="text-center text-3xl primary_clr py-6">
          What Our Client Say
        </div>
        {/* profiles */}
        <Carousel responsive={responsive}>
          <div>
            <img src={Icon1} alt="" />
          </div>
          <div>
            <img src={Icon2} alt="" />
          </div>
          <div>
            {" "}
            <img src={Icon1} alt="" />
          </div>
          <div>
            <img src={Icon2} alt="" />
          </div>
        </Carousel>
        {/* box */}
        <div className="flex justify-center">
          <div className="box_below_Carousal py-5 px-5">
            <div className="flex justify-center">
              <h2 className="py-5 text-2xl text-black font-normal">
                It was great experience !
              </h2>
              <img src={Quotation} alt="" />
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
              <p className="text-center primary_clr font-semibold">Sansa Stark, CEO - GOT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedbacks;
