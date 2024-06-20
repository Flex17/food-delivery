import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth/model/auth-slice.ts";
import { Spinner } from "shared/ui";
import { authAPI } from "entities/auth/api/api.ts";

export const RequireAuth = () => {
    const isAuth = useAppSelector(authSlice.selectors.isAuth);

    const token = localStorage.getItem("access_token");

    const { isLoading } = authAPI.useGetUserQuery({ token: token || "" });

    if (isLoading) {
        return <Spinner />;
    }

    return isAuth ? <Outlet /> : <Navigate to="/unauthorized/registration" />;
};
