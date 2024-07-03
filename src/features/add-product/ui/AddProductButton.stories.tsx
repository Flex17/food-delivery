import type { Meta, StoryObj } from "@storybook/react";
import { AddProductButton } from "features/add-product";
import { ICartProduct } from "entities/product";

const meta = {
    title: "features/AddProductButton",
    component: AddProductButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof AddProductButton>;

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
        product,
    }
};
