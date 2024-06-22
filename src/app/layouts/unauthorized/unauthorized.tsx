import { Navigate, Outlet } from "react-router-dom";
import css from "./unauthorized.module.scss";
import { SelectLanguage } from "features/select-language";

export const Unauthorized = () => {
    const token = localStorage.getItem("access_token");

    if (token) return <Navigate to="/" />;

    return (
        <>
            <div className={css.selector}>
                <SelectLanguage />
            </div>
            <Outlet />
        </>
    );
};
