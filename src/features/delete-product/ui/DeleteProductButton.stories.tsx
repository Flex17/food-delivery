import type { Meta, StoryObj } from "@storybook/react";
import { DeleteProductButton } from "features/delete-product";
import { ICartProduct } from "entities/product";

const meta = {
    title: "features/DeleteProductButton",
    component: DeleteProductButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof DeleteProductButton>;

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
