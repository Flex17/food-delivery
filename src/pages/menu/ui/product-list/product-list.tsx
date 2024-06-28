import React from "react";
import css from "./product-list.module.scss";

interface ProductListProps {
    children: React.ReactNode;
}

export const ProductList = ({ children }: ProductListProps) => <div className={css.wrapper}>{children}</div>;
