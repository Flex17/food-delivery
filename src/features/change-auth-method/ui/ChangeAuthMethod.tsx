import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { TFunction } from "i18next";
import { PublicRouterPath } from "shared/config/router/publicRoterConfig.tsx";
import css from "./ChangeAuthMethod.module.scss";

const generateLinkAndText = (
    pathname: string,
    t: TFunction<"translation", undefined>
): { link: string; text: string } => {
    const link = pathname.includes(PublicRouterPath.registration)
        ? PublicRouterPath.authorization
        : PublicRouterPath.registration;

    const text = pathname.includes(PublicRouterPath.registration)
        ? t("Есть аккаунт? Войдите")
        : t("Нет аккаунта? Зарегистрироваться");

    return {
        link,
        text,
    };
};

export const ChangeAuthMethod = () => {
    const { t } = useTranslation("authorization");

    const { pathname } = useLocation();

    const { text, link } = generateLinkAndText(pathname, t);

    return (
        <NavLink className={css.wrapper} to={link}>
            {text}
        </NavLink>
    );
};
