import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth, providesList } from "shared/api";
import { productsSlice } from "entities/product";
import { IProduct } from "../model/types.ts";
import { IGetProductsRequest, ITotalResponse } from "./types.ts";
import { PRODUCTS_URL } from "./consts.ts";

const handleObject = (products: IProduct[]) => Object.values(products);

export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getAll: builder.query<IProduct[], IGetProductsRequest>({
            query: ({ startAt, endAt }) => ({
                url: `${PRODUCTS_URL}/data.json`,
                method: "GET",
                params: {
                    orderBy: "\"id\"",
                    startAt,
                    endAt,
                },
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;

                    dispatch(productsSlice.actions.setProducts(handleObject(result.data)));
                } catch (e) {
                    console.log(e);
                }
            },
            providesTags: (result) => {
                const products = result ? handleObject(result) : [];
                return providesList(products, "products");
            },
        }),
        getTotal: builder.query<ITotalResponse, void>({
            query: () => ({
                url: `${PRODUCTS_URL}/total.json`,
                method: "GET",
                params: {},
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;

                    dispatch(productsSlice.actions.setTotal(result.data));
                } catch (e) {
                    console.log(e);
                }
            },
        }),
    }),
});
