import { useState } from "react";
import HomeComponent from "../../components/home";
import Layout from "../../components/layout";

const Home = () => {
  const [homeSideNav, setHomeSideNav] = useState(false);
  return (
    <Layout setHomeSideNav={setHomeSideNav}>
      <HomeComponent
        homeSideNav={homeSideNav}      
        setHomeSideNav={setHomeSideNav}
      />
    </Layout>
  );
};
export default Home;
