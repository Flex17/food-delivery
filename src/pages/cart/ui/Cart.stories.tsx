import type { Meta, StoryObj } from "@storybook/react";
import { Cart } from "pages/cart";

const meta = {
    title: "pages/Cart",
    component: Cart,
    tags: ["autodocs"],
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
