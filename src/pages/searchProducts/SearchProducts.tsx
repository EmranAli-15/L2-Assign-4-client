import { useParams } from "react-router-dom";
import { useSearchProductQuery } from "../../redux/features/products/productsApi";
import ProductCard from "../home/products/ProductCard";
import ProductCardLoader from "../../loader/ProductCardLoader";


type TProducts = {
    _id: string
    title: string;
    description: string;
    rating: number;
    price: number;
    quantity: number;
    image: string;
}

const SearchProducts = () => {
    const { name } = useParams();
    const { data, isLoading } = useSearchProductQuery(name);

    let content;

    if (isLoading) {
        content = <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
            <ProductCardLoader></ProductCardLoader>
            <ProductCardLoader></ProductCardLoader>
            <ProductCardLoader></ProductCardLoader>
            <ProductCardLoader></ProductCardLoader>
        </div>
    };

    if (!isLoading && data) {
        if (data.data.length > 0) {
            content = <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
                {
                    data.data.map((item: TProducts) => {
                        const { _id, title, description, price, quantity, rating, image } = item;
                        return <ProductCard
                            key={_id}
                            id={_id}
                            title={title}
                            description={description}
                            price={price}
                            quantity={quantity}
                            rating={rating}
                            image={image}
                        ></ProductCard>
                    })
                }
            </div>
        } else {
            content = <h1>No Products Found</h1>
        }
    }

    return (
        <div className="max-w-7xl mx-auto">
            {
                content
            }
        </div>
    );
};

export default SearchProducts;