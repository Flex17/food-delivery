import type { Meta, StoryObj } from "@storybook/react";
import { AuthorizationForm } from "widgets/authorization-form";

const meta = {
    title: "widgets/AuthorizationForm",
    component: AuthorizationForm,
    tags: ["autodocs"],
} satisfies Meta<typeof AuthorizationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
