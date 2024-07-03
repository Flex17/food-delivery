import type { Meta, StoryObj } from "@storybook/react";
import Orders from "pages/orders/ui/Orders.tsx";

const meta = {
    title: "pages/Orders",
    component: Orders,
    tags: ["autodocs"],
} satisfies Meta<typeof Orders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
