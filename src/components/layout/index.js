import Header from "../header/header";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
export default Layout;
