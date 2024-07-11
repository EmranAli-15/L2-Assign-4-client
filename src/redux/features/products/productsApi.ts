import { baseApi } from "../../api/baseApi";
import { setProducts } from "./productsSlice";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (page) => ({
                url: `/product?page=${page}`,
                method: 'GET'
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                dispatch(setProducts(result.data));
            },
        }),

        getAllProductsByPost: builder.mutation({
            query: (page) => ({
                url: `/product?page=${page}`,
                method: 'GET'
            })
        })
    })
});

export const { useGetAllProductsQuery, useGetAllProductsByPostMutation }: any = productsApi;