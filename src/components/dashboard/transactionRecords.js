const Records = () => {
  return (
    <div className="add_card_container recent_transaction_container bg-white rounded w-full lg:px-10 xl:px-10 py-6 h-full">
      <div className="add_card_header py-2 flex justify-between">
        {/* left-side */}
        <div className="flex items-center left_info w-full">
          <h4 className="primary_clr text-2xl font-semibold px-2">
            Recent Transactions
          </h4>
        </div>
      </div>
      {/* table  */}
      <div className="w-full px-2">
        {/* header */}
        <ul className="flex py-2">
          <li className="w-2/12 primary_clr font-semibold">Date</li>
          <li className="w-3/12 primary_clr font-semibold">Card Name</li>
          <li className="w-3/12 primary_clr font-semibold">Item</li>
          <li className="w-2/12 primary_clr font-semibold">Amount</li>
          <li className="w-2/12 primary_clr font-semibold">Reward Earned</li>
        </ul>
        {/* body */}
        <ul className="flex py-2 border-t border-color-gray-600">
          <li className="w-2/12 primary_clr">25-12-2020</li>
          <li className="w-3/12 primary_clr">Chase freedom Unlimited ® </li>
          <li className="w-3/12 primary_clr">Bombay Spice House</li>
          <li className="w-2/12 primary_clr">$ 43.51</li>
          <li className="w-2/12 text-green-600">6 Points</li>
        </ul>
        <ul className="flex py-2 border-t border-color-gray-600">
          <li className="w-2/12 primary_clr">25-12-2020</li>
          <li className="w-3/12 primary_clr">Chase freedom Unlimited ® </li>
          <li className="w-3/12 primary_clr">Bombay Spice House</li>
          <li className="w-2/12 primary_clr">$ 43.51</li>
          <li className="w-2/12 text-green-600">6 Points</li>
        </ul>
        <ul className="flex py-2 border-t border-color-gray-600">
          <li className="w-2/12 primary_clr">25-12-2020</li>
          <li className="w-3/12 primary_clr">Chase freedom Unlimited ® </li>
          <li className="w-3/12 primary_clr">Bombay Spice House</li>
          <li className="w-2/12 primary_clr">$ 43.51</li>
          <li className="w-2/12 text-green-600">6 Points</li>
        </ul>
        <ul className="flex py-2 border-t border-color-gray-600">
          <li className="w-2/12 primary_clr">25-12-2020</li>
          <li className="w-3/12 primary_clr">Chase freedom Unlimited ® </li>
          <li className="w-3/12 primary_clr">Bombay Spice House</li>
          <li className="w-2/12 primary_clr">$ 43.51</li>
          <li className="w-2/12 text-green-600">6 Points</li>
        </ul>
      </div>
    </div>
  );
};
export default Records;
