import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllCategory: builder.query({
            query: () => ({
                url: '/category',
                method: 'GET'
            })
        }),

        getCategoryProducts: builder.query({
            query: (category) => ({
                url: `/category-products?category=${category}`,
                method: 'GET'
            })
        }),

    })
});

export const {
    useGetAllCategoryQuery,
    useGetCategoryProductsQuery
}: any = categoryApi;