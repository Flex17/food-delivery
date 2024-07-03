import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "pages/menu";

const meta = {
    title: "pages/Menu",
    component: Menu,
    tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
