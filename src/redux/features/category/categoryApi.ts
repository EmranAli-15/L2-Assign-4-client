import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({

    tagType: ['category'],

    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (data) => ({
                url: '/category',
                body: data,
                method: 'POST'
            }),
            invalidatesTags: ['category']
        }),

        getAllCategory: builder.query({
            query: () => ({
                url: '/category',
                method: 'GET'
            }),
            providesTags: ['category']
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
    useCreateCategoryMutation,
    useGetAllCategoryQuery,
    useGetCategoryProductsQuery
}: any = categoryApi;