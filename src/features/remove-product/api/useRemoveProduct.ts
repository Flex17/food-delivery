import { ICartProduct } from "entities/product";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";
import { cartAPI } from "entities/cart/api/api.ts";

export const useRemoveProduct = () => {
    const [remove, { isLoading: isRemoving }] = cartAPI.useRemoveProductMutation();
    const [update, { isLoading: isUpdating }] = cartAPI.useUpdateProductQuantityMutation();

    const localId = useAppSelector(authSlice.selectors.localId);

    const onRemove = async (product: ICartProduct) => {
        try {
            const data = {
                localId,
                product,
            };
            await remove(data).unwrap();
        } catch (e) {
            console.log("Error");
        }
    };

    const onDecrease = async (product: ICartProduct) => {
        try {
            if (product.quantity === 1) {
                await onRemove(product);
            } else {
                await update({
                    localId,
                    product: {
                        ...product,
                        quantity: product.quantity - 1,
                    },
                });
            }
        } catch (e) {
            console.log("Error");
        }
    };

    return { onDecrease, isLoading: isRemoving || isUpdating };
};
