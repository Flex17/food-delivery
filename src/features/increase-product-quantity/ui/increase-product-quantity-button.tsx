import { useIncreaseProductQuantity } from "../api/useIncreaseProductQuantity.ts";
import { QuantityButton } from "shared/ui";
import { ICartProduct } from "entities/product";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";

interface IncreaseProductQuantityButtonProps {
    product: ICartProduct;
}

export const IncreaseProductQuantityButton = ({ product }: IncreaseProductQuantityButtonProps) => {
    const { onIncrease, requestData } = useIncreaseProductQuantity();

    const increase = async () => onIncrease(product);

    return (
        <QuantityButton disabled={requestData.isLoading} onClick={increase}>
            <PlusIcon />
        </QuantityButton>
    );
};
