import CardImg from "../../assets/images/img11.png";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

const Recomendations = (props) => {
  let { recomendation, setRecomendation } = props;
  return (
    <div className="add_card_container recent_transaction_container bg-white rounded w-full lg:px-2 xl:px-2 py-6 h-full">
      {/* header */}
      <div className="add_card_header py-2 flex justify-between px-3">
        {/* left-side */}
        <div className="flex items-center left_info">
          <h4 className="primary_clr fs_15 font-semibold pr-2">
            Recomendations
          </h4>
        </div>
        {/* right side */}
        <div className="block lg:hidden xl:hidden">
          <div
            className="flex items-center left_info"
            onClick={() => {
              recomendation ? setRecomendation(false) : setRecomendation(true);
            }}
          >
            {recomendation ? (
              <UpOutlined className="text-md" />
            ) : (
              <DownOutlined className="text-md" />
            )}
          </div>
        </div>
      </div>
      {recomendation && (
        <div>
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
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Recomendations;
