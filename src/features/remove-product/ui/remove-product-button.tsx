import { useRemoveProduct } from "../api/useRemoveProduct.ts";
import { QuantityButton } from "shared/ui";
import { ICartProduct } from "entities/product";
import { ReactComponent as MinusIcon } from "./icons/minus.svg";

interface RemoveProductButtonProps {
    product: ICartProduct;
}

export const RemoveProductButton = ({ product }: RemoveProductButtonProps) => {
    const { onRemove, requestData } = useRemoveProduct();

    const removeProduct = async () => onRemove(product);

    return (
        <QuantityButton disabled={requestData.isLoading} onClick={removeProduct}>
            <MinusIcon />
        </QuantityButton>
    );
};
