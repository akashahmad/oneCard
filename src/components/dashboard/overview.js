import InfoIcon from "../../assets/images/info.png";
import GasStation from "../../assets/images/gas-station.png";
import Groceries from "../../assets/images/Vector.png";
import Shopping from "../../assets/images/shopping.png";
import Dinning from "../../assets/images/Dinning.png";
import Travel from "../../assets/images/airplane.png";

const Overview = () => {
  const overviewLists = [
    {
      id: 1,
      image: GasStation,
      name: "Gas",
      percent: "1.5% cashback",
      shortDescription: "Chase freedom unlimited ®	",
      backgroundColor: "linear-gradient(180deg, #E5F5FA 0%, #A9EBFF 100%)",
    },
    {
      id: 2,
      image: Groceries,
      name: "Groceries",
      percent: "1.5% cashback",
      shortDescription: "Chase freedom unlimited ®	",
      backgroundColor: "linear-gradient(180deg, #EEFCEF 0%, #C7FFCB 100%)",
    },
    {
      id: 3,
      image: Shopping,
      name: "Shopping",
      percent: "1.5% cashback",
      shortDescription: "Chase freedom unlimited ®	",
      backgroundColor: " linear-gradient(180deg, #FFFBEF 0%, #FBEECF 100%)",
    },
    {
      id: 4,
      image: Dinning,
      name: "Dining",
      percent: "1.5% cashback",
      shortDescription: "Chase freedom unlimited ®	",
      backgroundColor: "linear-gradient(180deg, #F0F4FF 0%, #C3D3FF 100%)",
    },
    {
      id: 5,
      image: Travel,
      name: "Travel",
      percent: "2x Points",
      shortDescription: "Chase freedom unlimited ®	",
      backgroundColor: "linear-gradient(180deg, #EBFFF9 0%, #B6F5DF 100%)",
    },
  ];

  return (
    <div className="add_card_container overview_section_container bg-white rounded w-full lg:px-10 xl:px-10 py-6 h-full">
      {/* header */}
      <div className="add_card_header py-2 flex justify-between">
        {/* left-side */}
        <div className="flex items-center left_info">
          <h4 className="primary_clr text-2xl font-semibold px-2">Overview</h4>
          <img src={InfoIcon} alt="" />
        </div>
      </div>
      {/* Overview lists */}
      <div className="w-full py-3">
        {/* 1st box */}
        <div className="flex flex-col lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between px-2 lg:flex-wrap xl:flex-wrap">
          {overviewLists?.map((single, index) => (
            <div
              className="w-full single_overview_box py-3 rounded flex shadow my-6 px-2"
              key={index}
              style={{ background: `${single?.backgroundColor}` }}
            >
              {/* left-side */}
              <div className="w-2/12 flex justify-center items-center">
                <img src={single?.image} alt="" />
              </div>
              {/* right-side */}
              <div className="w-10/12">
                <div className="w-full flex justify-between px-2">
                  <h2 className="primary_clr text-lg font-semibold">
                    {single?.name}
                  </h2>
                  <h2 className="primary_clr text-sm font-normal">
                    {single?.percent}
                  </h2>
                </div>
                <div className="w-full px-2 py-2">
                  <h2 className="primary_clr text-sm font-normal">
                    {single?.shortDescription}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Overview;
