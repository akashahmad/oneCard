import Carousel from "react-multi-carousel";
import InfoIcon from "../../assets/images/info.png";
import AddIcon from "../../assets/images/uil_create-dashboard.png";
import FreedomCard from "../../assets/images/chase-freedom-0829171.png";
import Discover from "../../assets/images/discover.png";
import Sapphire from "../../assets/images/sapphire.png";
import Visa from "../../assets/images/visa.png";

const AddCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      //   breakpoint: { max: 1000, min: 464 },
      //   items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="add_card_container bg-white rounded w-full lg:px-10 xl:px-10 py-6">
      {/* header */}
      <div className="add_card_header py-2 flex justify-between">
        {/* left-side */}
        <div className="flex items-center left_info justify-center w-full lg:w-auto xl:w-auto lg:justify-start xl:justify-start">
          <h4 className="primary_clr text-2xl font-semibold px-2">CARDS</h4>
          <img src={InfoIcon} alt="" />
        </div>
        {/* right side */}
        <div className="hidden lg:block xl:block">
          <div className="flex items-center left_info">
            <img src={AddIcon} alt="" />
            <h4 className="primary_clr text-2xl font-semibold px-2">
              ADD CARD
            </h4>
          </div>
        </div>
      </div>
      {/* cards lists */}
      <Carousel responsive={responsive}>
        <div>
          <img src={FreedomCard} alt="" />
        </div>
        <div>
          <img src={Discover} alt="" />
        </div>
        <div>
          <img src={Sapphire} alt="" />
        </div>
        <div>
          <img src={Visa} alt="" />
        </div>
      </Carousel>
    </div>
  );
};
export default AddCard;
