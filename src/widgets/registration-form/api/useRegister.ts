import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authAPI } from "entities/auth/api/api.ts";
import { useFormOptions } from "shared/libs/useFormOptions.ts";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IRegistrationForm } from "widgets/registration-form/ui/registration-form.tsx";
import { useSetUser } from "shared/libs";

export const useRegister = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [registration, requestData] = authAPI.useRegistrationMutation();

    const { emailInputOptions, textInputOptions, passwordInputOptions } = useFormOptions();

    const { setUser } = useSetUser();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IRegistrationForm>({
        mode: "onBlur",
    });

    const emailRegister = {
        ...register("email", emailInputOptions as RegisterOptions<IRegistrationForm>),
    };

    const nameRegister = {
        ...register("displayName", textInputOptions as RegisterOptions<IRegistrationForm>),
    };

    const passwordRegister = {
        ...register("password", passwordInputOptions as RegisterOptions<IRegistrationForm>),
    };

    const onRegistration: SubmitHandler<IRegistrationForm> = async data => {
        try {
            const userData = await registration(data).unwrap();
            setUser({ ...userData });
            navigate("/");
        } catch (error) {
            toast.error(t("error"));
        }
    };

    const onSubmit = handleSubmit(onRegistration);

    return {
        isValid,
        errors,
        requestData,
        emailRegister,
        nameRegister,
        passwordRegister,
        onSubmit,
    };
};
