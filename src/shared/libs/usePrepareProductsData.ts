import { ICartProduct, IProduct } from "entities/product";

type IOrderProductMap = Map<number, { id: string; quantity: number }>;

export const usePrepareProductsData = (orderProducts: ICartProduct[], products: IProduct[]): ICartProduct[] => {
    const orderProductMap: IOrderProductMap = new Map();

    for (const orderProduct of orderProducts) {
        orderProductMap.set(orderProduct.product.id, {
            id: orderProduct.id,
            quantity: orderProduct.quantity,
        });
    }

    if (products.length) {
        return products.map(product => ({
            id: orderProductMap.get(product.id)?.id || product.id.toString(),
            product,
            quantity: orderProductMap.get(product.id)?.quantity || 0,
        }));
    }

    return [];
};
