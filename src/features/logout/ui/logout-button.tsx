import { useLogout } from "features/logout/api/useLogout.ts";
import { Button } from "shared/ui";
import { useTranslation } from "react-i18next";
import css from "./logout.module.scss";

export const LogoutButton = () => {
    const { t } = useTranslation();
    const logout = useLogout();

    return (
        <Button onClick={logout} type="button" styles={css.button}>
            {t("Выйти")}
        </Button>
    );
};
