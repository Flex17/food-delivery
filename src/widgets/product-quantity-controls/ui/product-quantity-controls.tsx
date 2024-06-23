import React from "react";
import css from "./product-quantity-controls.module.scss";

interface ProductQuantityControlsProps {
    increase: React.ReactNode;
    descrease: React.ReactNode;
    children: React.ReactNode;
}

export const ProductQuantityControls = ({ descrease, increase, children }: ProductQuantityControlsProps) => {
    return (
        <div className={css.controls_wrapper}>
            {descrease}
            <div className={css.count}>
                <span>{children}</span>
            </div>
            {increase}
        </div>
    );
};
