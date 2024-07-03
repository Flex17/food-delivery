import type { Meta, StoryObj } from "@storybook/react";
import { Registration } from "pages/registration";

const meta = {
    title: "pages/Registration",
    component: Registration,
    tags: ["autodocs"],
} satisfies Meta<typeof Registration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
