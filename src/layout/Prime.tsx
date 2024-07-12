import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/navbar/Navbar";

const Prime = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-340px)]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Prime;