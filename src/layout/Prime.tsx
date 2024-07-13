import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/navbar/Navbar";
import Footer from "../pages/footer/Footer";

const Prime = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-340px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Prime;