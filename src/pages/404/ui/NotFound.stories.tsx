import type { Meta, StoryObj } from "@storybook/react";
import { NotFound } from "pages/404";

const meta = {
    title: "pages/NotFound",
    component: NotFound,
    tags: ["autodocs"],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
