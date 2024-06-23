import { IHistoryOrderData, IMakeOrderResponse, IOrderData } from "entities/order/api/types.ts";
import { baseQueryWithReauth, providesList } from "shared/api";
import { IAuthRequest } from "shared/types.ts";
import { createApi } from "@reduxjs/toolkit/query/react";
import { ORDERS_URL } from "entities/order/api/consts.ts";

const handleObject = (response: IOrderData[]) => {
    return Object.entries(response).map(([id, item]) => ({
        id,
        ...item,
    }));
};

export const ordersAPI = createApi({
    reducerPath: "ordersAPI",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["order"],
    endpoints: builder => ({
        getAll: builder.query<IHistoryOrderData[], IAuthRequest>({
            query: ({ localId }) => ({
                url: ORDERS_URL + "/" + localId + ".json",
                method: "GET",
                params: {},
            }),
            transformResponse: (response: IOrderData[]): IHistoryOrderData[] => {
                if (response) return handleObject(response);
                return [];
            },
            providesTags: result => {
                const data = result ? handleObject(result) : [];
                return providesList(data, "order");
            },
        }),
        makeOrder: builder.mutation<IMakeOrderResponse, IOrderData>({
            query: ({ localId, ...data }) => ({
                url: ORDERS_URL + "/" + localId + ".json",
                method: "POST",
                params: {},
                body: data,
            }),
            invalidatesTags: ["order"],
        }),
    }),
});
