import { ICartProduct } from "entities/product";
import { useTranslation } from "react-i18next";
import css from "./product-card.module.scss";
import React from "react";
import { Button } from "shared/ui";

interface ProductCardProps {
    product: ICartProduct;
    removeProduct: React.ReactNode;
    addProduct: React.ReactNode;
}

export const ProductCard = ({ product, addProduct, removeProduct }: ProductCardProps) => {
    const { t } = useTranslation();

    const { quantity, product: productData } = product;
    const { img, name, description, price } = productData;

    return (
        <div className={css.wrapper}>
            <div className={css.picture_block}>
                <img className={css.picture} src={img} alt={name} />
                <div className={css.price}>
                    <span>{price} ₽</span>
                </div>
            </div>
            <h4 className={css.name}>{name}</h4>
            <p className={css.description}>{description}</p>
            {quantity > 0 ? (
                <div>
                    {removeProduct}
                    <div>
                        <span>{quantity}</span>
                    </div>
                    {addProduct}
                </div>
            ) : (
                <Button state="default">{t("productCard.toCart")}</Button>
            )}
        </div>
    );
};
