import React from "react";
import { ICartProduct } from "entities/product";
import { useTranslation } from "react-i18next";
import css from "./cart-product-card.module.scss";

interface CartProductCardProps {
    data: ICartProduct;
    removeProduct: React.ReactNode;
    children: React.ReactNode;
}

export const CartProductCard = ({ data, removeProduct, children }: CartProductCardProps) => {
    const { t } = useTranslation();

    const { quantity, product } = data;

    const {
        img, name, price, description,
    } = product;

    return (
        <div className={css.wrapper}>
            <img className={css.picture} src={img} alt={name} />
            <div className={css.description_block}>
                <h4 className={css.title}>{name}</h4>
                <p className={css.description}>{description}</p>
                <div className={css.price_container}>
                    <div className={css.price_block}>
                        {t("history.card.price")}
                        :
                        {price}
                        {" "}
                        ₽
                    </div>
                    <div className={css.price_block}>
                        {t("history.card.cost")}
                        :
                        {price * quantity}
                        {" "}
                        ₽
                    </div>
                </div>
            </div>
            {children}
            {removeProduct}
        </div>
    );
};
