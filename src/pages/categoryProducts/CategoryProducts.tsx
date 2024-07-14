import { useParams } from "react-router-dom";
import { useGetCategoryProductsQuery } from "../../redux/features/category/categoryApi";
import ProductCard from "../home/products/ProductCard";


type TProducts = {
    _id: string
    title: string;
    description: string;
    rating: number;
    price: number;
    quantity: number;
    image: string;
}

const CategoryProducts = () => {

    const { category } = useParams();

    const { data, isLoading } = useGetCategoryProductsQuery(category)

    let content
    if (isLoading) {
        content = <h1>Loading...</h1>
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
        }else{
            content = <h1 className="mt-5 text-center md:text-4xl text-2xl font-semibold text-[#597D35]">No Products Found</h1>
        }
    }

    return (
        <div className="max-w-7xl mx-auto my-20">
            {content}
        </div>
    );
};

export default CategoryProducts;