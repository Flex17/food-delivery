import { useAppDispatch, useAppSelector } from "app/redux/store.ts";
import { cartAPI } from "entities/cart/api/api.ts";
import { productsAPI, productsSlice } from "entities/product";
import { useDynamicPagination, usePrepareProductsData } from "shared/libs";
import { authSlice } from "entities/auth";

export const useDynamicProducts = () => {
    const dispatch = useAppDispatch();

    const localId = useAppSelector(authSlice.selectors.localId);

    const { startAt, endAt, products, total } = useAppSelector(state => state.products);

    const { data: orderProducts, isLoading: isCartProductsLoading } = cartAPI.useGetCartQuery({ localId });
    const { isLoading: isProductsLoading } = productsAPI.useGetTotalQuery();
    const [loadProducts] = productsAPI.useLazyGetAllQuery();

    const preparedProducts = usePrepareProductsData(orderProducts || [], products);

    const increaseStartAt = () => dispatch(productsSlice.actions.increaseStartAt(8));
    const increaseEndAt = () => dispatch(productsSlice.actions.increaseEndAt(8));

    const onLoadProducts = async () => {
        const loadData = {
            startAt,
            endAt,
        };

        return await loadProducts(loadData).unwrap();
    };

    useDynamicPagination(products, total, onLoadProducts, increaseStartAt, increaseEndAt);

    return { preparedProducts, isLoading: isCartProductsLoading || isProductsLoading };
};
