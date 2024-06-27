import { classNames } from "shared/libs";
import css from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Logo } from "widgets/navbar/ui/logo/logo.tsx";
import { NavItem } from "widgets/navbar/ui/nav-item/nav-item.tsx";
import { PrivateRouterPath } from "shared/config/router/privateRouteConfig.tsx";
import { ReactComponent as CartIcon } from "shared/assets/cart-icon.svg";
import { NavLink } from "react-router-dom";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <header className={classNames(css.wrapper, {}, [className])}>
            <nav className={classNames("wrapper", {}, [css.nav])}>
                <div className={css.nav_block}>
                    <Logo />
                    <ul className={css.nav_items}>
                        <NavItem to={PrivateRouterPath.menu}>{t("navbar.menu")}</NavItem>
                        <NavItem to={PrivateRouterPath.orders}>{t("navbar.orders")}</NavItem>
                    </ul>
                </div>
                <NavLink to="/cart">
                    <CartIcon />
                </NavLink>
            </nav>
        </header>
    );
};
