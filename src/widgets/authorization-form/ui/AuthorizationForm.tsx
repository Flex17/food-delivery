import { AuthenticationFormWrapper, Button, Input, PasswordInput, Title } from "shared/ui";
import { emailPlaceholder } from "shared/libs/useFormOptions.ts";
import { useTranslation } from "react-i18next";
import { ChangeAuthMethod } from "features/change-auth-method";
import { useAuthorize } from "../api/useAuthorize.ts";
import css from "./AuthorizationForm.module.scss";

export interface IAuthorizationForm {
    email: string;
    password: string;
}

export const AuthorizationForm = () => {
    const { t } = useTranslation("authorization");

    const { passwordRegister, emailRegister, errors, isValid, onSubmit, requestData } = useAuthorize();

    return (
        <AuthenticationFormWrapper handleSubmit={onSubmit}>
            <Title>{t("Вход")}</Title>
            <Input
                className={css.input_wrapper}
                {...emailRegister}
                placeholder={emailPlaceholder}
                description={errors.email?.message}
            />
            <PasswordInput
                {...passwordRegister}
                className={css.input_wrapper}
                placeholder={t("Введите ваш пароль")}
                description={errors.password?.message}
            />
            <Button type="submit" disabled={!isValid || requestData.isLoading}>
                {t("Войти")}
            </Button>
            <ChangeAuthMethod />
        </AuthenticationFormWrapper>
    );
};
