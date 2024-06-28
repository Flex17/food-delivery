import React from "react";
import { UseFormRegister } from "react-hook-form";
import cx from "classnames";
import css from "./input.module.scss";

export interface MainInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    description?: string;
    styles?: string;
}

export const Input = React.forwardRef<HTMLInputElement, MainInputProps & ReturnType<UseFormRegister<any>>>(
    ({
        placeholder, required, className, description, children, ...props
    }, ref) => (
        <div className={cx(className, css.wrapper)}>
            <input placeholder={placeholder} {...props} className={cx(css.input)} ref={ref} />
            <span className={css.description}>{description}</span>
            {children}
        </div>
    ),
);
