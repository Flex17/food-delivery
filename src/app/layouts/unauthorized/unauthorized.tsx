import { Navigate } from "react-router-dom";
import { LanguageSwitcher } from "widgets/language-switcher";
import { PublicAppRouter } from "app/providers/router";
import css from "./unauthorized.module.scss";

export const Unauthorized = () => {
    const token = localStorage.getItem("access_token");

    if (token) return <Navigate to="/" />;

    return (
        <>
            <div className={css.selector}>
                <LanguageSwitcher />
            </div>
            <PublicAppRouter />
        </>
    );
};
