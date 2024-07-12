import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/productsApi";
import Rating from "react-rating";
import { FaStar, FaStarHalf, FaPlus, FaMinus } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { useState } from "react";
import SingleProductLoader from "../../loader/SingleProductLoader";

const SingleProduct = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleProductQuery(id);

    const [num, setNum] = useState(1);
    const handleQuantity = (type: string) => {
        if (type == 'dec' && num > 1) {
            setNum(prev => prev - 1);
        }
        if (type == 'inc') {
            setNum(prev => prev + 1);
        }
    }

    let content;

    if (isLoading) {
        content = <SingleProductLoader></SingleProductLoader>
    }

    if (!isLoading && data) {
        const { image, title, description, rating, quantity, price, _id, category } = data.data;
        content = <>
            <div className="md:flex justify-center">

                <div className="md:w-[50%]">
                    <img className="w-[90%] max-h-[500px] rounded mx-auto" src={image} alt={title} />
                </div>

                <div className="mt-5 md:mt-0 mx-auto md:w-[50%] w-[90%] flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-serif md:my-5 font-semibold text-[#597D35]">{title}</h1>
                        <h1 className="text-gray-400 text-[16px] md:text-xl">{description}</h1>
                    </div>


                    <div>
                        <h3 className="flex items-center mt-2 -ml-2">
                            <TbCurrencyTaka className="text-red-500 text-[30px] md:text-5xl"></TbCurrencyTaka>
                            <p className="font-semibold text-[25px]  md:text-3xl">{price}</p>
                        </h3>

                        <div className="flex items-center gap-x-20 mt-10">
                            <div className="flex items-center">
                                <button onClick={() => handleQuantity('dec')} className="w-[30px] h-[45px] bg-[#597D35] text-white flex items-center justify-center"><FaMinus></FaMinus></button>
                                <div className="w-[65px] h-[45px] text-xl font-semibold shadow-xl border-l border-r flex items-center justify-center">{num}</div>
                                <button onClick={() => handleQuantity('inc')} className="w-[30px] h-[45px] bg-[#597D35] text-white flex items-center justify-center"><FaPlus></FaPlus></button>
                            </div>
                            <div>
                                <div className="btn hover:bg-[#e2b457] h-[45px] bg-[#597D35] text-white flex items-center justify-center">
                                    Add to cart
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-5 md:mt-0">
                        <h3 className="text-gray-600 text-xl">Category : {category}</h3>
                        <Rating
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<FaStarHalf className='text-transparent'></FaStarHalf>}
                            placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                            fullSymbol={<FaStar className="bg-gray-400"></FaStar>}
                        />
                    </div>

                </div>

            </div>
        </>
    }

    return (
        <div className="max-w-7xl mx-auto my-20">
            {
                content
            }
        </div>
    );
};

export default SingleProduct;