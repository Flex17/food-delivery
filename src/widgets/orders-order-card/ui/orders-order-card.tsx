import React from "react";
import { IHistoryOrderData } from "entities/order/api/types.ts";
import { useTranslation } from "react-i18next";
import css from "./orders-order-card.module.scss";

interface OrdersOrderCardProps {
    order: IHistoryOrderData;
    children: React.ReactNode;
}

export const OrdersOrderCard = ({ order, children }: OrdersOrderCardProps) => {
    const { t } = useTranslation("history");

    const { totalPrice, paymentMethod, address, id } = order;

    return (
        <div className={css.wrapper}>
            <div className={css.main_info}>
                <span className={css.num}>
                    {t("Номер заказа")}
                    : #
                    {id}
                </span>
                <span>
                    {t("Стоимость")}
                    :
                    {totalPrice}
                    {" "}
                    ₽
                </span>
                <span>
                    {t("Адрес")}
                    :
                    {address}
                </span>
                <span>
                    {t("Способ оплаты")}
                    :
                    {paymentMethod}
                </span>
            </div>
            <span>
                {t("Продукты")}
                :
            </span>
            <div className={css.products}>{children}</div>
        </div>
    );
};
