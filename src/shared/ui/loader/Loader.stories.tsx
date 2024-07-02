import { Loader } from "shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "shared/Loader",
    component: Loader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
