import { useTranslation } from "react-i18next";
import { IOrderProduct } from "../../model/types.ts";
import css from "./OrdersProductCard.module.scss";

interface OrdersProductCardProps {
    data: IOrderProduct;
}

export const OrdersProductCard = ({ data }: OrdersProductCardProps) => {
    const { t } = useTranslation();

    const { product, quantity } = data;

    const { name, id, img, price } = product;

    return (
        <div className={css.product} key={id}>
            <img className={css.picture} src={img} alt={name} />
            <div className={css.product_info}>
                <div>
                    {t("Название")}
                    :
                    {name}
                </div>
                <div>
                    {t("Цена")}
                    :
                    {price}
                </div>
                <div>
                    {t("Количество")}
                    :
                    {quantity}
                </div>
            </div>
        </div>
    );
};
