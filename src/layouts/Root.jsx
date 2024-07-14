import { Outlet } from "react-router-dom";
import Navbar from "../pages/sharedPages/Navbar/Navbar";
import Footer from "../pages/sharedPages/footer/Footer";

const Root = (props) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[70vh] pb-12">
                <Outlet></Outlet>

            </div>

            <Footer></Footer>

        </div>
    )
};

export default Root;
