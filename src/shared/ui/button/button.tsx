import React from "react";
import cx from "classnames";
import css from "./button.module.scss";

type ButtonStateT = "default" | "disabled" | "bordered";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    styles?: string;
    state: ButtonStateT;
}

export const Button = ({ state, styles, children, ...props }: ButtonProps) => {
    return (
        <button {...props} disabled={state === "disabled"} className={cx(css.wrapper, css[state], styles)}>
            {children}
        </button>
    );
};
