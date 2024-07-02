import { Input } from "shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "shared/Input",
    component: Input,
    tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
// @ts-ignore
    args: {
        placeholder: "Hello",
    },
};

export const WithDescription: Story = {
// @ts-ignore
    args: {
        description: "Description",
        placeholder: "Hello",
    },
};
