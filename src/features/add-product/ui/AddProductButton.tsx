import { Button } from "shared/ui";
import { useTranslation } from "react-i18next";
import { ICartProduct } from "entities/product";
import { useAddProduct } from "../api/useAddProduct.ts";

interface AddProductButtonProps {
    product: ICartProduct;
}

export const AddProductButton = ({ product }: AddProductButtonProps) => {
    const { t } = useTranslation();

    const { onAdd, requestData } = useAddProduct();

    const addProduct = async () => onAdd(product);

    return (
        <Button type="button" onClick={addProduct} disabled={requestData.isLoading}>
            {t("Добавить в корзину")}
        </Button>
    );
};
