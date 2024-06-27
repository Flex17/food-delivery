import { cartAPI } from "entities/cart/api/api.ts";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";
import { useMemo } from "react";
import { PaymentMethodT } from "widgets/order-form/model/payment-data.ts";
import { ordersAPI } from "entities/order/api/api.ts";

export const useMakeOrder = () => {
    const localId = useAppSelector(authSlice.selectors.localId);

    const [makeOrder, { data: orderResponse, isLoading: isOrderLoading }] = ordersAPI.useMakeOrderMutation();

    const [clearCart] = cartAPI.useClearCartMutation();
    const [updateOrders] = ordersAPI.useLazyGetAllQuery();

    const { data: cartData, isLoading: isCartLoading } = cartAPI.useGetCartQuery({ localId });

    const cost = useMemo(() => {
        return cartData?.reduce((total, { quantity, product }) => total + product.price * quantity, 0);
    }, [cartData]);

    const onOrder = async (address: string, paymentMethod: PaymentMethodT) => {
        try {
            if (cartData && cost) {
                await makeOrder({
                    address,
                    paymentMethod,
                    products: cartData,
                    localId,
                    totalPrice: cost,
                }).unwrap();
                await Promise.all([clearCart({ localId }).unwrap(), updateOrders({ localId }).unwrap()]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return { onOrder, cartData, isCartLoading, orderResponse, isOrderLoading };
};
