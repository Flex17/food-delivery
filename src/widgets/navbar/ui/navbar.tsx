import React from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import { ReactComponent as CartIcon } from "shared/assets/cart-icon.svg";
import css from "./navbar.module.scss";

interface NavbarProps {
    logo: React.ReactNode;
    children: React.ReactNode;
}

export const Navbar = ({ logo, children }: NavbarProps) => {
    return (
        <header className={css.wrapper}>
            <nav className={cx("wrapper", css.nav)}>
                <div className={css.nav_block}>
                    {logo}
                    <ul className={css.nav_items}>{children}</ul>
                </div>
                <NavLink to="/cart">
                    <CartIcon />
                </NavLink>
            </nav>
        </header>
    );
};
