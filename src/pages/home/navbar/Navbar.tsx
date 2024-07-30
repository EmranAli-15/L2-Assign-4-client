import { BsSearch, BsCart3 } from "react-icons/bs";
import brandLogo from '../../../assets/brandLogo.png'
import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { RiUserSettingsFill } from "react-icons/ri";

const Navbar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();

        if (!search) {
            return;
        }

        navigate(`/search-products/${search}`);
    }

    const { products } = useAppSelector(state => state.cart);


    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
                <button className="navbar-start">
                    <NavLink to="/">
                        <img className="h-[40px] w-[80px] md:h-[60px] md:w-[120px]" src={brandLogo} alt="" />
                    </NavLink>
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
                    <NavLink to="/cart">
                        <button className="relative">
                            <div className="badge bg-[#597D35] text-white font-semibold absolute translate-x-1/2 -translate-y-2">{products.length}</div>
                            <BsCart3 className="size-5 md:size-7"></BsCart3>
                        </button>
                    </NavLink>
                    <button>
                        <NavLink to="/product-list">
                            <div className="flex items-center justify-center mb-1 rounded-full border border-[#597D35] p-1">
                                <RiUserSettingsFill className="text-[#e2b457] size-5 md:size-9"></RiUserSettingsFill>
                            </div>
                        </NavLink>
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