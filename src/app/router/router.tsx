import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "app/app.tsx";
import { RequireAuth } from "app/layouts/require-auth/require-auth.tsx";
import { Unauthorized } from "app/layouts/unauthorized/unauthorized.tsx";
import { Registration } from "pages/registration/ui/registration.tsx";
import { Authorization } from "pages/authorization";

const authorizedRoutes: RouteObject[] = [
    {
        element: <div>registered</div>,
    },
];

const unauthorizedRoutes: RouteObject[] = [
    {
        path: "registration",
        element: <Registration />,
    },
    {
        path: "authorization",
        element: <Authorization />,
    },
];

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <RequireAuth />,
                children: authorizedRoutes,
            },
            {
                path: "unauthorized",
                element: <Unauthorized />,
                children: unauthorizedRoutes,
            },
        ],
    },
]);
