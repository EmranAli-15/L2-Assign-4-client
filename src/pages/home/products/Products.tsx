import { useEffect, useState } from "react";
import { useGetAllProductsByPostMutation, useGetAllProductsQuery } from "../../../redux/features/products/productsApi";
import { setProducts } from "../../../redux/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const Products = () => {
  const { products } = useAppSelector(state => state.products);

  const dispatch = useAppDispatch();

  const { } = useGetAllProductsQuery(1);



  // dispatch(setProducts(data));

  const [p, sp] = useState(2)

  const [getAllProductsByPost] = useGetAllProductsByPostMutation()

  const fn = async () => {
    sp(p + 1);
    const gg = await getAllProductsByPost(p);
    dispatch(setProducts(gg.data));
  };


  console.log(products, p);


  return (
    <div className="max-w-7xl mx-auto">
      <h1>This is Products component!</h1>
      <div>
        {
          products.map(item => <p>{item.title}</p>)
        }
      </div>
      <button onClick={fn}>
        click
      </button>
    </div>
  );
};

export default Products;