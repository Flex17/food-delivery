import { ICartProduct } from "entities/product";
import React from "react";
import css from "./menu-product-card.module.scss";

interface ProductCardProps {
    product: ICartProduct;
    addProduct: React.ReactNode;
    children: React.ReactNode;
}

export const MenuProductCard = ({ product, addProduct, children }: ProductCardProps) => {
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
            {quantity > 0 ? children : addProduct}
        </div>
    );
};
