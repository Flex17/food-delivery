import { ProductList } from "pages/menu/ui/product-list/product-list.tsx";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "app/redux/store.ts";
import { productsSlice } from "entities/product";
import { useDynamicProducts } from "pages/menu/libs/useDynamicProducts.ts";
import { InfoText } from "shared/ui";
import { ProductCard } from "widgets/product-card";
import { RemoveProductButton } from "features/remove-product";

export const Menu = () => {
    const { t } = useTranslation();

    const products = useAppSelector(productsSlice.selectors.products);

    const preparedProducts = useDynamicProducts();

    if (!products) {
        return <InfoText>{t("menu.noProducts")}</InfoText>;
    }

    return (
        <ProductList>
            {preparedProducts.map(cartProduct => (
                <ProductCard
                    key={cartProduct.product.id}
                    product={cartProduct}
                    addProduct={<div>add product</div>}
                    removeProduct={<RemoveProductButton product={cartProduct} />}
                />
            ))}
        </ProductList>
    );
};
