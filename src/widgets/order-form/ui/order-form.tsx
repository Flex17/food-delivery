import { useTranslation } from "react-i18next";
import { Button, Dropdown, Input } from "shared/ui";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { paymentMethods, PaymentMethodT } from "../model/payment-data.ts";
import css from "./order-form.module.scss";

interface IOrderForm {
    address: string;
}

interface OrderFormProps {
    order: (address: string, payment: PaymentMethodT) => Promise<void>;
}

export const OrderForm = ({ order }: OrderFormProps) => {
    const { t } = useTranslation();

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodT | null>(null);

    const {
        register,
        handleSubmit,
        formState: { isValid },
        getValues,
        reset,
    } = useForm<IOrderForm>({
        mode: "onBlur",
    });

    const addressRegister = {
        ...register("address", {
            required: true,
        }),
    };

    const selectMethod = (value: PaymentMethodT) => setPaymentMethod(value);

    const onOrder = async () => order(getValues("address"), paymentMethod!).then(() => reset());

    return (
        <form className={css.wrapper} onSubmit={handleSubmit(onOrder)}>
            <h2 className={css.title}>{t("cart.form.title")}</h2>
            <Input className={css.input} placeholder={t("cart.form.address")} {...addressRegister} />
            <Dropdown
                currentItem={paymentMethod || "Оплата по:"}
                items={paymentMethods}
                setCurrentItem={selectMethod}
            />
            <Button styles={css.btn} type="submit" state={isValid && paymentMethod ? "default" : "disabled"}>
                {t("cart.form.order")}
            </Button>
        </form>
    );
};
