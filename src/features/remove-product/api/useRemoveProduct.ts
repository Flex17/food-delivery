import { ICartProduct } from "entities/product";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";
import { cartAPI } from "entities/cart/api/api.ts";

export const useRemoveProduct = () => {
    const [remove, requestData] = cartAPI.useRemoveProductMutation();

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

    return {
        onRemove,
        requestData,
    };
};
