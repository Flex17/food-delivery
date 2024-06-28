import React from "react";
import css from "./orders-list.module.scss";

interface OrdersListProps {
    children: React.ReactNode;
}

export const OrdersList = ({ children }: OrdersListProps) => <div className={css.wrapper}>{children}</div>;
