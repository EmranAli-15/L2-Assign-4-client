import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/productsApi";

const SingleProduct = () => {

    const { id } = useParams();

    const { data, isLoading } = useGetSingleProductQuery(id);

    return (
        <div className="max-w-7xl mx-auto">
            {
                isLoading ? <p>Loading</p> : <p>{data.data.title}</p>
            }
        </div>
    );
};

export default SingleProduct;