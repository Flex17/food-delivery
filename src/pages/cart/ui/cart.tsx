import { useTranslation } from "react-i18next";
import { InfoText, Spinner, Title } from "shared/ui";
import { CartList } from "pages/cart/ui/cart-list/cart-list.tsx";
import { cartAPI } from "entities/cart/api/api.ts";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";
import { CartProductCard } from "widgets/cart-product-card";
import { DeleteProductButton } from "features/delete-product";
import { RemoveProductButton } from "features/menu-product/remove-product";
import { IncreaseProductQuantityButton } from "features/menu-product/increase-product-quantity";
import { ProductQuantityControls } from "widgets/product-quantity-controls";
import css from "./cart.module.scss";
import { OrderForm } from "widgets/order-form";
import { useMakeOrder } from "features/make-order/api/useMakeOrder.ts";
import { Navigate } from "react-router-dom";

const Cart = () => {
    const { t } = useTranslation();

    const localId = useAppSelector(authSlice.selectors.localId);

    const { data: products } = cartAPI.useGetCartQuery({ localId });
    const { isCartLoading, isOrderLoading, onOrder, cartData, orderResponse } = useMakeOrder();

    if (isOrderLoading || isCartLoading) {
        return <Spinner />;
    }

    if (orderResponse) {
        return <Navigate to={`/order/${orderResponse.name}`} />;
    }

    if (!cartData?.length) {
        return <InfoText>{t("cart.empty")}</InfoText>;
    }

    return (
        <div className={css.wrapper}>
            <Title>{t("cart.title")}</Title>
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
