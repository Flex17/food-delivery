import { classNames } from "shared/libs";
import css from "./ProductQuantity.module.scss";

interface ProductQuantityProps {
    quantity: number;
    className?: string;
}

export const ProductQuantity = ({ className, quantity }: ProductQuantityProps) => (
    <div className={classNames(css.wrapper, {}, [className])}>
        <span>{quantity}</span>
    </div>
);
