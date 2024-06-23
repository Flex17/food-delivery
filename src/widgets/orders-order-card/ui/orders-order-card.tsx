import React from "react";
import { IHistoryOrderData } from "entities/order/api/types.ts";
import { useTranslation } from "react-i18next";
import css from "./orders-order-card.module.scss";

interface OrdersOrderCardProps {
    order: IHistoryOrderData;
    children: React.ReactNode;
}

export const OrdersOrderCard = ({ order, children }: OrdersOrderCardProps) => {
    const { t } = useTranslation();

    const { totalPrice, paymentMethod, address, id } = order;

    return (
        <div className={css.wrapper}>
            <div className={css.main_info}>
                <span className={css.num}>
                    {t("history.card.orderNumber")}: #{id}
                </span>
                <span>
                    {t("history.card.cost")}: {totalPrice} ₽
                </span>
                <span>
                    {t("history.card.address")}: {address}
                </span>
                <span>
                    {t("history.card.payment")}: {paymentMethod}
                </span>
            </div>
            <span>{t("history.card.products")}:</span>
            <div className={css.products}>{children}</div>
        </div>
    );
};
