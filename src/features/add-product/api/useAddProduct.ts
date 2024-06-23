import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";
import { cartAPI } from "entities/cart/api/api.ts";
import { IOrderProduct } from "entities/product/model/types.ts";

export const useAddProduct = () => {
    const [add, requestData] = cartAPI.useAddProductMutation();

    const localId = useAppSelector(authSlice.selectors.localId);

    const onAdd = async (product: IOrderProduct) => {
        try {
            const data = {
                localId,
                product: {
                    ...product,
                    quantity: 1,
                },
            };

            await add(data).unwrap();
        } catch (e) {
            console.log("Error");
        }
    };

    return { onAdd, requestData };
};
