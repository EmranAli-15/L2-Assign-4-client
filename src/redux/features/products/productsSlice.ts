import { createSlice } from "@reduxjs/toolkit";

type TProducts = {
    products: any
}

const initialState: TProducts = {
    products: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload.data;
            const added = [...state.products, ...products]
            state.products = added;
        }
    }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;