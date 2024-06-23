import { Button } from "shared/ui";
import { useTranslation } from "react-i18next";
import { useDeleteProduct } from "../api/useDeleteProduct.ts";
import { ICartProduct } from "entities/product";
import cx from "classnames";
import css from "./delete-product-button.module.scss";

interface DeleteProductButtonProps {
    product: ICartProduct;
}

export const DeleteProductButton = ({ product }: DeleteProductButtonProps) => {
    const { t } = useTranslation();

    const { onDelete, requestData } = useDeleteProduct();

    const deleteProduct = async () => onDelete(product);

    return (
        <Button
            type="button"
            onClick={deleteProduct}
            disabled={requestData.isLoading}
            styles={cx(css.btn, requestData.isLoading && css.disabled)}
            state="default"
        >
            {t("cart.form.delete")}
        </Button>
    );
};
