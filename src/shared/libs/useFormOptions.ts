import { RegisterOptions } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IRegistrationForm } from "widgets/registration-form/ui/registration-form.tsx";
import { IAuthorizationForm } from "widgets/authorization-form/ui/AuthorizationForm.tsx";

export const emailPlaceholder = "yourmail@mail.ru";

export const emailPatternValue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const onlyTextPatternValue = /^[a-zA-Zа-яА-Я\s]+$/;

export const useFormOptions = () => {
    const { t } = useTranslation();

    const EMAIL_ERROR = t("form.emailError");
    const PASSWORD_ERROR = t("form.passwordError");

    const textInputOptions: RegisterOptions<IRegistrationForm | IAuthorizationForm> = {
        required: true,
        pattern: {
            value: onlyTextPatternValue,
            message: t("form.onlyLetters"),
        },
    };

    const emailInputOptions: RegisterOptions<IRegistrationForm | IAuthorizationForm> = {
        required: true,
        max: 50,
        maxLength: {
            value: 50,
            message: EMAIL_ERROR,
        },
        pattern: {
            value: emailPatternValue,
            message: EMAIL_ERROR,
        },
    };

    const passwordInputOptions: RegisterOptions<IRegistrationForm | IAuthorizationForm> = {
        required: true,
        maxLength: 50,
        minLength: {
            value: 6,
            message: PASSWORD_ERROR,
        },
    };

    return {
        emailInputOptions,
        passwordInputOptions,
        textInputOptions,
    };
};
