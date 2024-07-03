import { useTranslation } from "react-i18next";
import { useAppSelector } from "app/redux/store.ts";
import { MenuProductCard, productsSlice } from "entities/product";
import { useDynamicProducts } from "pages/menu/libs/useDynamicProducts.ts";
import { InfoText } from "shared/ui";
import { AddProductButton } from "features/add-product";
import { RemoveProductButton } from "features/remove-product";
import { IncreaseProductQuantityButton } from "features/increase-product-quantity";
import { PageLoader } from "widgets/page-loader";
import { ProductList } from "./product-list/product-list.tsx";

const Menu = () => {
    const { t } = useTranslation();

    const products = useAppSelector(productsSlice.selectors.products);

    const { preparedProducts, isLoading } = useDynamicProducts();

    if (isLoading && !products.length) {
        return <PageLoader />;
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
                    decrease={<RemoveProductButton product={cartProduct} />}
                    increase={<IncreaseProductQuantityButton product={cartProduct} />}
                />
            ))}
        </ProductList>
    );
};

export default Menu;
