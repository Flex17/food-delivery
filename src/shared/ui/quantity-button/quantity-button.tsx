import React from "react";
import css from "./quantity-button.module.scss";

interface QuantityButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    children: React.ReactNode;
}

export const QuantityButton = ({ children, onClick, ...props }: QuantityButtonProps) => {
    return (
        <button type="button" onClick={onClick} className={css.wrapper} {...props}>
            {children}
        </button>
    );
};
