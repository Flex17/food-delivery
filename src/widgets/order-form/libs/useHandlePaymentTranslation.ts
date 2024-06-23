import { useTranslation } from "react-i18next";
import { PaymentMethodT } from "widgets/order-form/model/payment-data.ts";

export const useHandlePaymentTranslation = () => {
    const { t } = useTranslation();

    const checkMethod = (method: PaymentMethodT | null) => {
        if (method === "Наличными") {
            return t("cart.form.method.cash");
        } else if (method === "По карте") {
            return t("cart.form.method.byCard");
        } else {
            return t("cart.form.method.notSelected");
        }
    };

    return {
        checkMethod,
    };
};
