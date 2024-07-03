import type { Meta, StoryObj } from "@storybook/react";
import { LogoutButton } from "features/logout";

const meta = {
    title: "features/LogoutButton",
    component: LogoutButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LogoutButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
