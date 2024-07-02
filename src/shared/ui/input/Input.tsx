import React from "react";
import { UseFormRegister } from "react-hook-form";
import { classNames } from "shared/libs";
import css from "./Input.module.scss";

export interface MainInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    description?: string;
    className?: string,
}

export const Input = React.forwardRef<HTMLInputElement, MainInputProps & ReturnType<UseFormRegister<any>>>(
    ({
        placeholder, required, className, description, children, ...props
    }, ref) => (
        <div className={classNames(css.wrapper, {}, [className])}>
            <div className={css.content}>
                <input placeholder={placeholder} {...props} className={css.input} ref={ref} />
                {children}
            </div>
            <span className={css.description}>{description}</span>
        </div>
    ),
);
