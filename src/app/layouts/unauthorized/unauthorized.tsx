import { Navigate, Outlet } from "react-router-dom";
import css from "./unauthorized.module.scss";

export const Unauthorized = () => {
    const token = localStorage.getItem("access_token");

    if (token) return <Navigate to="/" />;

    return (
        <>
            <div className={css.selector}>language selector</div>
            {/*<div className={css.selector}><LanguageSelector/></div>*/}
            <Outlet />
        </>
    );
};
