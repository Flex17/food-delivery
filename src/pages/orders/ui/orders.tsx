import { InfoText, Loader, Title } from "shared/ui";
import { ordersAPI } from "entities/order/api/api.ts";
import { useAppSelector } from "app/redux/store.ts";
import { useTranslation } from "react-i18next";
import { authSlice } from "entities/auth";
import { OrdersList } from "pages/orders/ui/orders-list/orders-list.tsx";
import { OrdersOrderCard } from "widgets/orders-order-card";
import { OrdersProductCard } from "widgets/orders-product-card";
import css from "./orders.module.scss";

const Orders = () => {
    const { t } = useTranslation();

    const localId = useAppSelector(authSlice.selectors.localId);

    const { data: orders, isLoading } = ordersAPI.useGetAllQuery({ localId });

    if (isLoading) {
        return <Loader />;
    }

    if (!orders?.length) {
        return <InfoText>{t("history.noOrders")}</InfoText>;
    }

    return (
        <div className={css.wrapper}>
            <Title>{t("history.title")}</Title>
            <OrdersList>
                {[...orders].reverse().map((order) => (
                    <OrdersOrderCard key={order.id} order={order}>
                        {order.products.map((product) => (
                            <OrdersProductCard key={product.id} data={product} />
                        ))}
                    </OrdersOrderCard>
                ))}
            </OrdersList>
        </div>
    );
};

export default Orders;
