import {Outlet} from "react-router";
import Navigation from "../header";
import Footer from "../footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;
