import React from "react";
import css from "./cart-list.module.scss";

interface CartListProps {
    children: React.ReactNode;
}

export const CartList = ({ children }: CartListProps) => <div className={css.wrapper}>{children}</div>;
