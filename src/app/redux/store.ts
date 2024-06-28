import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSlice } from "entities/auth/model/auth-slice.ts";
import { authAPI } from "entities/auth/api/api.ts";
import { productsAPI, productsSlice } from "entities/product";
import { cartAPI } from "entities/cart/api/api.ts";
import { ordersAPI } from "entities/order/api/api.ts";

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
    [productsSlice.name]: productsSlice.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [cartAPI.reducerPath]: cartAPI.reducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [ordersAPI.reducerPath]: ordersAPI.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        authAPI.middleware,
        cartAPI.middleware,
        productsAPI.middleware,
        ordersAPI.middleware,
    ]),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
