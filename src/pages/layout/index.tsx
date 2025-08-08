import { Outlet } from "react-router";
import Navigation from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
};

export default Layout;
