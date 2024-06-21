import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "app/app.tsx";
import { RequireAuth } from "app/layouts/require-auth/require-auth.tsx";
import { Unauthorized } from "app/layouts/unauthorized/unauthorized.tsx";
import { Authorization } from "pages/authorization";
import { Registration } from "pages/registration";
import { Suspense } from "react";
import { Spinner } from "shared/ui";

const authorizedRoutes: RouteObject[] = [
    {
        element: <div>registered</div>,
    },
];

const unauthorizedRoutes: RouteObject[] = [
    {
        path: "registration",
        element: (
            <Suspense fallback={<Spinner />}>
                <Registration />
            </Suspense>
        ),
    },
    {
        path: "authorization",
        element: (
            <Suspense fallback={<Spinner />}>
                <Authorization />
            </Suspense>
        ),
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
