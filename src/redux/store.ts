import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi';
import productsSlice from './features/products/productsSlice';
import cartSlice from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        products: productsSlice,
        productList: productsSlice,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;