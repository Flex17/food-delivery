import { Title } from "shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "shared/Title",
    component: Title,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Hello"
    },
};
