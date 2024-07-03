import { Button } from "shared/ui";
import { useTranslation } from "react-i18next";
import { ICartProduct } from "entities/product";
import { ButtonTheme } from "shared/ui/button/Button.tsx";
import { useDeleteProduct } from "../api/useDeleteProduct.ts";
import css from "./DeleteProductButton.module.scss";

interface DeleteProductButtonProps {
    product: ICartProduct;
}

export const DeleteProductButton = ({ product }: DeleteProductButtonProps) => {
    const { t } = useTranslation("cart");

    const { onDelete, requestData } = useDeleteProduct();

    const deleteProduct = async () => onDelete(product);

    return (
        <Button
            type="button"
            theme={ButtonTheme.ERROR}
            onClick={deleteProduct}
            disabled={requestData.isLoading}
            className={css.btn}
        >
            {t("Удалить")}
        </Button>
    );
};
