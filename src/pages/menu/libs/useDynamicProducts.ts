import { useAppDispatch, useAppSelector } from "app/redux/store.ts";
import { cartAPI } from "entities/cart/api/api.ts";
import { ICartProduct, productsAPI, productsSlice } from "entities/product";
import { useDynamicPagination, usePrepareProductsData } from "shared/libs";
import { authSlice } from "entities/auth";

export const useDynamicProducts = () => {
    const dispatch = useAppDispatch();

    const localId = useAppSelector(authSlice.selectors.localId);

    const { startAt, endAt, products, total } = useAppSelector(state => state.products);

    const { data: orderProducts } = cartAPI.useGetCartQuery({ localId });
    productsAPI.useGetTotalQuery();
    const [loadProducts] = productsAPI.useLazyGetAllQuery();

    const preparedProducts: ICartProduct[] = usePrepareProductsData(orderProducts || [], products);

    const increaseStartAt = () => dispatch(productsSlice.actions.increaseStartAt(8));
    const increaseEndAt = () => dispatch(productsSlice.actions.increaseEndAt(8));

    const onLoadProducts = () => {
        const loadData = {
            startAt,
            endAt,
        };

        return loadProducts(loadData);
    };

    useDynamicPagination(products, total, onLoadProducts, increaseStartAt, increaseEndAt);

    return preparedProducts;
};
