import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth/model/auth-slice.ts";
import { authAPI } from "entities/auth/api/api.ts";
import { MainLayout } from "app/layouts/main-layout/main-layout.tsx";
import { PrivateAppRouter } from "app/providers/router";
import { Unauthorized } from "app/layouts/unauthorized/unauthorized.tsx";
import { PageLoader } from "widgets/page-loader";

export const RequireAuth = () => {
    const isAuth = useAppSelector(authSlice.selectors.isAuth);

    const token = localStorage.getItem("access_token");

    const { isLoading } = authAPI.useGetUserQuery({ token: token || "" });

    if (isLoading) {
        return <PageLoader />;
    }

    if (isAuth) {
        return (
            <MainLayout>
                <PrivateAppRouter />
            </MainLayout>
        );
    }

    return <Unauthorized />;
};
