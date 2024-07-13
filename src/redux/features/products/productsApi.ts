import { baseApi } from "../../api/baseApi";
import { filteredProducts, productsList, setProductListNull, setProducts } from "./productsSlice";

export const productsApi = baseApi.injectEndpoints({
    tagTypes: ["productUpdate", "productAdd"],

    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (data) => ({
                url: '/product',
                body: data,
                method: 'POST'
            }),
            invalidatesTags: ['productAdd'],
        }),

        getAllProducts: builder.query({
            query: (page) => ({
                url: `/product?page=${page}`,
                method: 'GET'
            }),
            providesTags: ['productUpdate'],

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
            invalidatesTags: ['productUpdate', 'productAdd'],
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
            invalidatesTags: ["productUpdate"],
        }),

        deleteProduct: builder.mutation({
            query: (id) => {
                return ({
                    url: `/product-delete/${id}`,
                    method: 'DELETE'
                })
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                dispatch(setProductListNull(null))
            },
            invalidatesTags: ["productUpdate"],
        }),
    })
});

export const {
    useCreateProductMutation,
    useGetAllProductsQuery,
    useGetAllProductsByPostMutation,
    useGetProductsActionsPostMutation,
    useGetProductsByFilterMutation,
    useGetSingleProductQuery,
    useSearchProductQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
}: any = productsApi;