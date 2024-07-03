import type { Meta, StoryObj } from "@storybook/react";
import { ICartProduct } from "entities/product";
import { RemoveProductButton } from "features/remove-product";

const meta = {
    title: "features/RemoveProductButton",
    component: RemoveProductButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof RemoveProductButton>;

const product: ICartProduct = {
    id: "1",
    product: {
        id: 1,
        name: "test product",
        price: 100,
        description: "description",
        img: "img",
    },
    quantity: 1
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        product
    }
};
