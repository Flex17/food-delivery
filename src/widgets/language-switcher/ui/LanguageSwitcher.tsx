import i18 from "i18next";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import { ButtonSize, ButtonTheme } from "shared/ui/button/Button.tsx";
import { classNames } from "shared/libs";
import css from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
    short?: boolean;
    className?: string;
}

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t } = useTranslation();

    const toggle = () => i18.changeLanguage(i18.language === "ru" ? "en" : "ru");

    return (
        <Button
            styles={classNames(css.wrapper, {}, [className])}
            size={ButtonSize.M}
            theme={ButtonTheme.OUTLINE}
            type="button"
            onClick={toggle}
        >
            {short ? t("Короткий язык") : t("Язык")}
        </Button>
    );
};
