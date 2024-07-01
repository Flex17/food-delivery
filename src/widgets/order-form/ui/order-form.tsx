import { useTranslation } from "react-i18next";
import { Button, Dropdown, Input } from "shared/ui";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHandlePaymentTranslation } from "widgets/order-form/libs/useHandlePaymentTranslation.ts";
import { IPaymentMethod, PaymentMethods, PaymentMethodT } from "../model/payment-data.ts";
import css from "./order-form.module.scss";

interface IOrderForm {
    address: string;
}

interface OrderFormProps {
    order: (address: string, payment: PaymentMethodT) => Promise<void>;
}

export const OrderForm = ({ order }: OrderFormProps) => {
    const { t } = useTranslation("cart");

    const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod | null>(null);

    const { checkMethod } = useHandlePaymentTranslation();

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

    const translatedItems = PaymentMethods.map(el => ({ ...el, value: checkMethod(el.value) }));

    const selectMethod = (id: number) => setPaymentMethod(PaymentMethods[id]);

    const currentItem = paymentMethod
        ? { ...paymentMethod, value: checkMethod(paymentMethod!.value) }
        : checkMethod(null);

    const onOrder = async () => order(getValues("address"), paymentMethod!.value).then(() => reset());

    return (
        <form className={css.wrapper} onSubmit={handleSubmit(onOrder)}>
            <h2 className={css.title}>{t("Заполните форму заказа")}</h2>
            <Input className={css.input} placeholder={t("Введите ваш адрес")} {...addressRegister} />
            <Dropdown currentItem={currentItem} items={translatedItems} setCurrentItem={selectMethod} />
            <Button className={css.btn} type="submit" disabled={!isValid || !paymentMethod}>
                {t("Заказать")}
            </Button>
        </form>
    );
};
