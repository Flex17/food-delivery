import { useMemo } from "react";
import { ICartProduct, IProduct } from "entities/product";

export const usePrepareProductsData = (orderProducts: ICartProduct[], products: IProduct[]) => {
    const orderProductMap = useMemo(() => {
        const map: { [key: number]: { id: string; quantity: number } } = {};
        for (const orderProduct of orderProducts) {
            map[orderProduct.product.id] = {
                id: orderProduct.id,
                quantity: orderProduct.quantity,
            };
        }
        return map;
    }, [orderProducts]);

    return useMemo(() => {
        return products.map(product => ({
            id: orderProductMap[product.id]?.id || product.id.toString(),
            product,
            quantity: orderProductMap[product.id]?.quantity || 0,
        }));
    }, [products, orderProductMap]);
};
