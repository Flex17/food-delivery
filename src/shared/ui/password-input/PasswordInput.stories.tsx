import { PasswordInput } from "shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "shared/PasswordInput",
    component: PasswordInput,
    tags: ["autodocs"],
    argTypes: {

    },
} satisfies Meta<typeof PasswordInput>;

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
