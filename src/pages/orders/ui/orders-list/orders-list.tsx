import css from "./orders-list.module.scss";
import React from "react";

interface OrdersListProps {
    children: React.ReactNode;
}

export const OrdersList = ({ children }: OrdersListProps) => {
    return <div className={css.wrapper}>{children}</div>;
};
