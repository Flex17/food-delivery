import {
    AuthenticationFormWrapper, Button, Input, Title,
    PasswordInput,
} from "shared/ui";
import { emailPlaceholder } from "shared/libs/useFormOptions.ts";
import { useTranslation } from "react-i18next";
import { ChangeAuthMethod } from "features/change-auth-method";
import { useAuthorize } from "../api/useAuthorize.ts";
import css from "./authorization-form.module.scss";

export interface IAuthorizationForm {
    email: string;
    password: string;
}

export const AuthorizationForm = () => {
    const { t } = useTranslation();

    const {
        passwordRegister, emailRegister, errors, isValid, onSubmit, requestData,
    } = useAuthorize();

    return (
        <AuthenticationFormWrapper handleSubmit={onSubmit}>
            <Title>{t("authorization.title")}</Title>
            <Input
                className={css.input_wrapper}
                {...emailRegister}
                placeholder={emailPlaceholder}
                description={errors.email?.message}
            />
            <PasswordInput
                {...passwordRegister}
                className={css.input_wrapper}
                placeholder={t("form.passwordPlaceholder")}
                description={errors.password?.message}
            />
            <Button type="submit" state={!isValid || requestData.isLoading ? "disabled" : "default"}>
                {t("authorization.btnText")}
            </Button>
            <ChangeAuthMethod />
        </AuthenticationFormWrapper>
    );
};
