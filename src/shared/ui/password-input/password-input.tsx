import { Input, MainInputProps } from "shared/ui/input/input.tsx";
import { UseFormRegister } from "react-hook-form";
import React, { useState } from "react";
import { ReactComponent as VisibleIcon } from "./icons/visible.svg";
import { ReactComponent as InvisibleIcon } from "./icons/invisible.svg";
import css from "./password-input.module.scss";

export const PasswordInput = React.forwardRef<HTMLInputElement, MainInputProps & ReturnType<UseFormRegister<any>>>(
    ({ className, children, ...props }, ref) => {
        const [visible, setVisible] = useState(false);

        const handleVisibility = () => setVisible(!visible);

        return (
            <Input {...props} ref={ref} maxLength={50} className={className} type={visible ? "text" : "password"}>
                <div className={css.icon} onClick={handleVisibility}>
                    {visible ? <VisibleIcon /> : <InvisibleIcon />}
                </div>
            </Input>
        );
    }
);
