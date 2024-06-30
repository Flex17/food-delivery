import { useTranslation } from "react-i18next";
import { InfoText, Loader, Title } from "shared/ui";
import { cartAPI } from "entities/cart/api/api.ts";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";
import { CartProductCard } from "widgets/cart-product-card";
import { DeleteProductButton } from "features/delete-product";
import { ProductQuantityControls } from "widgets/product-quantity-controls";
import { OrderForm } from "widgets/order-form";
import { useMakeOrder } from "features/make-order/api/useMakeOrder.ts";
import { Navigate } from "react-router-dom";
import { RemoveProductButton } from "features/remove-product";
import { IncreaseProductQuantityButton } from "features/increase-product-quantity";
import { CartList } from "./cart-list/cart-list.tsx";
import css from "./cart.module.scss";

const Cart = () => {
    const { t } = useTranslation("cart");

    const localId = useAppSelector(authSlice.selectors.localId);

    const { data: products } = cartAPI.useGetCartQuery({ localId });
    const { isCartLoading, isOrderLoading, onOrder, cartData, orderResponse } = useMakeOrder();

    if (isOrderLoading || isCartLoading) {
        return <Loader />;
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
                        removeProduct={<DeleteProductButton product={product} />}
                    >
                        <ProductQuantityControls
                            descrease={<RemoveProductButton product={product} />}
                            increase={<IncreaseProductQuantityButton product={product} />}
                        >
                            {product.quantity}
                        </ProductQuantityControls>
                    </CartProductCard>
                ))}
            </CartList>
            <OrderForm order={onOrder} />
        </div>
    );
};

export default Cart;
