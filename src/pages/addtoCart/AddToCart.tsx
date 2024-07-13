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

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <div className="overflow-x-auto">
                <table className="table">
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