import Navbar from "./navbar/Navbar";
import landing from '../../assets/landing.png'

const Landing = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="flex justify-center">
                <img className="md:h-[85vh] md:w-[85vw]" src={landing} alt="Banner Image" />
            </div>

        </div>
    );
};

export default Landing;