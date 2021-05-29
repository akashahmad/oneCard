import InfoIcon from "../../assets/images/info.png";

const MissedRewards = () => {
  return (
    <div className="add_card_container recent_transaction_container bg-white rounded w-full lg:px-4 xl:px-4 py-4 h-full px-2">
      {/* header */}
      <div className="add_card_header py-2 flex justify-between">
        {/* left-side */}
        <div className="flex items-center left_info">
          <h4 className="primary_clr text-md font-semibold pr-2">
            Missed Reward ($)
          </h4>
          <img src={InfoIcon} alt="" />
        </div>
      </div>
      <div className="w-full bg-red-300 my-3">
        <div className="bg-red-500 py-4 w-4/12">
          <p className="text-white px-5">$291</p>
        </div>
      </div>
      <div className="py-2">
        <p className="text-sm">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium $291 laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis{" "}
        </p>
      </div>
      <div className="pt-5">
        <h4 className="primary_clr text-md font-semibold pr-2">Share:</h4>
      </div>
      <div className="w-full bg-red-300 my-2 flex justify-between items-center">
        <div className="px-2">
          <p>www.google.com</p>
        </div>
        <div className="flex justify-end">
          <button className="primary_bg_dark_clr py-2 flex justify-center text-base text-white items-center px-5 text-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default MissedRewards;
