import { RemoveProductButton } from "features/remove-product";
import type { Meta, StoryObj } from "@storybook/react";
import { CartProductCard, ICartProduct } from "entities/product";
import { IncreaseProductQuantityButton } from "features/increase-product-quantity";
import { DeleteProductButton } from "features/delete-product";

const meta = {
    title: "entities/CartProductCard",
    component: CartProductCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CartProductCard>;

const product: ICartProduct = {
    id: "1",
    product: {
        id: 1,
        name: "Куриные тефтели с картофельным пюре и сливочно-томатным соусом",
        price: 100,
        description: "Куриные тефтели с картофельным пюре и сливочно-томатным соусом — это идеальное сочетание "
            + "нежного мяса куриной грудки, нежного картофельного пюре и ароматного соуса.",
        img: "https://img.eda1.ru/im/menuProduct/635a3c72e3972_w600_jpeg.webp",
    },
    quantity: 2
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: product,
        removeProduct: <DeleteProductButton product={product} />,
        increase: <IncreaseProductQuantityButton product={product} />,
        decrease: <RemoveProductButton product={product} />,
    }
};
