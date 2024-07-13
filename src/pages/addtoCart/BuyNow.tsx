import { useLocation } from "react-router-dom";
import { useBuyProductMutation } from "../../redux/features/cart/cartApi";
import Swal from "sweetalert2";

const BuyNow = () => {

    const [buyProduct] = useBuyProductMutation()

    const location = useLocation();
    const { id, quantity } = location.state;

    const confirmBuy = async () => {
        const data = { id, quantity }
        const result = await buyProduct(data);

        if (result?.data?.success == true) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "You bought a product",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (result.error.data.success == false) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Insufficient Quantity",
                showConfirmButton: false,
                timer: 3000
            });
        }
    }
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="md:w-[60%] mx-auto border shadow-xl rounded p-10">
                <div className="md:flex justify-between gap-x-3">
                    <div className="md:w-[50%]">
                        <label>name</label><br />
                        <input placeholder="your name" className="h-12 border outline-none rounded px-2 w-full" type="text" name="title" id="" />
                    </div>
                    <div className="md:w-[50%]">
                        <label>Phone</label><br />
                        <input placeholder="your phone" className="h-12 border outline-none rounded px-2 w-full" type="number" name="price" id="" />
                    </div>
                </div>
                <div className="md:flex justify-between gap-x-3">
                    <div className="md:w-[50%]">
                        <label>Email</label><br />
                        <input placeholder="your email" className="h-12 border outline-none rounded px-2 w-full" type="text" name="title" id="" />
                    </div>
                    <div className="md:w-[50%]">
                        <label>Location</label><br />
                        <input placeholder="your location" className="h-12 border outline-none rounded px-2 w-full" type="text" name="price" id="" />
                    </div>
                </div>

                <div className="mt-5 flex justify-center">
                    <button onClick={confirmBuy} className="btn bg-[#597D35] text-white">Confirm Buy</button>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;