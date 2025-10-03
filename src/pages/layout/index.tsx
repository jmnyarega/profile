import {Outlet} from "react-router";
import Footer from "./footer";
import Navigation from "./header";

const Layout = () =>
    <>
        <Navigation/>
        <main style={{minHeight: "80vh"}}>
            <Outlet/>
        </main>
        <Footer/>
    </>

export default Layout;