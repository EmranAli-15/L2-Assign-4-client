import { baseApi } from "../../api/baseApi";
import { filteredProducts, productsList, setProductListNull, setProducts } from "./productsSlice";

export const productsApi = baseApi.injectEndpoints({
    tagType: ["productUpdate"],

    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (page) => ({
                url: `/product?page=${page}`,
                method: 'GET'
            }),
            providesTags:['productUpdate'],

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                dispatch(setProducts(result.data));
                dispatch(productsList(result.data));
            },
        }),

        getAllProductsByPost: builder.mutation({
            query: (page) => ({
                url: `/product?page=${page}`,
                method: 'GET'
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                dispatch(setProducts(result.data));
            },
        }),

        getProductsByFilter: builder.mutation({
            query: (amount) => ({
                url: `/product-filter?amount=${amount}`,
                method: 'GET'
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                dispatch(filteredProducts(result.data));
            },
        }),

        getProductsActionsPost: builder.mutation({
            query: (page) => ({
                url: `/product?page=${page}`,
                method: 'GET'
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                dispatch(productsList(result.data));
            },
        }),

        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'GET'
            })
        }),

        searchProduct: builder.query({
            query: (name) => ({
                url: `/search-products?searchItem=${name}`,
                method: 'GET'
            })
        }),

        updateProduct: builder.mutation({
            query: ({ data, id }) => {
                return ({
                    url: `/product-update/${id}`,
                    body: data,
                    method: 'PATCH'
                })
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                dispatch(setProductListNull(null))
            },
            invalidatesTags:["productUpdate"],
        }),
    })
});

export const {
    useGetAllProductsQuery,
    useGetAllProductsByPostMutation,
    useGetProductsActionsPostMutation,
    useGetProductsByFilterMutation,
    useGetSingleProductQuery,
    useSearchProductQuery,
    useUpdateProductMutation
}: any = productsApi;