import { ICartProduct } from "entities/product";
import React from "react";
import { ProductQuantity } from "shared/ui";
import css from "./MenuProductCard.module.scss";

interface ProductCardProps {
    product: ICartProduct;
    addProduct: React.ReactNode;
    increase: React.ReactNode;
    decrease: React.ReactNode;
}

export const MenuProductCard = ({ product, addProduct, increase, decrease }: ProductCardProps) => {
    const { quantity, product: productData } = product;
    const { img, name, description, price } = productData;

    return (
        <div className={css.wrapper}>
            <div className={css.picture_block}>
                <img className={css.picture} src={img} alt={name} />
                <div className={css.price}>
                    <span>
                        {price}
                        {" "}
                        ₽
                    </span>
                </div>
            </div>
            <h4 className={css.name}>{name}</h4>
            <p className={css.description}>{description}</p>
            {quantity > 0 ? (
                <div className={css.controls_wrapper}>
                    {decrease}
                    <ProductQuantity quantity={quantity} />
                    {increase}
                </div>
            ) : (
                addProduct
            )}
        </div>
    );
};
