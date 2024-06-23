import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./types.ts";

const initialState: IAuthState = {
    isAuth: false,
    email: "",
    displayName: "",
    localId: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    selectors: {
        isAuth: state => state.isAuth,
        localId: state => state.localId,
        name: state => state.displayName,
    },
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setUser(state, action: PayloadAction<{ email: string; displayName: string }>) {
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
        },
        setLocalId(state, action: PayloadAction<string>) {
            state.localId = action.payload;
        },
    },
});
