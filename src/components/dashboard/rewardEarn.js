import InfoIcon from "../../assets/images/info.png";
import Chart from "react-apexcharts";
// import { COLOR_2 } from "constants/ChartConstant";

const RewardEarn = () => {
  const state = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      // colors: [COLOR_2],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };

  return (
    <div className="add_card_container recent_transaction_container bg-white rounded w-full px-2 lg:px-4 xl:px-4 py-4 h-full">
      {/* header */}
      <div className="add_card_header py-2 flex justify-between">
        {/* left-side */}
        <div className="flex items-center left_info">
          <h4 className="primary_clr text-xs xl:text-md lg:text-md font-semibold pr-2">
            Missed Reward ($)
          </h4>
          <img src={InfoIcon} alt="" />
        </div>
        {/* right side */}
        <div className="flex items-center left_info">
          <h4 className="primary_clr text-xs xl:text-md lg:text-md font-semibold px-2">
            Total Earn:<span className="font-bold">$2000</span>
          </h4>
        </div>
      </div>
      <div>
        <Chart options={state.options} series={state.series} height={150} />
      </div>
    </div>
  );
};
export default RewardEarn;
