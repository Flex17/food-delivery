import { OrdersProductCard } from "entities/product";
import type { Meta, StoryObj } from "@storybook/react";
import { IOrderProduct } from "entities/product/model/types.ts";
import { OrderCard } from "entities/order";
import { IHistoryOrderData } from "entities/order/api/types.ts";

const meta = {
    title: "entities/OrderCard",
    component: OrderCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof OrderCard>;

const product: IOrderProduct = {
    product: {
        id: 1,
        name: "Куриные тефтели с картофельным пюре и сливочно-томатным соусом",
        price: 100,
        description: "Куриные тефтели с картофельным пюре и сливочно-томатным соусом — "
            + "это идеальное сочетание нежного мяса куриной грудки, нежного картофельного пюре и ароматного соуса.",
        img: "https://img.eda1.ru/im/menuProduct/635a3c72e3972_w600_jpeg.webp",
    },
    quantity: 0
};

const order: IHistoryOrderData = {
    id: "1",
    products: [{
        id: "1",
        product: {
            id: 1,
            name: "Куриные тефтели с картофельным пюре и сливочно-томатным соусом",
            price: 100,
            description: "Куриные тефтели с картофельным пюре и сливочно-томатным соусом — "
                + "это идеальное сочетание нежного мяса куриной грудки, нежного картофельного пюре и ароматного соуса.",
            img: "https://img.eda1.ru/im/menuProduct/635a3c72e3972_w600_jpeg.webp",
        },
        quantity: 1,
    }],
    totalPrice: 100,
    address: "test address",
    paymentMethod: "По карте",
    localId: "test"
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        order,
        children: <OrdersProductCard data={product} />,
    }
};
