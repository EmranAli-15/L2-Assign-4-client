import { useState } from "react";
import { useGetAllProductsByPostMutation, useGetAllProductsQuery } from "../../../redux/features/products/productsApi";
import { setProducts } from "../../../redux/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ProductCard from "./ProductCard";

type TProducts = {
  _id: string
  title: string;
  description: string;
  rating: number;
  price: number;
  quantity: number;
  image: string;
}

const Products = () => {
  const { products } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const { } = useGetAllProductsQuery(1);

  const [page, setPage] = useState(2)

  const [getAllProductsByPost] = useGetAllProductsByPostMutation()

  const getMoreProducts = async () => {
    setPage(page + 1);
    const moreProducts = await getAllProductsByPost(page);
    dispatch(setProducts(moreProducts.data));
  };


  return (
    <div className="max-w-7xl mx-auto">

      <div>
        <h1 className="ml-2 md:ml-0 text-3xl md:text-5xl font-serif md:my-5 font-semibold text-[#597D35]">All Products</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {
          products.map((item: TProducts) => {
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


      <div className="flex justify-center my-10">
        <div className="text-center">
          <button className="bg-[#597D35] text-white font-semibold px-6 py-3 rounded-md" onClick={getMoreProducts}>
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;