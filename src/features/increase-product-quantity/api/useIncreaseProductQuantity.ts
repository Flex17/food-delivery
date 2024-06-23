import { ICartProduct } from "entities/product";
import { cartAPI } from "entities/cart/api/api.ts";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";

export const useIncreaseProductQuantity = () => {
    const [update, requestData] = cartAPI.useUpdateProductQuantityMutation();

    const localId = useAppSelector(authSlice.selectors.localId);

    const onIncrease = async (product: ICartProduct) => {
        try {
            if (product.quantity >= 1) {
                const data = {
                    localId,
                    product: {
                        ...product,
                        quantity: product.quantity + 1,
                    },
                };

                await update(data).unwrap();
            }
        } catch (e) {
            console.log("Error");
        }
    };

    return { onIncrease, requestData };
};
