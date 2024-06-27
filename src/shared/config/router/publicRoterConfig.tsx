import { Navigate, RouteProps } from "react-router-dom";
import { Registration } from "pages/registration";
import { Authorization } from "pages/authorization";

export enum PublicAppRoutes {
    REGISTRATION = "registration",
    AUTHORIZATION = "authorization",
    NOT_FOUND = "not_found",
}

export const PublicRouterPath: Record<PublicAppRoutes, string> = {
    [PublicAppRoutes.REGISTRATION]: "/registration",
    [PublicAppRoutes.AUTHORIZATION]: "/authorization",
    [PublicAppRoutes.NOT_FOUND]: "*",
};

export const publicRouteConfig: Record<PublicAppRoutes, RouteProps> = {
    [PublicAppRoutes.REGISTRATION]: {
        path: PublicRouterPath.registration,
        element: <Registration />,
    },
    [PublicAppRoutes.AUTHORIZATION]: {
        path: PublicRouterPath.authorization,
        element: <Authorization />,
    },
    [PublicAppRoutes.NOT_FOUND]: {
        path: PublicRouterPath.not_found,
        element: <Navigate to={PublicRouterPath.registration} />,
    },
};
