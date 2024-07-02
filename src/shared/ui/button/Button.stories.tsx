import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "shared/ui";
import { ButtonSize, ButtonTheme } from "shared/ui/button/Button.tsx";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },
    args: { onClick: fn(), children: "Hello" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        theme: ButtonTheme.DEFAULT,
    },
};

export const Error: Story = {
    args: {
        theme: ButtonTheme.ERROR,
    },
};

export const Dark: Story = {
    args: {
        theme: ButtonTheme.DARK,
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};

export const SizeM: Story = {
    args: {
        theme: ButtonTheme.DEFAULT,
        size: ButtonSize.M,
    },
};

export const SizeL: Story = {
    args: {
        theme: ButtonTheme.DEFAULT,
        size: ButtonSize.L,
    },
};

export const SizeXL: Story = {
    args: {
        theme: ButtonTheme.DEFAULT,
        size: ButtonSize.XL,
    },
};

export const RoundedM: Story = {
    args: {
        theme: ButtonTheme.DEFAULT,
        rounded: true,
        size: ButtonSize.M,
        children: "+"
    },
};

export const RoundedL: Story = {
    args: {
        theme: ButtonTheme.DEFAULT,
        rounded: true,
        size: ButtonSize.L,
        children: "+"
    },
};

export const RoundedXL: Story = {
    args: {
        theme: ButtonTheme.DEFAULT,
        rounded: true,
        size: ButtonSize.XL,
        children: "+"
    },
};
