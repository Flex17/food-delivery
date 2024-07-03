import { useTranslation } from "react-i18next";
import css from "./NotFound.module.scss";

const NotFound = () => {
    const { t } = useTranslation("404");
    return (
        <div className={css.wrapper}>
            <span className={css.title}>{t("Ошибка 404")}</span>
            <span className={css.description}>{t("Страница не найдена")}</span>
        </div>
    );
};

export default NotFound;
