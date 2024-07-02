import { Dropdown } from "shared/ui";
import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

const mockedItems = [
    {
        id: 1,
        value: "Value 1",
    },
    {
        id: 2,
        value: "Value 2",
    },
    {
        id: 3,
        value: "Value 3",
    },
];

const meta = {
    title: "shared/Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
    args: { currentItem: null, title: "Title", items: mockedItems, setCurrentItem: fn() },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
