import { ICartProduct } from "entities/product";
import { cartAPI } from "entities/cart/api/api.ts";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";

export const useDeleteProduct = () => {
    const [remove, requestData] = cartAPI.useRemoveProductMutation();

    const localId = useAppSelector(authSlice.selectors.localId);

    const onDelete = async (product: ICartProduct) => {
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

    return { onDelete, requestData };
};
