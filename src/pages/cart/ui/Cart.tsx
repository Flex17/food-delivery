import { useTranslation } from "react-i18next";
import { InfoText, Title } from "shared/ui";
import { cartAPI } from "entities/cart/api/api.ts";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";
import { DeleteProductButton } from "features/delete-product";
import { OrderForm } from "widgets/order-form";
import { useMakeOrder } from "features/make-order/api/useMakeOrder.ts";
import { Navigate } from "react-router-dom";
import { RemoveProductButton } from "features/remove-product";
import { IncreaseProductQuantityButton } from "features/increase-product-quantity";
import { CartProductCard } from "entities/product";
import { PageLoader } from "widgets/page-loader";
import { CartList } from "./cart-list/cart-list.tsx";
import css from "./Cart.module.scss";

const Cart = () => {
    const { t } = useTranslation("cart");

    const localId = useAppSelector(authSlice.selectors.localId);

    const { data: products } = cartAPI.useGetCartQuery({ localId });
    const { isCartLoading, isOrderLoading, onOrder, cartData, orderResponse } = useMakeOrder();

    if (isOrderLoading || isCartLoading) {
        return <PageLoader />;
    }

    if (orderResponse) {
        return <Navigate to={`/order/${orderResponse.name}`} />;
    }

    if (!cartData?.length) {
        return <InfoText>{t("Ваша корзина пуста")}</InfoText>;
    }

    return (
        <div className={css.wrapper}>
            <Title>{t("Оформить заказ")}</Title>
            <CartList>
                {products?.map(product => (
                    <CartProductCard
                        key={product.id}
                        data={product}
                        decrease={<RemoveProductButton product={product} />}
                        increase={<IncreaseProductQuantityButton product={product} />}
                        removeProduct={<DeleteProductButton product={product} />}
                    />
                ))}
            </CartList>
            <OrderForm order={onOrder} />
        </div>
    );
};

export default Cart;
