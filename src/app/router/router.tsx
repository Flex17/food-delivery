import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "app/app.tsx";
import { RequireAuth } from "app/layouts/require-auth/require-auth.tsx";
import { Unauthorized } from "app/layouts/unauthorized/unauthorized.tsx";
import { Authorization } from "pages/authorization";
import { Registration } from "pages/registration";
import { Suspense } from "react";
import { Spinner } from "shared/ui";
import { Menu } from "pages/menu";
import { Cart } from "pages/cart";
import { SuccessOrder } from "pages/success-order";
import NotFound from "pages/404/ui/not-found.tsx";
import Orders from "pages/orders/ui/orders.tsx";

const authorizedRoutes: RouteObject[] = [
    {
        path: "/",
        element: (
            <Suspense fallback={<Spinner />}>
                <Menu />
            </Suspense>
        ),
    },
    {
        path: "/cart",
        element: (
            <Suspense fallback={<Spinner />}>
                <Cart />
            </Suspense>
        ),
    },
    {
        path: "/orders",
        element: (
            <Suspense fallback={<Spinner />}>
                <Orders />
            </Suspense>
        ),
    },
    {
        path: "/orders/:id",
        element: (
            <Suspense fallback={<Spinner />}>
                <SuccessOrder />
            </Suspense>
        ),
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
        errorElement: <NotFound />,
    },
]);
