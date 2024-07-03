import type { Meta, StoryObj } from "@storybook/react";
import { Authorization } from "pages/authorization";

const meta = {
    title: "pages/Authorization",
    component: Authorization,
    tags: ["autodocs"],
} satisfies Meta<typeof Authorization>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
