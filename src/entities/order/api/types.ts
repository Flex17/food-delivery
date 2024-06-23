import { IAuthRequest } from "shared/types.ts";
import { ICartProduct } from "entities/product";
import { PaymentMethodT } from "widgets/order-form/model/payment-data.ts";

export interface IOrderData extends IAuthRequest {
    products: ICartProduct[];
    totalPrice: number;
    address: string;
    paymentMethod: PaymentMethodT;
}

export interface IHistoryOrderData extends IOrderData {
    id: string;
}

export interface IMakeOrderResponse {
    name: string;
}
