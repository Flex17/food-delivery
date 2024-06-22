import { IProduct, IProductsState } from "./types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProductsState = {
    total: 0,
    products: [],
    startAt: 1,
    endAt: 8,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    selectors: {
        products: state => state.products,
        total: state => state.total,
    },
    reducers: {
        setProducts(state, action: PayloadAction<IProduct[]>) {
            state.products = [...state.products, ...action.payload];
        },
        setTotal(state, action: PayloadAction<number>) {
            state.total = action.payload;
        },
        increaseStartAt(state, action: PayloadAction<number>) {
            state.startAt += action.payload;
        },
        increaseEndAt(state, action: PayloadAction<number>) {
            state.endAt += action.payload;
        },
    },
});

export default productsSlice.reducer;
