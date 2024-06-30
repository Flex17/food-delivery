import { AuthenticationFormWrapper, Button, Input, PasswordInput, Title } from "shared/ui";
import { emailPlaceholder } from "shared/libs/useFormOptions.ts";
import { useRegister } from "widgets/registration-form/api/useRegister.ts";
import { useTranslation } from "react-i18next";
import { ChangeAuthMethod } from "features/change-auth-method";
import css from "./registration-form.module.scss";

export interface IRegistrationForm {
    displayName: string;
    phone: string;
    email: string;
    password: string;
}

export const RegistrationForm = () => {
    const { t } = useTranslation("authorization");

    const { isValid, passwordRegister, emailRegister, nameRegister, errors, onSubmit, requestData } = useRegister();

    return (
        <AuthenticationFormWrapper handleSubmit={onSubmit}>
            <Title>{t("Регистрация")}</Title>
            <Input
                className={css.input_wrapper}
                {...nameRegister}
                placeholder={t("Введите ваше имя")}
                description={errors.displayName?.message?.toString()}
            />
            <Input
                className={css.input_wrapper}
                {...emailRegister}
                placeholder={emailPlaceholder}
                description={errors.email?.message?.toString()}
            />
            <PasswordInput
                {...passwordRegister}
                className={css.input_wrapper}
                placeholder={t("Введите ваш пароль")}
                description={errors.password?.message}
            />
            <Button type="submit" disabled={!isValid || requestData.isLoading}>
                {t("Зарегистрироваться")}
            </Button>
            <ChangeAuthMethod />
        </AuthenticationFormWrapper>
    );
};
