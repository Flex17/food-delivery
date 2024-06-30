import React from "react";
import { classNames } from "shared/libs";
import css from "./Button.module.scss";

// type ButtonStateT = "default" | "disabled" | "bordered";

export enum ButtonTheme {
    DEFAULT = "default",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    styles?: string;
    theme?: ButtonTheme;
}

export const Button = ({ theme = ButtonTheme.DEFAULT, styles, children, ...props }: ButtonProps) => (
    <button type="button" {...props} className={classNames(css.wrapper, {}, [styles, css[theme]])}>
        {children}
    </button>
);
