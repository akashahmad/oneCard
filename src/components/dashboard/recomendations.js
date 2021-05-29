import CardImg from "../../assets/images/img11.png";

const Recomendations = () => {
  return (
    <div className="add_card_container recent_transaction_container bg-white rounded w-full lg:px-2 xl:px-2 py-6 h-full">
      {/* title */}
      <div className="flex items-center left_info w-full">
        <h4 className="primary_clr text-md font-semibold px-2">
          Recommendations
        </h4>
      </div>
      <div className="flex justify-center py-10">
        <img src={CardImg} alt="" />
      </div>
      <div className="flex justify-center py-2">
        <p className="primary_clr text-center">
          Best for you because: Flexible Redemption
        </p>
      </div>
      <div className="flex justify-center py-5">
        <button className="primary_bg_dark_clr py-2 flex justify-center text-base text-white items-center px-12 text-1xl">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Recomendations;
