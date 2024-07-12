import { useState } from "react";
import { useGetAllProductsByPostMutation, useGetAllProductsQuery, useGetProductsByFilterMutation } from "../../../redux/features/products/productsApi";
import { setProducts } from "../../../redux/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ProductCard from "./ProductCard";
import { FaFilter } from "react-icons/fa";

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

  const { } = useGetAllProductsQuery(1);

  const [page, setPage] = useState(2)

  const [getAllProductsByPost] = useGetAllProductsByPostMutation();
  const [getProductsByFilter] = useGetProductsByFilterMutation();

  const getMoreProducts = async () => {
    setPage(page + 1);
    getAllProductsByPost(page);
  };

  const getFilteredProducts = (amount: string) => {
    getProductsByFilter(amount);
  }


  return (
    <div className="max-w-7xl mx-auto">

      <div className="flex items-center justify-between">
        <h1 className="ml-2 md:ml-0 text-3xl md:text-4xl font-serif md:my-5 font-semibold text-[#597D35]">All Products</h1>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#597D35] hover:bg-[#e2b457] text-white text-lg">Filter <FaFilter size={16}></FaFilter></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <button onClick={() => getFilteredProducts('lessThenHundred')}>Less 100 TK</button>
            </li>
            <li>
              <button onClick={() => getFilteredProducts('moreThenHundred')}>More 100 TK</button>
            </li>
          </ul>
        </div>
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
          <button className="btn hover:bg-[#e2b457] bg-[#597D35] text-white font-semibold px-6 py-3 rounded-md" onClick={getMoreProducts}>
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;