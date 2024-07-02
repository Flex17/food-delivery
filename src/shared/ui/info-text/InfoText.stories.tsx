import { InfoText } from "shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "shared/InfoText",
    component: InfoText,
    tags: ["autodocs"],
    args: { children: "Hello" },
} satisfies Meta<typeof InfoText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
