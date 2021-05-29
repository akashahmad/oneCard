import Header from "../header/header";
import Footer from "../footer/footer";
import {withRouter} from 'react-router-dom'

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default withRouter(Layout);
