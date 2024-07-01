import { classNames } from "shared/libs";
import { ICartProduct } from "entities/product";
import React from "react";
import { useTranslation } from "react-i18next";
import { ProductQuantity } from "shared/ui";
import css from "./CartProductCard.module.scss";

interface CartProductCardProps {
    className?: string;
    data: ICartProduct;
    removeProduct: React.ReactNode;
    increase: React.ReactNode;
    decrease: React.ReactNode;
}

export const CartProductCard = ({ className, removeProduct, data, increase, decrease }: CartProductCardProps) => {
    const { t } = useTranslation("cart");

    const { quantity, product } = data;

    const { img, name, price, description } = product;

    return (
        <div className={classNames(css.wrapper, {}, [className])}>
            <img className={css.picture} src={img} alt={name} />
            <div className={css.description_block}>
                <h4 className={css.title}>{name}</h4>
                <p className={css.description}>{description}</p>
                <div className={css.price_container}>
                    <div className={css.price_block}>
                        {t("Цена")}
                        :
                        {price}
                        {" "}
                        ₽
                    </div>
                    <div className={css.price_block}>
                        {t("Стоимость")}
                        :
                        {price * quantity}
                        {" "}
                        ₽
                    </div>
                </div>
            </div>
            <div className={css.controls_wrapper}>
                {decrease}
                <ProductQuantity quantity={quantity} />
                {increase}
            </div>
            {removeProduct}
        </div>
    );
};
