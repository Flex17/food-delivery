import { IAuthRequest } from "shared/types.ts";
import { ICartProduct, IProduct } from "entities/product";

export interface IHandleProductRequest extends IAuthRequest {
    product: ICartProduct;
}

interface IOrderProduct {
    product: IProduct;
    quantity: number;
}

export interface IAddProductRequest extends IAuthRequest {
    product: IOrderProduct;
}
