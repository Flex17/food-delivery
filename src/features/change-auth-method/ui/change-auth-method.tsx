import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import css from "./change-auth-method.module.scss";
import { TFunction } from "i18next";

const generateLinkAndText = (
    pathname: string,
    t: TFunction<"translation", undefined>
): { link: string; text: string } => {
    const link = pathname.includes("registration") ? "/unauthorized/authorization" : "/unauthorized/registration";
    const text = pathname.includes("/registration") ? t("registration.haveAccount") : t("authorization.haveAccount");

    return {
        link,
        text,
    };
};

export const ChangeAuthMethod = () => {
    const { t } = useTranslation();

    const { pathname } = useLocation();

    const { text, link } = generateLinkAndText(pathname, t);

    return (
        <NavLink className={css.wrapper} to={link}>
            {text}
        </NavLink>
    );
};