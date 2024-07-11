import { BsSearch, BsCart3 } from "react-icons/bs";
import brandLogo from '../../../assets/brandLogo.png'
import { FormEvent, useState } from "react";

const Navbar = () => {

    const [search, setSearch] = useState("");

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();

        console.log(search);
    }


    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
                <button className="navbar-start">
                    <img className="h-[40px] w-[80px] md:h-[60px] md:w-[120px]" src={brandLogo} alt="" />
                </button>


                {/* This search field will work for the large devices */}
                <div className="hidden md:block">
                    <form onSubmit={handleSearch} className="input input-bordered flex items-center md:w-[500px]">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
                        <button>
                            <BsSearch></BsSearch>
                        </button>
                    </form>
                </div>

                <div className="navbar-end flex items-center gap-x-12">
                    <button className="relative">
                        <div className="badge bg-green-500 text-white font-semibold absolute translate-x-1/2 -translate-y-2">7</div>
                        <BsCart3 className="size-5 md:size-7"></BsCart3>
                    </button>
                    <button>
                        <div className="avatar">
                            <div className="w-10 md:w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>


            {/* This search field will work for the mobile devices */}
            <div className="md:hidden w-[90%] mx-auto">
                <form onSubmit={handleSearch} className="input input-bordered h-10 flex items-center justify-center">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
                    <button>
                        <BsSearch></BsSearch>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Navbar;