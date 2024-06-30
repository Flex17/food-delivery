import { QuantityButton } from "shared/ui";
import { ICartProduct } from "entities/product";
import { useIncreaseProductQuantity } from "../api/useIncreaseProductQuantity.ts";

interface IncreaseProductQuantityButtonProps {
    product: ICartProduct;
}

export const IncreaseProductQuantityButton = ({ product }: IncreaseProductQuantityButtonProps) => {
    const { onIncrease, requestData } = useIncreaseProductQuantity();

    const increase = async () => onIncrease(product);

    return (
        <QuantityButton disabled={requestData.isLoading} onClick={increase}>
            +
        </QuantityButton>
    );
};
