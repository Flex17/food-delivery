import { classNames } from "shared/libs";
import { Button } from "shared/ui";
import { useTranslation } from "react-i18next";
import css from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    // eslint-disable-next-line no-restricted-globals
    const reloadPage = () => location.reload();

    return (
        <div className={classNames(css.wrapper, {}, [className])}>
            <h1 className={css.title}>{t("Произошла непредвиденная ошибка")}</h1>
            <Button type="button" onClick={reloadPage}>
                Обновить страницу
            </Button>
        </div>
    );
};
