import { Outlet } from "react-router-dom";
import Navbar from "../pages/sharedPages/Navbar/Navbar";

const Root = (props) => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    )
};

export default Root;
