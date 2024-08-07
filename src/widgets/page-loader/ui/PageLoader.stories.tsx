import type { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "widgets/page-loader";

const meta = {
    title: "widgets/PageLoader",
    component: PageLoader,
    tags: ["autodocs"],
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
