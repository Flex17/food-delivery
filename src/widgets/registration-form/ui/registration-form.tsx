import { AuthenticationFormWrapper, Button, Input, Title } from "shared/ui";
import { emailPlaceholder } from "shared/libs/useFormOptions.ts";
import { useRegister } from "widgets/registration-form/api/useRegister.ts";
import { useTranslation } from "react-i18next";
import css from "./registration-form.module.scss";
import { PasswordInput } from "shared/ui";
import { ChangeAuthMethod } from "features/change-auth-method";

export interface IRegistrationForm {
    displayName: string;
    phone: string;
    email: string;
    password: string;
}

export const RegistrationForm = () => {
    const { t } = useTranslation();

    const { isValid, passwordRegister, emailRegister, nameRegister, errors, onSubmit, requestData } = useRegister();

    return (
        <AuthenticationFormWrapper handleSubmit={onSubmit}>
            <Title>{t("registration.title")}</Title>
            <Input
                className={css.input_wrapper}
                {...nameRegister}
                placeholder={t("form.namePlaceholder")}
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
                placeholder={t("form.passwordPlaceholder")}
                description={errors.password?.message}
            />
            <Button type="submit" state={!isValid || requestData.isLoading ? "disabled" : "default"}>
                {t("registration.btnText")}
            </Button>
            <ChangeAuthMethod />
        </AuthenticationFormWrapper>
    );
};
