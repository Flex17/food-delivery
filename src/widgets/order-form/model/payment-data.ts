export type PaymentMethodT = "Наличными" | "По карте";
export const paymentMethods: PaymentMethodT[] = ["Наличными", "По карте"];

export interface IPaymentMethod {
    id: number;
    value: PaymentMethodT;
}

export const PaymentMethods: IPaymentMethod[] = [
    { id: 0, value: "Наличными" },
    { id: 1, value: "По карте" },
];
