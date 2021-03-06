import InfoIcon from "../../assets/images/info.png";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import ShareIcon from "../../assets/images/link.png";
import { Tooltip } from "antd";

const MissedRewards = (props) => {
  let { missedRewards, setMissedRewards } = props;
  return (
    <div className="add_card_container recent_transaction_container bg-white rounded w-full lg:px-4 xl:px-4 py-4 h-full px-2">
      {/* header */}
      <div className="add_card_header py-2 flex justify-between">
        {/* left-side */}
        <div className="flex items-center left_info cursor-pointer">
          <h4 className="primary_clr fs_15 font-semibold pr-2 cursor-pointer">
            Missed Reward ($)
          </h4>
          <Tooltip placement="bottom" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor">
            <img src={InfoIcon} alt="" />
          </Tooltip>
        </div>
        {/* right side */}
        <div className="block lg:hidden xl:hidden">
          <div
            className="flex items-center left_info"
            onClick={() => {
              missedRewards ? setMissedRewards(false) : setMissedRewards(true);
            }}
          >
            {missedRewards ? (
              <UpOutlined className="text-md" />
            ) : (
              <DownOutlined className="text-md" />
            )}
          </div>
        </div>
      </div>
      {missedRewards && (
        <div>
          <div className="w-full bg-red-300 my-3">
            <div className="bg-red-500 py-2 w-4/12">
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
            <h4 className="primary_clr fs_15 font-semibold pr-2 cursor-pointer">Share:</h4>
          </div>
          <div className="w-full bg-red-300 my-2 flex justify-between items-center">
            <div className="px-2">
              <p className="text-1xl">www.google.com</p>
            </div>
            <div className="flex justify-end">
              <button className="primary_bg_dark_clr py-2 flex justify-center text-base text-white items-center px-5 text-sm">
                <img src={ShareIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MissedRewards;
