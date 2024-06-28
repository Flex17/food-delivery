import { Navigate } from "react-router-dom";
import { SelectLanguage } from "features/select-language";
import { PublicAppRouter } from "app/providers/router";
import css from "./unauthorized.module.scss";

export const Unauthorized = () => {
    const token = localStorage.getItem("access_token");

    if (token) return <Navigate to="/" />;

    return (
        <>
            <div className={css.selector}>
                <SelectLanguage />
            </div>
            <PublicAppRouter />
        </>
    );
};
