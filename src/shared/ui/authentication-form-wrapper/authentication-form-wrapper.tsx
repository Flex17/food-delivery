import React from "react";
import css from "./authentication-form-wrapper.module.scss";

interface AuthenticationFormWrapperProps {
    handleSubmit: () => void;
    children: React.ReactNode;
}

export const AuthenticationFormWrapper = ({ handleSubmit, children }: AuthenticationFormWrapperProps) => (
    <div className={css.wrapper}>
        <form className={css.form} onSubmit={handleSubmit}>
            {children}
        </form>
    </div>
);
