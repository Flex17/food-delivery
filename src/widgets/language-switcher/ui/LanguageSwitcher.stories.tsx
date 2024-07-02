import type { Meta, StoryObj } from "@storybook/react";
import { LanguageSwitcher } from "widgets/language-switcher";

const meta = {
    title: "widgets/LanguageSwitcher",
    component: LanguageSwitcher,
    tags: ["autodocs"],
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Short: Story = {
    args: {
        short: true,
    },
};
