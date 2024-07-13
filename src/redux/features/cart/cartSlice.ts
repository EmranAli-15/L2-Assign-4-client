import { createSlice } from "@reduxjs/toolkit";

type TData = {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: string
};

type TInitialState = {
    products: TData[];
}

const initialState: TInitialState = {
    products: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exist = state.products.find(item => item.id == action.payload.id);
            if (exist) {
                exist.quantity = exist.quantity + 1
            }
            if (!exist) {
                state.products.push({quantity:1, ...action.payload})
            };
        },
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;