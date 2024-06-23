import { ProductList } from "pages/menu/ui/product-list/product-list.tsx";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "app/redux/store.ts";
import { productsSlice } from "entities/product";
import { useDynamicProducts } from "pages/menu/libs/useDynamicProducts.ts";
import { InfoText, Spinner } from "shared/ui";
import { MenuProductCard } from "widgets/menu-product-card";
import { ProductQuantityControls } from "widgets/product-quantity-controls";
import { AddProductButton } from "features/add-product";
import { RemoveProductButton } from "features/remove-product";
import { IncreaseProductQuantityButton } from "features/increase-product-quantity";

const Menu = () => {
    const { t } = useTranslation();

    const products = useAppSelector(productsSlice.selectors.products);

    const { preparedProducts, isLoading } = useDynamicProducts();

    if (isLoading && !products.length) {
        return <Spinner />;
    }

    if (!products.length && !isLoading) {
        return <InfoText>{t("menu.noProducts")}</InfoText>;
    }

    return (
        <ProductList>
            {preparedProducts.map(cartProduct => (
                <MenuProductCard
                    key={cartProduct.product.id}
                    product={cartProduct}
                    addProduct={<AddProductButton product={cartProduct} />}
                >
                    <ProductQuantityControls
                        descrease={<RemoveProductButton product={cartProduct} />}
                        increase={<IncreaseProductQuantityButton product={cartProduct} />}
                    >
                        {cartProduct.quantity}
                    </ProductQuantityControls>
                </MenuProductCard>
            ))}
        </ProductList>
    );
};

export default Menu;
