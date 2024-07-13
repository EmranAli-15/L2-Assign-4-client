import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        buyProduct: builder.mutation({
            query: (data) => ({
                url: '/product-buy',
                body: data,
                method: 'POST'
            })
        })
    })
});

export const {
    useBuyProductMutation
}: any = cartApi;