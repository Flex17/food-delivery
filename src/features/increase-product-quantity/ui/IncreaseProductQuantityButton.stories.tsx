import type { Meta, StoryObj } from "@storybook/react";
import { IncreaseProductQuantityButton } from "features/increase-product-quantity";
import { ICartProduct } from "entities/product";

const meta = {
    title: "features/IncreaseProductQuantityButton",
    component: IncreaseProductQuantityButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof IncreaseProductQuantityButton>;

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
