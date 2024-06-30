import React from "react";
import { classNames } from "shared/libs";
import css from "./Button.module.scss";

export enum ButtonTheme {
    DEFAULT = "default",
    ERROR = "error",
    DARK = "dark",
    OUTLINE = "outline",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
    children: React.ReactNode;
    styles?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    rounded?: boolean;
}

export const Button = ({
    theme = ButtonTheme.DEFAULT,
    size = ButtonSize.L,
    rounded = false,
    styles,
    children,
    ...props
}: ButtonProps) => (
    <button
        type="button"
        {...props}
        className={classNames(css.wrapper, { [css.rounded]: rounded }, [styles, css[theme], css[size]])}
    >
        {children}
    </button>
);
