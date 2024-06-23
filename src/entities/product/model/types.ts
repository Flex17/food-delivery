export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
}

export interface ICartProduct {
    id: string;
    product: IProduct;
    quantity: number;
}

export interface IProductsState {
    products: IProduct[];
    total: number;
    startAt: number;
    endAt: number;
}

export interface IOrderProduct {
    product: IProduct;
    quantity: number;
}
