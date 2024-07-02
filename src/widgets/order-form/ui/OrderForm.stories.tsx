import type { Meta, StoryObj } from "@storybook/react";
import { OrderForm } from "widgets/order-form";

const meta = {
    title: "widgets/OrderForm",
    component: OrderForm,
    tags: ["autodocs"],
} satisfies Meta<typeof OrderForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        order: jest.fn()
    },
};
