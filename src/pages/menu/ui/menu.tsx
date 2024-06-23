import { ProductList } from "pages/menu/ui/product-list/product-list.tsx";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "app/redux/store.ts";
import { productsSlice } from "entities/product";
import { useDynamicProducts } from "pages/menu/libs/useDynamicProducts.ts";
import { InfoText } from "shared/ui";
import { ProductCard } from "widgets/product-card";
import { RemoveProductButton } from "features/remove-product";
import { AddProductButton } from "features/add-product";
import { IncreaseProductQuantityButton } from "features/increase-product-quantity";

export const Menu = () => {
    const { t } = useTranslation();

    const products = useAppSelector(productsSlice.selectors.products);

    const { preparedProducts, isLoading } = useDynamicProducts();

    if (!products.length && !isLoading) {
        return <InfoText>{t("menu.noProducts")}</InfoText>;
    }

    return (
        <ProductList>
            {preparedProducts.map(cartProduct => (
                <ProductCard
                    key={cartProduct.product.id}
                    product={cartProduct}
                    addProduct={<AddProductButton product={cartProduct} />}
                    removeProduct={<RemoveProductButton product={cartProduct} />}
                    increaseProductQuantity={<IncreaseProductQuantityButton product={cartProduct} />}
                />
            ))}
        </ProductList>
    );
};
