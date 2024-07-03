import { OrdersProductCard } from "entities/product";
import type { Meta, StoryObj } from "@storybook/react";
import { IOrderProduct } from "entities/product/model/types.ts";

const meta = {
    title: "entities/OrdersProductCard",
    component: OrdersProductCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof OrdersProductCard>;

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
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: { ...product, quantity: 0 },
    }
};
