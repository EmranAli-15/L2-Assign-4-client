import { FaStar, FaStarHalf } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

type TProducts = {
    id: string
    title: string;
    description: string;
    rating: number;
    price: number;
    quantity: number;
    image: string;
}


const ProductCard = ({ id, title, rating, price, image }: TProducts) => {

    return (
        <div>
            <div className="card bg-base-100 w-44 md:w-72 shadow-xl mt-5  mx-2 md:mx-0">
                <NavLink to={`/single-product/${id}`}>
                    <figure>
                        <img
                            className="md:h-[200px] w-full"
                            src={image}
                            alt={title} />
                    </figure>
                </NavLink>
                <div className="card-body -ml-3 md:-ml-2">
                    <h2 className="hidden md:block card-title text-[20px] -mt-3 text-[#597D35]">{title.length > 24 ? <p>{title.slice(0, 24)}..</p> : title}</h2>
                    <h2 className="md:hidden card-title text-[16px] -mt-5 text-[#597D35]">{title.length > 13 ? <p>{title.slice(0, 13)}..</p> : title}</h2>


                    <h3 className="flex items-center mt-2 -ml-2">
                        <TbCurrencyTaka className="text-red-500 text-[20px] md:text-3xl"></TbCurrencyTaka>
                        <p className="font-semibold text-[16px]  md:text-[20px]">{price}</p>
                    </h3>

                    <div className="flex justify-between items-center md:mt-2">
                        <div className="text-[12px] md:text-[15px]">
                            <Rating
                                readonly
                                placeholderRating={rating}
                                emptySymbol={<FaStarHalf className='text-transparent'></FaStarHalf>}
                                placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                                fullSymbol={<FaStar className="bg-gray-400"></FaStar>}
                            />
                        </div>

                        <div className="card-actions justify-end">
                            <button>
                                <BsCart3 className="text-[18px] md:text-[25px]"></BsCart3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="md:hidden card bg-base-100 w-44 shadow-xl mt-2 mx-2">
                <figure>
                    <img
                        className="h-[150px] w-full"
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body -ml-5">
                    <h2 className="card-title text-[18px] -mt-3 text-[#597D35]">{title.length > 14 ? <p>{title.slice(0, 14)}..</p> : title}</h2>


                    <h3 className="flex items-center mt-3 -ml-2">
                        <TbCurrencyTaka size={24} className="text-red-500"></TbCurrencyTaka>
                        <p className="font-semibold text-[16px]">{price}</p>
                    </h3>

                    <div className="flex justify-between">
                        <div>
                            <Rating
                                readonly
                                placeholderRating={rating}
                                emptySymbol={<FaStarHalf className='text-transparent'></FaStarHalf>}
                                placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                        </div>

                        <div className="card-actions justify-end">
                            <button>
                                <BsCart3 size={20}></BsCart3>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProductCard;