import { createApi } from "@reduxjs/toolkit/query/react";
import { authBaseQueryWithReauth } from "shared/api";
import { GET_USER_URL, SIGN_IN_URL, SIGN_UP_URL } from "entities/auth/api/consts.ts";
import {
    IGetUserRequest,
    IGetUserResponse,
    IRegistrationRequest,
    IRegistrationResponse,
    IUserRegistrationData,
} from "entities/auth/api/types.ts";
import { authSlice } from "entities/auth";

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: authBaseQueryWithReauth,
    endpoints: builder => ({
        registration: builder.mutation<IRegistrationResponse, IRegistrationRequest>({
            query: registrationData => ({
                url: SIGN_UP_URL,
                method: "POST",
                body: {
                    ...registrationData,
                    returnSecureToken: true,
                },
                params: {},
            }),
        }),
        authorization: builder.mutation<IRegistrationResponse, IUserRegistrationData>({
            query: authorizationData => ({
                url: SIGN_IN_URL,
                method: "POST",
                body: {
                    ...authorizationData,
                    returnSecureToken: true,
                },
                params: {},
            }),
        }),
        getUser: builder.query<IGetUserResponse, IGetUserRequest>({
            query: data => ({
                url: GET_USER_URL,
                method: "POST",
                body: {
                    idToken: data.token,
                },
                params: {},
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;

                    const { email, displayName } = result.data.users[0];
                    dispatch(authSlice.actions.setIsAuth(true));
                    dispatch(
                        authSlice.actions.setUser({
                            email,
                            displayName,
                        })
                    );
                    dispatch(authSlice.actions.setLocalId(result.data.users[0].localId));
                } catch (e) {
                    console.log(e);
                }
            },
        }),
    }),
});
