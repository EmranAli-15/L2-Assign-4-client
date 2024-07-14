import { TbCurrencyTaka } from "react-icons/tb";
import { useAppSelector } from "../../redux/hooks";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {

    const { products } = useAppSelector(state => state.cart);
    const navigate = useNavigate();

    const buyNow = (id: string, quantity: string) => {
        const data = { id, quantity }
        navigate('/buyNow', {state: data});
    }

    return (
        <div className="max-w-7xl mx-auto my-10">

            <div className="overflow-x-auto whitespace-nowrap overflow-hidden">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    </thead>
                    <tbody>
                        {
                            products.map(item => <tr key={item.id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-14 w-14">
                                                <img
                                                    src={item.image}
                                                    alt={item.title} />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex items-center">
                                        <TbCurrencyTaka className="text-red-500 size-6"></TbCurrencyTaka>
                                        <p className="text-lg font-semibold">{item.price}</p>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex items-center gap-x-3">
                                        <p className="text-lg font-semibold">Quantity :</p>
                                        <p className="text-lg font-semibold">
                                            {
                                                item.quantity
                                            }
                                        </p>
                                    </div>
                                </td>

                                <td>
                                    <button onClick={() => buyNow(item.id, item.quantity)} className="btn btn-ghost btn-xs hover:bg-transparent text-[#597D35]"><BsCart4 size={24}></BsCart4></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddToCart;