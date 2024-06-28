import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { authAPI } from "entities/auth/api/api.ts";
import { useFormOptions, useSetUser } from "shared/libs";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IAuthorizationForm } from "widgets/authorization-form/ui/authorization-form.tsx";

export const useAuthorize = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const [authorization, requestData] = authAPI.useAuthorizationMutation();

    const { setUser } = useSetUser();

    const { emailInputOptions, passwordInputOptions } = useFormOptions();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IAuthorizationForm>({
        mode: "onBlur",
    });

    const emailRegister = {
        ...register("email", emailInputOptions as RegisterOptions<IAuthorizationForm>),
    };

    const passwordRegister = {
        ...register("password", passwordInputOptions as RegisterOptions<IAuthorizationForm>),
    };
    const onAuthorization: SubmitHandler<IAuthorizationForm> = async (data) => {
        try {
            const userData = await authorization(data).unwrap();
            setUser({ ...userData });
            navigate("/");
        } catch (error) {
            toast.error(t("error"));
        }
    };

    const onSubmit = handleSubmit(onAuthorization);

    return {
        requestData,
        errors,
        isValid,
        emailRegister,
        passwordRegister,
        onSubmit,
    };
};
