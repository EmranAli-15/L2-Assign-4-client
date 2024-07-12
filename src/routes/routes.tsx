import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/home/Landing";
import Prime from "../layout/Prime";
import SingleProduct from "../pages/singleProduct/SingleProduct";
import SearchProducts from "../pages/searchProducts/SearchProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        errorElement: <div>no found</div>,
        children: [
            {
                path: '/',
                element: <Landing></Landing>
            },
            {
                path: '/single-product/:id',
                element: <SingleProduct></SingleProduct>
            },
            {
                path: '/search-products/:name',
                element: <SearchProducts></SearchProducts>
            }
        ]
    }
]);