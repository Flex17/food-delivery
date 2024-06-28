import React from "react";
import cx from "classnames";
import css from "./quantity-button.module.scss";

interface QuantityButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    children: React.ReactNode;
}

export const QuantityButton = ({ children, onClick, ...props }: QuantityButtonProps) => (
    <button type="button" onClick={onClick} className={cx(css.wrapper, props.disabled && css.disabled)} {...props}>
        {children}
    </button>
);
