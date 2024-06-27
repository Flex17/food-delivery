import { RouteProps } from "react-router-dom";
import { Menu } from "pages/menu";
import { Cart } from "pages/cart";
import { Orders } from "pages/orders";
import { SuccessOrder } from "pages/success-order";
import { NotFound } from "pages/404";

export enum PrivateAppRoutes {
    MENU = "menu",
    CART = "cart",
    ORDERS = "orders",
    ORDER = "order",
    NOT_FOUND = "not_found",
}

export const PrivateRouterPath: Record<PrivateAppRoutes, string> = {
    [PrivateAppRoutes.MENU]: "/",
    [PrivateAppRoutes.CART]: "/cart",
    [PrivateAppRoutes.ORDERS]: "/orders",
    [PrivateAppRoutes.ORDER]: "/order/:id",
    [PrivateAppRoutes.NOT_FOUND]: "*",
};

export const privateRouteConfig: Record<PrivateAppRoutes, RouteProps> = {
    [PrivateAppRoutes.MENU]: {
        path: PrivateRouterPath.menu,
        element: <Menu />,
    },
    [PrivateAppRoutes.CART]: {
        path: PrivateRouterPath.cart,
        element: <Cart />,
    },
    [PrivateAppRoutes.ORDERS]: {
        path: PrivateRouterPath.orders,
        element: <Orders />,
    },
    [PrivateAppRoutes.ORDER]: {
        path: PrivateRouterPath.order,
        element: <SuccessOrder />,
    },
    [PrivateAppRoutes.NOT_FOUND]: {
        path: PrivateRouterPath.not_found,
        element: <NotFound />,
    },
};
