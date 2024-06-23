import { IAuthRequest } from "shared/types.ts";
import { ICartProduct } from "entities/product";
import { IOrderProduct } from "entities/product/model/types.ts";

export interface IHandleProductRequest extends IAuthRequest {
    product: ICartProduct;
}

export interface IAddProductRequest extends IAuthRequest {
    product: IOrderProduct;
}
