import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";

const MainLayout = () => {
    return (
        <div>
            <TopNavbar />
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;