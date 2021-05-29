import { UpOutlined, DownOutlined } from "@ant-design/icons";

const Records = (props) => {
  let { transaction, setTransaction } = props;
  const transactionRecords = [
    {
      id: 1,
      date: "25-12-2020",
      cardName: "Chase freedom Unlimited ®",
      item: "    Bombay Spice House",
      amount: "$ 43.51",
      rewardEarned: "6 Points",
    },
    {
      id: 2,
      date: "25-12-2020",
      cardName: "Chase freedom Unlimited ®",
      item: "    Bombay Spice House",
      amount: "$ 43.51",
      rewardEarned: "6 Points",
    },
    {
      id: 3,
      date: "25-12-2020",
      cardName: "Chase freedom Unlimited ®",
      item: "    Bombay Spice House",
      amount: "$ 43.51",
      rewardEarned: "6 Points",
    },
    {
      id: 4,
      date: "25-12-2020",
      cardName: "Chase freedom Unlimited ®",
      item: "    Bombay Spice House",
      amount: "$ 43.51",
      rewardEarned: "6 Points",
    },
    {
      id: 5,
      date: "25-12-2020",
      cardName: "Chase freedom Unlimited ®",
      item: "    Bombay Spice House",
      amount: "$ 43.51",
      rewardEarned: "6 Points",
    },
  ];

  return (
    <div className="add_card_container recent_transaction_container bg-white rounded w-full lg:px-10 xl:px-10 py-6 h-full">
      <div className="add_card_header py-2 flex justify-between px-3">
        {/* left-side */}
        <div className="flex items-center left_info w-full">
          <h4 className="primary_clr text-xs xl:text-2xl lg:text-2xl font-semibold px-2">
            Recent Transactions
          </h4>
        </div>
        {/* right side */}
        <div className="block lg:hidden xl:hidden">
          <div
            className="flex items-center left_info"
            onClick={() => {
              transaction ? setTransaction(false) : setTransaction(true);
            }}
          >
            {transaction ? (
              <UpOutlined className="text-md" />
            ) : (
              <DownOutlined className="text-md" />
            )}
          </div>
        </div>
      </div>
      {/* Desktop table  */}
      <div className="w-full px-2 hidden lg:block xl:block">
        {/* header */}
        <ul className="flex py-2">
          <li className="w-2/12 primary_clr font-semibold">Date</li>
          <li className="w-3/12 primary_clr font-semibold">Card Name</li>
          <li className="w-3/12 primary_clr font-semibold">Item</li>
          <li className="w-2/12 primary_clr font-semibold">Amount</li>
          <li className="w-2/12 primary_clr font-semibold">Reward Earned</li>
        </ul>
        {/* body */}
        {transactionRecords?.map((single, index) => (
          <ul className="flex py-2 border-t border-color-gray-600" key={index}>
            <li className="w-2/12 primary_clr">{single?.date}</li>
            <li className="w-3/12 primary_clr">{single?.cardName}</li>
            <li className="w-3/12 primary_clr">{single?.item}</li>
            <li className="w-2/12 primary_clr">{single?.amount}</li>
            <li className="w-2/12 text-green-600">{single?.rewardEarned}</li>
          </ul>
        ))}
      </div>
      {/* responsive Table */}
      {transaction && (
        <div className="block lg:hidden xl:hidden">
          {transactionRecords?.map((single, index) => (
            <ul className="flex py-2 border-t border-color-gray-600 w-full px-2">
              <li className="w-3/12 primary_clr text-sm">
                {single?.rewardEarned}
              </li>
              <ul className="w-5/12">
                <li className=" primary_clr text-sm">{single?.cardName}</li>
                <li className="primary_clr text-sm">{single?.item}</li>
              </ul>
              <ul className="w-4/12 text-right">
                <li className=" primary_clr text-sm">{single?.date}</li>
                <li className="primary_clr text-sm">{single?.amount}</li>
              </ul>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};
export default Records;
