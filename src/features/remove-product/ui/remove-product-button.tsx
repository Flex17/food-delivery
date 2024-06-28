import { QuantityButton } from "shared/ui";
import { ICartProduct } from "entities/product";
import { useRemoveProduct } from "../api/useRemoveProduct.ts";
import { ReactComponent as MinusIcon } from "./icons/minus.svg";

interface RemoveProductButtonProps {
    product: ICartProduct;
}

export const RemoveProductButton = ({ product }: RemoveProductButtonProps) => {
    const { onDecrease, isLoading } = useRemoveProduct();

    const removeProduct = async () => onDecrease(product);

    return (
        <QuantityButton disabled={isLoading} onClick={removeProduct}>
            <MinusIcon />
        </QuantityButton>
    );
};
