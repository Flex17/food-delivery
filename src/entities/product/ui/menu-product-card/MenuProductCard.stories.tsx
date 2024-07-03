import { ICartProduct, MenuProductCard } from "entities/product";
import type { Meta, StoryObj } from "@storybook/react";
import { IncreaseProductQuantityButton } from "features/increase-product-quantity";
import { RemoveProductButton } from "features/remove-product";
import { AddProductButton } from "features/add-product";

const meta = {
    title: "entities/MenuProductCard",
    component: MenuProductCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof MenuProductCard>;

const product: ICartProduct = {
    id: "1",
    product: {
        id: 1,
        name: "Куриные тефтели с картофельным пюре и сливочно-томатным соусом",
        price: 100,
        description: "Куриные тефтели с картофельным пюре и сливочно-томатным соусом — "
            + "это идеальное сочетание нежного мяса куриной грудки, нежного картофельного пюре и ароматного соуса.",
        img: "https://img.eda1.ru/im/menuProduct/635a3c72e3972_w600_jpeg.webp",
    },
    quantity: 2
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        product: { ...product, quantity: 0 },
        addProduct: <AddProductButton product={product} />,
        increase: <IncreaseProductQuantityButton product={product} />,
        decrease: <RemoveProductButton product={product} />,
    }
};

export const Added: Story = {
    args: {
        product: { ...product, quantity: 2 },
        addProduct: <AddProductButton product={product} />,
        increase: <IncreaseProductQuantityButton product={product} />,
        decrease: <RemoveProductButton product={product} />,
    }
};
