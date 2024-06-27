import React from "react";
import { NavLink } from "react-router-dom";
import css from "./nav-item.module.scss";

interface NavItemProps {
    to: string;
    children: React.ReactNode;
}

export const NavItem = ({ to, children }: NavItemProps) => {
    return (
        <li>
            <NavLink className={({ isActive }) => (isActive ? css.nav_active : css.nav_item)} to={to}>
                {children}
            </NavLink>
        </li>
    );
};
