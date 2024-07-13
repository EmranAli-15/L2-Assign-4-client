import { createSlice } from "@reduxjs/toolkit";

type TProducts = {
    products: any,
    productsList: any
}

const initialState: TProducts = {
    products: [],
    productsList: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload.data;
            const added = [...state.products, ...products]
            state.products = added;
        },
        filteredProducts: (state, action) => {
            state.products = action.payload.data;
        },
        productsList: (state, action) => {
            const products = action.payload.data;
            const added = [...state.productsList, ...products]
            state.productsList = added;
        },
        setProductListNull: (state, action) => {
            action
            state.productsList = [];
        }
    }
});

export const { setProducts, filteredProducts, productsList, setProductListNull } = productSlice.actions;
export default productSlice.reducer;