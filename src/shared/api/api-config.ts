import {
    BaseQueryApi,
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { redirect } from "react-router-dom";
import { QueryReturnValue } from "shared/api/types.ts";

export const providesList = <R extends { id: string | number }[], T extends string>(
    resultsWithIds: R | undefined,
    tagType: T
) => (resultsWithIds
        ? [
            ...resultsWithIds.map(({ id }) => ({
                type: tagType,
                id,
            })),
        ]
        : [tagType]);

export const baseQuery = fetchBaseQuery({
    baseUrl: "https://delivery-food-db-default-rtdb.firebaseio.com",
    paramsSerializer: params => {
        const accessToken = localStorage.getItem("access_token");

        return Object.entries({ ...params, auth: accessToken })
            .map(([key, value]) => `${key}=${encodeURIComponent(value || "")}`)
            .join("&");
    },
});

export const tokenBaseQuery = fetchBaseQuery({
    baseUrl: "https://securetoken.googleapis.com/v1/token",
    method: "POST",
});

const reauth = async (
    result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: {},
    // * Пришлось добавить этот параметр, так как при загрузке приложения делается запрос на данные пользователя
    // * И, если токен устарел, то этот запрос кидает 400 код, хотя остальные кидают 401
    // * Пришлось решить это таким образом
    auth?: boolean
) => {
    if (result.error && ((auth && result.error.status === 400) || (!auth && result.error.status === 401))) {
        const refreshToken = localStorage.getItem("refresh_token");

        // * отправляем запрос на refresh token, чтобы получить новый access токен
        const refreshResult = await tokenBaseQuery(
            {
                url: "",
                params: {
                    key: import.meta.env.VITE_API_KEY,
                },
                body: {
                    grant_type: "refresh_token",
                    refresh_token: refreshToken,
                },
            },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            const accessToken = (refreshResult.data as any).id_token;
            localStorage.setItem("access_token", accessToken);

            if (!auth) {
                result = await baseQuery(args, api, extraOptions);
            } else {
                redirect("/");
            }
        } else {
            redirect("/");
            localStorage.removeItem("access_token");
        }
    }
    return result;
};

export const authBaseQuery = fetchBaseQuery({
    baseUrl: "https://identitytoolkit.googleapis.com/v1/",
    paramsSerializer: params => Object.entries({ ...params, key: import.meta.env.VITE_API_KEY })
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&"),
});

export const authBaseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    const result = await authBaseQuery(args, api, extraOptions);

    return reauth(result, args, api, extraOptions, true);
};

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    const result = await baseQuery(args, api, extraOptions);

    return reauth(result, args, api, extraOptions);
};
