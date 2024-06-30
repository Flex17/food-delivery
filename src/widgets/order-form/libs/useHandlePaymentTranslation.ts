import { useTranslation } from "react-i18next";
import { PaymentMethodT } from "widgets/order-form/model/payment-data.ts";

export const useHandlePaymentTranslation = () => {
    const { t } = useTranslation("cart");

    const checkMethod = (method: PaymentMethodT | null) => {
        if (method === "Наличными") {
            return t("Наличными");
        }
        if (method === "По карте") {
            return t("По карте");
        }
        return t("Оплата по");
    };

    return {
        checkMethod,
    };
};
