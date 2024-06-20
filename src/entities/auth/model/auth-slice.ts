import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateI } from "entities/auth/model/types.ts";

const initialState: AuthStateI = {
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
