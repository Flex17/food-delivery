import { InfoText, Loader, Title } from "shared/ui";
import { OrderCard, ordersAPI } from "entities/order";
import { useAppSelector } from "app/redux/store.ts";
import { useTranslation } from "react-i18next";
import { authSlice } from "entities/auth";
import { OrdersProductCard } from "entities/product";
import { OrdersList } from "./orders-list/orders-list.tsx";
import css from "./orders.module.scss";

const Orders = () => {
    const { t } = useTranslation("history");

    const localId = useAppSelector(authSlice.selectors.localId);

    const { data: orders, isLoading } = ordersAPI.useGetAllQuery({ localId });

    if (isLoading) {
        return <Loader />;
    }

    if (!orders?.length) {
        return <InfoText>{t("Заказов не найдено")}</InfoText>;
    }

    return (
        <div className={css.wrapper}>
            <Title>{t("Ваши заказы")}</Title>
            <OrdersList>
                {[...orders].reverse().map(order => (
                    <OrderCard key={order.id} order={order}>
                        {order.products.map(product => (
                            <OrdersProductCard key={product.id} data={product} />
                        ))}
                    </OrderCard>
                ))}
            </OrdersList>
        </div>
    );
};

export default Orders;
