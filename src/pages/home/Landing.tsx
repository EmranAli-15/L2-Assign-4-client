import Navbar from "./navbar/Navbar";
import landing from '../../assets/landing.png'
import Products from "./products/Products";

const Landing = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="flex justify-center">
                <img className="md:h-[85vh] md:w-[85vw]" src={landing} alt="Banner Image" />
            </div>

            <div className="mt-16">
                <Products></Products>
            </div>

        </div>
    );
};

export default Landing;