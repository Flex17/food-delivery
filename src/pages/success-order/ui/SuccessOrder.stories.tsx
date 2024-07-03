import type { Meta, StoryObj } from "@storybook/react";
import SuccessOrder from "pages/success-order/ui/SuccessOrder.tsx";

const meta = {
    title: "pages/SuccessOrder",
    component: SuccessOrder,
    tags: ["autodocs"],
} satisfies Meta<typeof SuccessOrder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
