import type { Meta, StoryObj } from "@storybook/react";
import { ChangeAuthMethod } from "features/change-auth-method";

const meta = {
    title: "features/ChangeAuthMethod",
    component: ChangeAuthMethod,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ChangeAuthMethod>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
