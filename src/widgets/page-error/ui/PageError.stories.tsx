import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "widgets/page-error";

const meta = {
    title: "widgets/PageError",
    component: PageError,
    tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
