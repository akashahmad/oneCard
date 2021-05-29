import { useState, useEffect } from "react";
import DashboardComponent from "../../components/dashboard";

const Dashboard = () => {
  const [dashboardSideNav, setDashboardSideNav] = useState(false);
  const [recomendation, setRecomendation] = useState(true);
  const [missedRewards, setMissedRewards] = useState(true);
  const [transaction, setTransaction] = useState(true);
  let screen = window.screen.width;
  useEffect(() => {
    if (screen <= 991) {
      setRecomendation(false);
      setMissedRewards(false);
      setTransaction(false);
    }
  }, [screen]);

  return (
    <>
      <DashboardComponent
        setRecomendation={setRecomendation}
        setMissedRewards={setMissedRewards}
        setTransaction={setTransaction}
        recomendation={recomendation}
        missedRewards={missedRewards}
        transaction={transaction}

        dashboardSideNav={dashboardSideNav}
        setDashboardSideNav={setDashboardSideNav}
      />
    </>
  );
};
export default Dashboard;
