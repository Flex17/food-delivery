import { useTranslation } from "react-i18next";
import css from "./select-language.module.scss";

const languages = [
    {
        code: "ru",
        lang: "Русский",
    },
    {
        code: "en",
        lang: "English",
    },
];

export const SelectLanguage = () => {
    const { i18n } = useTranslation();

    const changeLanguage = async (code: string) => i18n.changeLanguage(code);

    return (
        <div className={css.wrapper}>
            {languages.map(({ lang, code }) => (
                <button
                    type="button"
                    className={code === i18n.language ? css.selected : ""}
                    onClick={() => changeLanguage(code)}
                    key={code}
                >
                    {lang}
                </button>
            ))}
        </div>
    );
};
